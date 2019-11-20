// @External Dependencies
import * as React from 'react'
import PropTypes from 'prop-types'
import Wrapper from './styles'
import { Icon } from '../UI/Icons'

export const ProgressIcon = ({
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

// @Default Proptypes
ProgressIcon.defaultProps = {
  icon: 'done',
  color: 'white',
  bgcolor: '#5E7A8C',
  size: '27px'
}

// @Proptypes
ProgressIcon.propTypes = {
  /**
  Identificador del icono
  */
  id: PropTypes.string,
  /**
  ClassName del icono
  */
  className: PropTypes.string,
  /**
  String con titulo del icono pueden ser
  */
  icon: PropTypes.oneOf(['done', 'in-progress', 'opened', 'blocked'])
    .isRequired,
  /**
  Color del icono
  */
  color: PropTypes.string,
  /**
  Color de fondo del icono
  */
  bgcolor: PropTypes.string,
  /**
  Radio del icono en pixeles
  */
  size: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  /**
  Acción al hacer click
  */
  onClick: PropTypes.func
}
