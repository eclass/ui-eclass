import React from 'react'
import InputText from './InputText'

export default {
  title: 'Plataforma v8|Input',

  parameters: {
    component: InputText,
    componentSubtitle: 'Inputs diseñados para v8 y sus validaciones'
  }
}

export const input = () => (
  <>
    <InputText placeholder="Escribe algo..." label="Estandar" />
  </>
)

export const autofocus = () => (
  <>
    <InputText
      placeholder="Escribe algo..."
      autoFocus={true}
      label="Autofocus"
    />
  </>
)

export const disabled = () => (
  <>
    <InputText placeholder="Placeholder" label="Disabled" disabled={true} />{' '}
  </>
)

export const validationPhone = () => (
  <>
    <InputText
      placeholder="Ingresa un número de teléfono"
      label="Número de teléfono"
      type="phone"
    />
  </>
)

export const validationEmail = () => (
  <>
    <InputText
      placeholder="Correo electrónico"
      label="Correo electrónico"
      type="email"
    />
  </>
)

export const validationAlphabetic = () => (
  <>
    <InputText
      placeholder="Ingresa tu nombre"
      label="Nombre"
      type="alphabetic"
    />
  </>
)
