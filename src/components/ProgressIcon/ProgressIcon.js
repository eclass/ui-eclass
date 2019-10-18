// @External Dependencies
import * as React from 'react'
import PropTypes from 'prop-types'
import Wrapper from './styles'
import { Icon } from '../UI/Icons'

const ProgressIcon = ({
  id,
  className,
  icon,
  color,
  bgcolor,
  size,
  width,
  height,
  onClick
}) => (
  <Wrapper
    className={`${className}`}
    id={id}
    bgcolor={bgcolor}
    size={size}
    onClick={onClick}>
    <Icon name={icon} fill={color} width={width} height={height} />
  </Wrapper>
)

export default ProgressIcon

// @Proptypes
ProgressIcon.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
  bgcolor: PropTypes.string,
  size: PropTypes.string, // Size llenará con el mismo valor a height y a width
  height: PropTypes.string,
  width: PropTypes.string,
  onClick: PropTypes.func
}
