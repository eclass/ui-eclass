import React from 'react'
import examenRecibidoFem from './examenRecibidoFem.svg'
import examenRecibidoMas from './examenRecibidoMas.svg'

/**
 * ExamenRecibido
 * Regresa el SVG de ExamenRecibido
 *
 * Por defecto retorna con genero masculino
 *
 * @params {number} gender - 1 es masculino, 2 es femenino
 * @params {string} className
 */
export const ExamenRecibido = ({ gender, className = '' }) => {
  if (gender === 1) {
    return (
      <img
        src={examenRecibidoMas}
        className={`Hito__Animado ${className}`}
        alt=" "
      />
    )
  } else {
    return (
      <img
        src={examenRecibidoFem}
        className={`Hito__Animado ${className}`}
        alt=" "
      />
    )
  }
}
