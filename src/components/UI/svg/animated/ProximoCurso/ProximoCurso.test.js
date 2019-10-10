import * as React from 'react'
import { render, cleanup } from '@testing-library/react'
// this adds custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'
import ProximoCurso from './'

afterEach(cleanup)

const gender = {
  male: 1,
  female: 2
}

test('render svg de ProximoCurso', async () => {
  const { container } = render(<ProximoCurso />)
  const img = container.querySelector('img')
  expect(img.src.split('/').includes('proximoCursoFem.svg')).toBeTruthy()
})

test('render svg de ProximoCurso femenino', async () => {
  const { container } = render(<ProximoCurso gender={gender.female} />)
  const img = container.querySelector('img')
  expect(img.src.split('/').includes('proximoCursoFem.svg')).toBeTruthy()
})

test('render svg de ProximoCurso masculino', async () => {
  const { container } = render(<ProximoCurso gender={gender.male} />)
  const img = container.querySelector('img')
  expect(img.src.split('/').includes('proximoCursoMas.svg')).toBeTruthy()
})
