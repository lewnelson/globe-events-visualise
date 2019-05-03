import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

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
    events: PropTypes.arrayOf(PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        lat: PropTypes.number.isRequired,
        lon: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        address: PropTypes.string,
        date: PropTypes.string.isRequired,
        localTime: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      }).isRequired
    )).isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    globeTextureURL: PropTypes.string.isRequired,
    globeBumpTextureURL: PropTypes.string,
    initZoomLevel: PropTypes.number,
    initRotationAnimationDuration: PropTypes.number,
    initRotationPoints: PropTypes.arrayOf(PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lon: PropTypes.number.isRequired,
    })),
    lighting: PropTypes.shape({
      color: PropTypes.number,
      intensity: PropTypes.number,
      angle: PropTypes.number
    }),
    markerDropDistance: PropTypes.number,
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
        shadowColor: PropTypes.string.isRequired,
        linkColor: PropTypes.string,
        buttonColor: PropTypes.string,
        bodyFontFamily: PropTypes.string,
        bodyFontColor: PropTypes.string,
        backButton: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.node
        ]),
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
    theme: {
      markerColor: 0x709cf0,
      markerHighlightColor: 0x1fc1c3,
      markerFontColor: 0x709cf0,
      markerFontHighlightColor: 0x1fc1c3,
      loadingComponent: null,
      loadingComponentColor: '#0000ff',
      dialog: {
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
        backButton: '↞',
        closeButton: '⤫'
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
    if (width > 500) width = 500
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
    const { showDialog, activeEvents } = this.state
    if (!showDialog || !activeEvents) return null
    const { dialog } = this.props.theme || {}
    const defaultDialog = Events.defaultProps.theme.dialog
    return (
      <Dialog
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
        {this.renderDialog()}
      </Container>
    )
  }
}

export default Events
