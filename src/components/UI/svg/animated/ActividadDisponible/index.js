import React from 'react'
import { ActividadDisponible as ActividadDisponibleSVG } from './ActividadDisponible'
import { ActividadNoDisponible } from './ActividadNoDisponible'

/**
 * ActividadDisponible
 * Regresa el SVG de ActividadDisponible o ActividadNoDisponible
 *
 * Por defecto retorna ActividadDisponible con genero masculino
 *
 * @params {boolean} enable - true es activo, false es inactivo
 * @params {number} gender - 1 es masculino, 2 es femenino
 * @params {string} className
 */
const ActividadDisponible = ({ enable, gender, className = '' }) => {
  if (enable) {
    return <ActividadDisponibleSVG className={className} gender={gender} />
  } else {
    return <ActividadNoDisponible className={className} gender={gender} />
  }
}

export default ActividadDisponible
