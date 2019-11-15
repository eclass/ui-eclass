import React from 'react'
import examenNoDisponibleFem from './examenNoDisponibleFem.svg'
import examenNoDisponibleMas from './examenNoDisponibleMas.svg'

/**
 * ExamenNoDisponible
Regresa el SVG de ExamenNoDisponible.

Por defecto retorna con genero masculino
 *
 * @params {number} gender - 1 es masculino, 2 es femenino
 * @params {string} className
 * @example
 */
export const ExamenNoDisponible = ({ gender, className }) => {
  if (gender === 1) {
    return (
      <img
        src={examenNoDisponibleMas}
        className={`Hito__Animado ${className}`}
        alt=" "
      />
    )
  } else {
    return (
      <img
        src={examenNoDisponibleFem}
        className={`Hito__Animado ${className}`}
        alt=" "
      />
    )
  }
}
