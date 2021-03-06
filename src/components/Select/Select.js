import React, { useState } from 'react'
import { Wrapper } from './styles'
import { Input, Label } from 'reactstrap'
import { Icon } from '../UI/Icons'
import classNames from 'classnames'
import PropTypes from 'prop-types'

export const Select = ({ disabled, label, placeholder, data }) => {
  const [icon, setIcon] = useState(null)
  const [borderValid, setBorderValid] = useState(false)
  const [borderInvalid, setBorderInvalid] = useState(false)

  let timer
  const interval = 1000

  const validateSelect = value => {
    if (value === 'Selecciona') {
      clearTimeout(timer)
      timer = setTimeout(() => {
        setIcon(
          <div className="invalid_feedback">
            <Icon width={17} fill="#ffff" name="circularError" />
            Seleccione una opción válida
          </div>
        )
        setBorderValid(false)
        setBorderInvalid(true)
      }, interval)
    } else {
      timer = setTimeout(() => {
        setIcon(
          <div className="valid_feedback">
            <Icon width={17} fill="#ffff" name="circularCheck" />
            Correcto
          </div>
        )
        setBorderInvalid(false)
        setBorderValid(true)
      }, interval)
    }
  }

  return (
    <Wrapper>
      <Label for="exampleSelect" className={classNames(disabled ? 'gray' : '')}>
        {label}
      </Label>
      <Input
        onChange={e => {
          validateSelect(e.target.value)
        }}
        className={classNames({
          borderRed: borderInvalid,
          borderGreen: borderValid
        })}
        type="select"
        name="select"
        id="exampleSelect"
        disabled={disabled || false}>
        <option value="Selecciona">{placeholder}</option>
        {data
          ? data.map((region, key) => {
            return (
              <option value={region.region} key={key}>
                {region.region}
              </option>
            )
          })
          : null}
      </Input>
      {icon}
    </Wrapper>
  )
}

// @Proptypes
Select.propTypes = {
  /**
  Si está deshabilitado
  */
  disabled: PropTypes.bool,
  /**
  Array de datos a listar
  */
  data: PropTypes.array,
  /**
  Placeholder de select
  */
  placeholder: PropTypes.string,
  /**
  Etiqueta de select
  */
  label: PropTypes.string
}

Select.defaultProps = {
  disabled: false,
  data: null,
  placeholder: 'Placeholder',
  label: 'Etiqueta'
}
