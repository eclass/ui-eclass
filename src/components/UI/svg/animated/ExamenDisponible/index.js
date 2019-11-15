import React from 'react'
import { ExamenDisponible as ExamenDisponibleSVG } from './ExamenDisponible'
import { ExamenNoDisponible } from './ExamenNoDisponible'

/**
 * ExamenDisponible
Regresa el SVG de ExamenDisponible o ExamenNoDisponible.

Por defecto retorna ExamenNoDisponible con genero masculino
 *
 * @params {boolean} enable - true es activo, false es inactivo
 * @params {number} gender - 1 es masculino, 2 es femenino
 * @params {string} className
 * @example
 */
const ExamenDisponible = ({ enable, gender, className = '' }) => {
  if (enable) {
    return <ExamenDisponibleSVG className={className} gender={gender} />
  } else {
    return <ExamenNoDisponible className={className} gender={gender} />
  }
}

export default ExamenDisponible
