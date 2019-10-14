// @External Dependencies
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Tooltip from 'reactstrap/lib/Tooltip'

// @Component
const TooltipTrigger = ({ target, children, placement, trigger, className}) => {
    const [open, setOpenTool] = useState(false)

    return (
      <Tooltip
        className={className}
        placement={placement}
        isOpen={open}
        delay={0}
        target={`Tooltip-${target}`}
        toggle={setOpenTool(!open)}
        trigger={trigger}>
        {children}
      </Tooltip>
    )
  }

// @Proptypes
TooltipTrigger.propTypes = {
  target: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node,
  className: PropTypes.string,
  trigger: PropTypes.string
}

TooltipTrigger.defaultProps = {
  target: 0,
  children: 'Tooltip',
  placement: 'top',
  trigger: 'click'
}

// @Export Component
export default TooltipTrigger
