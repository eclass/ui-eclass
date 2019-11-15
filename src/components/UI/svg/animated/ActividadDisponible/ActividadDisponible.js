import React from 'react'
import actividadDisponibleFem from './actividadDisponibleFem.svg'
import actividadDisponibleMas from './actividadDisponibleMas.svg'

/**
 * ActividadDisponible
Regresa el SVG de ActividadDisponible.

Por defecto retorna con genero masculino
 *
 * @params {number} gender - 1 es masculino, 2 es femenino
 * @params {string} className
 * @example
 */
export const ActividadDisponible = ({ gender, className }) => {
  if (gender === 1) {
    return (
      <img
        src={actividadDisponibleMas}
        className={`Hito__Animado ${className}`}
        alt=" "
      />
    )
  } else {
    return (
      <img
        src={actividadDisponibleFem}
        className={`Hito__Animado ${className}`}
        alt=" "
      />
    )
  }
}
