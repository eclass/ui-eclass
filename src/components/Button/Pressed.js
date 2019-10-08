// @External Dependencies
import * as React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Ripples from 'react-touch-ripple'

// @Component
const Pressed = ({
  children,
  disabled,
  color,
  dark,
  under,
  timeout,
  opacity
}) => {
  const filterOpacity = () => {
    return dark ? 0.2 : opacity
  }

  const filterColor = () => {
    if (color) {
      return color
    } else {
      return dark ? 'rgb(204, 204, 204)' : 'rgb(255, 255, 255)'
    }
  }

  return disabled ? (
    <div className="Pressed__content">{children}</div>
  ) : (
    <Wrap
      color={filterColor()}
      timeout={timeout}
      under={under}
      opacity={filterOpacity()}>
      {children}
    </Wrap>
  )
}

// @Proptypes
Pressed.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  opacity: PropTypes.number,
  timeout: PropTypes.number,
  state: PropTypes.string,
  under: PropTypes.bool
}

Pressed.defaultProps = {
  opacity: 0.2,
  timeout: 1000,
  under: true
}

// @Export Component
export default Pressed

const Wrap = ({ color, timeout, under, children, opacity }) => (
  <StyledWrap opacity={opacity}>
    <Ripples
      color={color}
      timeout={{
        enter: timeout,
        exit: timeout
      }}>
      <div className={`Pressed__content ${under ? 'under' : ''}`}>
        {children}
      </div>
    </Ripples>
  </StyledWrap>
)

// @Export Component
const StyledWrap = styled.div`
  height: 100%;
  & > div {
    height: 100%;
    position: relative;
    z-index: 1;
  }
  .Pressed__content {
    height: 100%;

    & + span {
      margin: 0;
    }
  }
  .under {
    z-index: 2;
  }
  .rtr-ripple-entering {
    opacity: ${props => props.opacity};
  }
`
