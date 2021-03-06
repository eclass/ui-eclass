import React, { useState } from 'react'
import { Wrapper } from './styles'
import { Input, Label } from 'reactstrap'
import { Icon } from '../UI/Icons'
import classNames from 'classnames'
import PropTypes from 'prop-types'

export const InputText = ({
  disabled,
  autoFocus,
  type,
  placeholder,
  label
}) => {
  const [valueInput, setValueInput] = useState('')
  const [icon, setIcon] = useState(null)
  const [borderValid, setBorderValid] = useState(false)
  const [borderInvalid, setBorderInvalid] = useState(false)

  let timer
  const interval = 1000

  const validateInput = (typeValidation, value) => {
    switch (typeValidation) {
      case 'phone':
        return validation(
          '^([+])?([0-9]{1,20})$',
          value,
          'Debe ingresar sólo números'
        )
      case 'email':
        return validation(
          '^.+@[^.].*.[a-z]{2,}$',
          value,
          'Debes llenar este campo con email válido'
        )
      case 'alphabetic':
        return validation(
          '^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s]+$',
          value,
          'Debe contener sólo valores alfabéticos'
        )
      default:
        return null
    }
  }

  const validation = (regex, value, message) => {
    clearTimeout(timer)
    if (value.match(regex)) {
      timer = setTimeout(() => {
        setIcon(
          <div className="valid_feedback">
            <Icon width={17} fill="#ffff" name="circularCheck" />
            Correcto
          </div>
        )
        setBorderValid(true)
        setBorderInvalid(false)
      }, interval)
    } else if (value === '') {
      timer = setTimeout(() => {
        setIcon(
          <div className="invalid_feedback">
            <Icon width={17} fill="#ffff" name="circularError" />
            Este campo es obligatorio
          </div>
        )
        setBorderValid(false)
        setBorderInvalid(true)
      }, interval)
    } else {
      timer = setTimeout(() => {
        setIcon(
          <div className="invalid_feedback">
            <Icon width={17} fill="#ffff" name="circularError" />
            {message}
          </div>
        )
        setBorderValid(false)
        setBorderInvalid(true)
      }, interval)
    }
  }

  return (
    <Wrapper>
      <Label for="Input Text" className={classNames(disabled ? 'gray' : '')}>
        {' '}
        {label}
      </Label>
      <Input
        aria-label="Campo de texto"
        value={valueInput}
        onChange={e => {
          setValueInput(e.target.value)
        }}
        onKeyUp={e => {
          clearTimeout(timer)
          validateInput(type, e.target.value)
        }}
        onKeyDown={clearTimeout(timer)}
        onBlur={clearTimeout(timer)}
        autoFocus={autoFocus || false}
        placeholder={placeholder}
        className={classNames({
          borderRed: borderInvalid,
          borderGreen: borderValid
        })}
        disabled={disabled || false}
      />
      {icon}
    </Wrapper>
  )
}

// @Proptypes
InputText.propTypes = {
  /**
  Tipo de validación
  */
  type: PropTypes.oneOf(['phone', 'email', 'alphabetic']),
  /**
  Si está deshabilitado
  */
  disabled: PropTypes.bool,
  /**
  Autofocus al input
  */
  autoFocus: PropTypes.bool,
  /**
  Placeholder del input
  */
  placeholder: PropTypes.string,
  /**
  Etiqueta sobre el input
  */
  label: PropTypes.string
}

InputText.defaultProps = {
  disabled: false,
  autoFocus: false,
  placeholder: 'Placeholder',
  label: 'Etiqueta'
}
