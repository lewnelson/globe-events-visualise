import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import Scene from './Scene'
import Globe from './Globe'
import GlobeMarker from './GlobeMarker'
import Dialog from './Dialog'
import Loader from './Loader'
import SpotLight from './SpotLight'

const Container = styled.div`
  position: relative;
  display: block;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`

class Events extends Component {
  static propTypes = {
    // Array of events to display on the globe
    events: PropTypes.arrayOf(PropTypes.arrayOf(
      PropTypes.shape({
        // Unique event id
        id: PropTypes.string.isRequired,
        // Latitude
        lat: PropTypes.number.isRequired,
        // Longitude
        lon: PropTypes.number.isRequired,
        // Name (title) of the event
        name: PropTypes.string.isRequired,
        // Location appears on the globe
        location: PropTypes.string.isRequired,
        // Appears in the dialog if defined, otherwise location is used
        address: PropTypes.string,
        // Date of the event
        date: PropTypes.string.isRequired,
        // Local time of the event
        localTime: PropTypes.string.isRequired,
        // URL to the event
        url: PropTypes.string.isRequired
      }).isRequired
    )).isRequired,
    // Width in pixels
    width: PropTypes.number.isRequired,
    // Height in pixels
    height: PropTypes.number.isRequired,
    // URL for the globes main texture
    globeTextureURL: PropTypes.string,
    // URL for a bump map if applicable
    globeBumpTextureURL: PropTypes.string,
    // Floating point between 0 and 1 inclusive
    initZoomLevel: PropTypes.number,
    // How quickly will the globe rotate per 1000km on the init animation
    initRotationAnimationDuration: PropTypes.number,
    // Points to rotate around when the globe loads
    initRotationPoints: PropTypes.arrayOf(PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lon: PropTypes.number.isRequired,
    })),
    // Adjust the lighting for the scene
    lighting: PropTypes.shape({
      color: PropTypes.number,
      intensity: PropTypes.number,
      angle: PropTypes.number
    }),
    // Distance that the markers will drop from space
    markerDropDistance: PropTypes.number,
    // Colors etc.
    theme: PropTypes.shape({
      markerColor: PropTypes.number,
      markerHighlightColor: PropTypes.number,
      markerFontColor: PropTypes.number,
      markerFontHighlightColor: PropTypes.number,
      loadingComponent: PropTypes.node,
      loadingComponentColor: PropTypes.string,
      dialog: PropTypes.shape({
        titleFontFamily: PropTypes.string,
        titleFontColor: PropTypes.string,
        titleFontWeight: PropTypes.string,
        headerBackground: PropTypes.string,
        bodyBackground: PropTypes.string,
        containerBackground: PropTypes.string,
        shadowColor: PropTypes.string,
        linkColor: PropTypes.string,
        buttonColor: PropTypes.string,
        bodyFontFamily: PropTypes.string,
        bodyFontColor: PropTypes.string,
        transitionName: PropTypes.number,
        transitionEnterTimeout: PropTypes.number,
        transitionLeaveTimeout: PropTypes.number,
        transitionAppearTimeout: PropTypes.number,
        // JSX or a string for the character to appear
        backButton: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.node
        ]),
        // JSX or a string for the ionicon icon to appear https://ionicons.com/ prepend ios- or md-
        closeButton: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.node
        ])
      })
    })
  }

  static defaultProps = {
    lighting: {
      color: 0x404040,
      intensity: 8,
      angle: Math.PI / 6
    },
    markerDropDistance: 1,
    initRotationPoints: [],
    globeTextureURL: 'https://lewnelson.github.io/react-globe-events-visualiser/assets/images/textures/realistic-globe/globe.jpg',
    globeBumpTextureURL: 'https://lewnelson.github.io/react-globe-events-visualiser/assets/images/textures/realistic-globe/globe.jpg',
    theme: {
      markerColor: 0x709cf0,
      markerHighlightColor: 0x1fc1c3,
      markerFontColor: 0x709cf0,
      markerFontHighlightColor: 0x1fc1c3,
      loadingComponent: null,
      loadingComponentColor: '#0000ff',
      dialog: {
        transitionName: 'dialog',
        transitionEnterTimeout: 500,
        transitionLeaveTimeout: 500,
        transitionAppearTimeout: 100,
        titleFontFamily: 'sans-serif',
        titleFontColor: '#000',
        titleFontWeight: '600',
        headerBackground: '#ddd',
        bodyBackground: '#eee',
        containerBackground: '#eee',
        shadowColor: '#000',
        linkColor: '#0000ff',
        buttonColor: '#000',
        bodyFontFamily: 'sans-serif',
        bodyFontColor: '#000',
        backButton: 'md-arrow-back',
        closeButton: 'md-close-circle-outline'
      }
    }
  }

  constructor (props) {
    super(props)
    this.state = {
      globeReady: false,
      controlsEnabled: !(props.initRotationPoints.length > 1),
      showDialog: false,
      activeEvents: null
    }
  }

  componentDidMount () {
    this._isMounted = true
  }

  componentWillUnmount () {
    this._isMounted = false
  }

  globeReady = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    this._isMounted && this.setState({ globeReady: true })
  }

  globeOnRotate = () => {
    this.setState({ controlsEnabled: false })
  }

  globeOnRotateEnd = () => {
    this.setState({ controlsEnabled: true })
  }

  async globeMarkerClicked (events, animationTime, done) {
    this.setState({ controlsEnabled: false })
    await new Promise((resolve) => setTimeout(() => resolve(), animationTime))
    if (!this._isMounted) return
    if (done) this.dialogDone = done
    this.setState({
      showDialog: true,
      activeEvents: events
    })
  }

  onDialogClose = () => {
    this.dialogDone && this.dialogDone()
    this.dialogDone = null
    this.setState({ controlsEnabled: true, showDialog: false, activeEvents: null })
  }

  getDialogWidth () {
    let width = this.props.width / 3
    if (width < 320) width = 320
    if (width > 400) width = 400
    return width
  }

  getDialogHeight () {
    let height = this.props.height / 2
    if (height < 300) height = 300
    if (height > 600) height = 600
    return height
  }

  renderLoader () {
    const theme = { ...Events.defaultProps.theme, ...this.props.theme }
    if (theme.loadingComponent) {
      const LoadingComponent = theme.loadingComponent
      return (
        <Loader color={theme.loadingComponentColor}>
          <LoadingComponent />
        </Loader>
      )
    } else {
      return (
        <Loader color={theme.loadingComponentColor} />
      )
    }
  }

  renderDialog () {
    const { activeEvents } = this.state
    const { dialog } = this.props.theme || {}
    const defaultDialog = Events.defaultProps.theme.dialog
    return (
      <Dialog
        key={activeEvents.map(e => e.id).join('')}
        events={activeEvents}
        closeDialog={this.onDialogClose}
        width={this.getDialogWidth()}
        height={this.getDialogHeight()}
        theme={{ ...defaultDialog, ...dialog }}
      />
    )
  }

  render () {
    const lighting = { ...Events.defaultProps.lighting, ...this.props.lighting }
    const theme = { ...Events.defaultProps.theme, ...this.props.theme }
    const dialog = { ...Events.defaultProps.theme.dialog, ...(this.props.theme || {}).dialog }
    return (
      <Container width={this.props.width} height={this.props.height}>
        <Scene width={this.props.width} height={this.props.height} controlsEnabled={this.state.controlsEnabled} initZoomLevel={this.props.initZoomLevel}>
          <SpotLight
            id='main_light'
            intensity={lighting.intensity}
            color={lighting.color}
            angle={lighting.angle}
            distance={1000}
          />
          <Globe
            id='globe'
            imagePath={this.props.globeTextureURL}
            bumpPath={this.props.globeBumpTextureURL}
            radius={30}
            onTextured={this.globeReady}
            onRotate={this.globeOnRotate}
            onRotateEnd={this.globeOnRotateEnd}
            initRotationAnimationDuration={this.props.initRotationAnimationDuration}
            initRotationPoints={this.props.initRotationPoints}
          />
          {this.state.globeReady &&
            this.props.events.map((events, index) => (
              <GlobeMarker
                key={events[0].id}
                id={events[0].id}
                eventCount={events.length}
                globe='globe'
                lat={events[0].lat}
                lon={events[0].lon}
                locationName={events[0].location}
                radius={0.3}
                dropDistance={this.props.markerDropDistance}
                zIndex={index}
                onClick={(animationTime, done) => this.globeMarkerClicked(events, animationTime, done)}
                markerColor={theme.markerColor}
                markerHighlightColor={theme.markerHighlightColor}
                fontColor={theme.markerFontColor}
                fontHighlightColor={theme.markerFontHighlightColor}
              />
            ))
          }
        </Scene>
        {!this.state.globeReady && this.renderLoader()}
        <ReactCSSTransitionGroup
          transitionAppear
          transitionAppearTimeout={dialog.transitionAppearTimeout}
          transitionName={dialog.transitionName}
          transitionEnterTimeout={dialog.transitionEnterTimeout}
          transitionLeaveTimeout={dialog.transitionLeaveTimeout}
        >
          {this.state.showDialog && this.state.activeEvents &&
            {this.renderDialog()}
          }
        </ReactCSSTransitionGroup>
      </Container>
    )
  }
}

export default Events
