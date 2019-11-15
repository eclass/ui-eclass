import React from 'react'
import actividadNoDisponibleFem from './actividadNoDisponibleFem.svg'
import actividadNoDisponibleMas from './actividadNoDisponibleMas.svg'

/**
 * ActividadNoDisponible
Regresa el SVG de ActividadNoDisponible.

Por defecto retorna con genero masculino
 *
 * @params {number} gender - 1 es masculino, 2 es femenino
 * @params {string} className
 * @example
 */
export const ActividadNoDisponible = ({ gender, className }) => {
  if (gender === 1) {
    return (
      <img
        src={actividadNoDisponibleMas}
        className={`Hito__Animado ${className}`}
        alt=" "
      />
    )
  } else {
    return (
      <img
        src={actividadNoDisponibleFem}
        className={`Hito__Animado ${className}`}
        alt=" "
      />
    )
  }
}
