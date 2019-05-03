import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const LoadingRing = styled.div`
  @keyframes loading-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  display: inline-block;
  width: 64px;
  height: 64px;

  &:after {
    content: " ";
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid ${({ color }) => color};
    border-color: ${({ color }) => color} transparent ${({ color }) => color} transparent;
    animation: loading-ring 1.2s linear infinite;
  }
`

const Loader = ({ color, children }) => (
  <Container>
    {children}
    {!children &&
      <LoadingRing color={color} />
    }
  </Container>
)

Loader.propTypes = {
  color: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default Loader
