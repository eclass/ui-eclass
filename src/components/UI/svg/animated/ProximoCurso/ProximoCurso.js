import React from 'react'
import proximoCursoFem from './proximoCursoFem.svg'
import proximoCursoMas from './proximoCursoMas.svg'

/**
 * ProximoCurso
 * Regresa el SVG de ProximoCurso
 *
 * Por defecto retorna con genero masculino
 *
 * @params {number} gender - 1 es masculino, 2 es femenino
 * @params {string} className
 */
export const ProximoCurso = ({ gender, className = '' }) => {
  if (gender === 1) {
    return (
      <img
        src={proximoCursoMas}
        className={`Hito__Animado ${className}`}
        alt=" "
      />
    )
  } else {
    return (
      <img
        src={proximoCursoFem}
        className={`Hito__Animado ${className}`}
        alt=" "
      />
    )
  }
}
