import React from 'react'
import Select from './Select'
import regiones from './countries'

export default {
  title: 'Plataforma v8| Select ',

  parameters: {
    component: Select,
    componentSubtitle: 'Selects diseñados para plataforma v8'
  }
}

export const Selects = () => (
  <>
    <Select
      label="Selecciona tu región"
      placeholder="Selecciona"
      data={regiones.regiones}
    />
  </>
)

export const disabled = () => (
  <Select disabled={true} placeholder="Seleccionar" label="Select disabled" />
)
