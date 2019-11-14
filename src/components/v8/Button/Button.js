import React from 'react'
import { StyledButton, StyledIcon } from './styles'
import Pressed from './Pressed'
import variables from '../variables'
import DelayLink from './DelayLink'
import { darken, transparentize } from 'polished'
import Tooltip from 'reactstrap/lib/Tooltip'
import PropTypes from 'prop-types'

export default function Button ({
  id,
  border,
  disabled,
  form,
  ghost,
  icon,
  link,
  blank,
  onClick,
  opacityPressed,
  size,
  state,
  text,
  tooltip,
  type,
  className = '',
  tabIndex = '',
  testid,
  children = {}
}) {
  const renderButton = () => (
    <StyledButton
      data-testid={testid}
      id={id}
      className={className}
      border={border}
      disabled={disabled}
      ghost={ghost}
      form={form}
      onClick={onClick}
      size={size}
      text={text}
      state={state}
      tabIndex={tabIndex}
      type={type}>
      <Pressed
        ghost={ghost}
        disabled={disabled}
        state={state}
        border={border}
        opacity={opacityPressed}
        color={colorPressed()}>
        {icon && (
          <StyledIcon
            icon={icon}
            text={text}
            className={`nucleo-icon nucleo-icon-${icon}`}
          />
        )}
        {(text || (children && children.length)) && (
          <div className="button__container">{text || children}</div>
        )}
      </Pressed>
    </StyledButton>
  )

  const colorPressed = () => {
    if (border || state === 'link') {
      return buttonState(state)
    } else if (border || state === 'ghost') {
      return buttonState(state)
    }
    return undefined
  }

  if (link && !tooltip) {
    return blank ? (
      <a target="_blank" rel="noopener noreferrer" href={link}>
        {renderButton()}
      </a>
    ) : (
      <DelayLink to={link}>{renderButton()}</DelayLink>
    )
  } else if (!link && tooltip) {
    return (
      <Tooltip
        placement="right"
        isOpen={this.state.tooltipOpen}
        target="TooltipExample"
        toggle={this.toggle}>
        {renderButton()}
      </Tooltip>
    )
  } else if (link && tooltip) {
    return blank ? (
      <a target="_blank" rel="noopener noreferrer" href={link}>
        <Tooltip
          placement="right"
          isOpen={this.state.tooltipOpen}
          target="TooltipExample"
          toggle={this.toggle}>
          {renderButton()}
        </Tooltip>
      </a>
    ) : (
      <DelayLink to={link}>
        <Tooltip
          placement="right"
          isOpen={this.state.tooltipOpen}
          target="TooltipExample"
          toggle={this.toggle}>
          {renderButton()}
        </Tooltip>
      </DelayLink>
    )
  } else {
    return renderButton()
  }
}

// @Proptypes
Button.propTypes = {
  border: PropTypes.bool,
  disabled: PropTypes.bool,
  form: PropTypes.string,
  icon: PropTypes.string,
  link: PropTypes.string,
  blank: PropTypes.bool,
  onClick: PropTypes.func,
  opacityPressed: PropTypes.number,
  size: PropTypes.string,
  state: PropTypes.string,
  text: PropTypes.string,
  tooltip: PropTypes.string,
  type: PropTypes.string,
  testid: PropTypes.string
}

Button.defaultProps = {
  state: 'ghost'
}

// @Styles

export const buttonColor = props => {
  if (props.border) {
    return buttonState(props.state)
  } else if (props.state === 'link') {
    return variables.setColors.primary
  } else if (props.state === 'ghost') {
    return variables.setColors.primary
  } else {
    return 'white'
  }
}

export const buttonBackground = props => {
  if (props.border || props.state === 'link') {
    return 'transparent'
  } else if (props.border || props.state === 'ghost') {
    return 'white'
  } else {
    return buttonState(props.state)
  }
}

export const buttonState = state => {
  let color

  switch (state) {
    case 'primary':
      color = variables.setColors.primary
      break
    case 'info':
      color = variables.setColors.info
      break
    case 'success':
      color = variables.setColors.buttons.success
      break
    case 'warning':
      color = variables.setColors.warning
      break
    case 'danger':
      color = variables.setColors.danger
      break
    case 'ghost':
      color = variables.setColors.primary
      break
    default:
      color = variables.setColors.primary
  }
  return color
}

export const buttonSize = (size, text) => {
  let btnSize

  switch (size) {
    case 'lg':
      btnSize = { height: '30px', fontSize: '14px', width: 'auto' }
      break
    case 'sm':
      btnSize = { height: '30px', fontSize: '14px', width: 'auto' }
      break
    case 'xs':
      btnSize = { height: '30px', fontSize: '14px', width: 'auto' }
      break
    default:
      btnSize = {
        height: text ? '44px' : 'auto',
        fontSize: '1rem',
        width: text ? '180px' : '100%'
      }
  }
  return btnSize
}

export const buttonActionColor = (action, props) => {
  let background
  let borderColor
  let color
  let percent
  const colorState = buttonState(props.state)
  if (props.border || props.state === 'link') {
    borderColor = colorState
    color = colorState
    background = transparentize(0.95, colorState)
  } else if (props.border || props.state === 'ghost') {
    borderColor = colorState
    color = variables.setColors.primary
    background = transparentize(0.95, colorState)
  } else if (props.border || props.state === 'primary') {
    color = 'white'
    if (action === 'hover') {
      percent = 0.03
    } else if (action === 'active') {
      percent = 0.08
    }
    background = darken(percent, colorState)
    borderColor = darken(percent, colorState)
  }
  return {
    background,
    borderColor,
    color
  }
}

export const buttonBorder = props => {
  if (props.border || props.state === 'link') {
    const color = buttonColor(props)
    return {
      border: `1px solid ${color}`
    }
  } else if (props.border || props.state === 'ghost') {
    const color = buttonColor(props)
    return {
      border: `1px solid ${color}`
    }
  }
}

export const isDisabled = props => {
  if (props.border) {
    return {
      borderColor: '#e6e6e6',
      color: variables.setColors.veryLightPink
    }
  }
  return {
    background: variables.setColors.veryLightPink
  }
}
