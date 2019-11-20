import React, { useState } from 'react'
import { Wrapper } from './styles'
import PropTypes from 'prop-types'
import Tooltip from 'reactstrap/lib/Tooltip'

export const TooltipTrigger = ({
  target,
  children,
  className,
  trigger,
  placement
}) => {
  const [tooltipOpen, setTooltipOpen] = useState(false)
  const toggle = () => setTooltipOpen(!tooltipOpen)

  return (
    <Wrapper>
      <Tooltip
        placement={placement}
        isOpen={tooltipOpen}
        delay={0}
        target={`Tooltip-${target}`}
        toggle={toggle}
        trigger={trigger}>
        {children}
      </Tooltip>
    </Wrapper>
  )
}

// @Proptypes
TooltipTrigger.propTypes = {
  target: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node,
  className: PropTypes.string,
  trigger: PropTypes.string,
  placement: PropTypes.oneOf([
    'auto',
    'auto-start',
    'auto-end',
    'top',
    'top-start',
    'top-end',
    'right',
    'right-start',
    'right-end',
    'bottom',
    'bottom-start',
    'bottom-end',
    'left',
    'left-start',
    'left-end'
  ])
}

TooltipTrigger.defaultProps = {
  target: 0,
  children: 'Tooltip',
  placement: 'top',
  trigger: 'click'
}
