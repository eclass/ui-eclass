import React from 'react'
import examenDisponibleFem from './examenDisponibleFem.svg'
import examenDisponibleMas from './examenDisponibleMas.svg'

/**
 * ExamenDisponible
 * Regresa el SVG de ExamenDisponible
 *
 * Por defecto retorna con genero masculino
 *
 * @params {number} gender - 1 es masculino, 2 es femenino
 * @params {string} className
 */
export const ExamenDisponible = ({ gender, className }) => {
  if (gender === 1) {
    return (
      <img
        src={examenDisponibleMas}
        className={`Hito__Animado ${className}`}
        alt=" "
      />
    )
  } else {
    return (
      <img
        src={examenDisponibleFem}
        className={`Hito__Animado ${className}`}
        alt=" "
      />
    )
  }
}
