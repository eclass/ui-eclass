import React from 'react'
import finDeCursoFem from './finDeCursoFem.svg'
import finDeCursoMas from './finDeCursoMas.svg'

/**
 * FinDeCurso
Regresa el SVG de FinDeCurso.

Por defecto retorna con genero masculino
 *
 * @params {number} gender - 1 es masculino, 2 es femenino
 * @params {string} className
 * @example
 */
export const FinDeCurso = ({ gender, className = '' }) => {
  if (gender === 1) {
    return (
      <img
        src={finDeCursoMas}
        className={`Hito__Animado ${className}`}
        alt=" "
      />
    )
  } else {
    return (
      <img
        src={finDeCursoFem}
        className={`Hito__Animado ${className}`}
        alt=" "
      />
    )
  }
}
