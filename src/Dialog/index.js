import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({ background }) => background};
  box-shadow: 5px 5px 10px 2px ${({ shadowColor }) => shadowColor};
  overflow: hidden;\
  display: flex;
  flex-direction: column;
`

const ScrollWrapper = styled.div`
  width: 100%;
  overflow: auto;
  flex: 1;
`

const Header = styled.div`
  background: ${({ background }) => background};
  display: flex;
  flex-direction: row;
  padding: 8px;
`

const Title = styled.h3`
  font-family: ${({ fontFamily }) => fontFamily};
  color: ${({ color }) => color};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: 14px;
  margin: 8px 0 0 0;
  flex: 5;
  text-align: center;
`

const CloseButton = styled.button`
  color: ${({ color }) => color};
  background: none;
  border: none;
  outline: none;
`

const BackButton = styled.button`
  opacity: ${({ showBack }) => showBack ? 1 : 0};
  color: ${({ color }) => color};
  background: none;
  border: none;
  outline: none;
`

const Body = styled.ul`
  font-family: ${({ fontFamily }) => fontFamily};
  color: ${({ color }) => color};
  list-style: none;
  margin: 0;
  padding: 16px;
  font-size: 14px;
`

const Field = styled.li`

`

const Label = styled.label`
  font-weight: 600;
`

const Value = styled.div`

`

const EventLink = styled.a`
  color: ${({ color }) => color};
  display: block;
`

export default class Dialog extends Component {
  static propTypes = {
    events: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      localTime: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      lat: PropTypes.number.isRequired,
      lon: PropTypes.number.isRequired,
      location: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })),
    closeDialog: PropTypes.func.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    theme: PropTypes.shape({
      titleFontFamily: PropTypes.string.isRequired,
      titleFontColor: PropTypes.string.isRequired,
      titleFontWeight: PropTypes.string.isRequired,
      headerBackground: PropTypes.string.isRequired,
      bodyBackground: PropTypes.string.isRequired,
      containerBackground: PropTypes.string.isRequired,
      shadowColor: PropTypes.string.isRequired,
      buttonColor: PropTypes.string.isRequired,
      bodyFontFamily: PropTypes.string.isRequired,
      bodyFontColor: PropTypes.string.isRequired,
      linkColor: PropTypes.string.isRequired,
      backButton: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
      ]).isRequired,
      closeButton: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
      ]).isRequired
    }).isRequired
  }

  constructor (props) {
    super(props)
    this.state = { selectedEvent: -1 }
  }

  goBack = () => {
    this.setState({ selectedEvent: -1 })
  }

  selectEvent = (index) => {
    this.setState({ selectedEvent: index })
  }

  getHeader (title, showBack) {
    const { closeDialog, theme } = this.props
    return (
      <Header background={theme.headerBackground}>
        <BackButton
          showBack={showBack}
          onClick={() => showBack && this.goBack()}
          color={theme.buttonColor}
        >
          {theme.backButton}
        </BackButton>
        <Title
          color={theme.titleFontColor}
          fontFamily={theme.titleFontFamily}
          fontWeight={theme.titleFontWeight}
        >
          {title}
        </Title>
        <CloseButton
          onClick={closeDialog}
          color={theme.buttonColor}
        >
          {theme.closeButton}
        </CloseButton>
      </Header>
    )
  }

  getSelectEventHandler (index) {
    return (e) => {
      e.preventDefault()
      this.selectEvent(index)
    }
  }

  renderMultipleEvents () {
    const { events, width, height, theme } = this.props
    const title = `Events near ${events[0].location}`
    return (
      <Container width={width} height={height} background={theme.containerBackground} shadowColor={theme.shadowColor}>
        {this.getHeader(title, false)}
        <ScrollWrapper>
          <Body background={theme.bodyBackground}>
            {events.map((event, index) => (
              <Field key={event.id}>
                <EventLink href='#' onClick={this.getSelectEventHandler(index)} color={theme.linkColor}>{event.name}</EventLink>
              </Field>
            ))}
          </Body>
        </ScrollWrapper>
      </Container>
    )
  }

  renderSingleEvent (event) {
    const { width, height, theme } = this.props
    return (
      <Container width={width} height={height} background={theme.containerBackground} shadowColor={theme.shadowColor}>
        {this.getHeader(event.name, this.props.events.length > 1)}
        <ScrollWrapper>
          <Body fontFamily={theme.bodyFontFamily} color={theme.bodyFontColor} background={theme.bodyBackground}>
            <Field>
              <Label>Where?</Label>
              <Value>{event.location}</Value>
            </Field>
            <Field>
              <Label>When?</Label>
              <Value>{event.date} {event.localTime}</Value>
            </Field>
            <Field>
              <Label>Event URL:</Label>
              <EventLink href={event.url} target='_blank' color={theme.linkColor}>{event.url}</EventLink>
            </Field>
          </Body>
        </ScrollWrapper>
      </Container>
    )
  }

  render () {
    const { events } = this.props
    const { selectedEvent } = this.state
    if (events.length > 1 && selectedEvent < 0) return this.renderMultipleEvents()
    const event = events.length > 1 ? events[selectedEvent] : events[0]
    return this.renderSingleEvent(event)
  }
}
