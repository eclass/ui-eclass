import * as React from 'react'
import { render, cleanup } from '@testing-library/react'
// this adds custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'
import FinDeCurso from './'

afterEach(cleanup)

const gender = {
  male: 1,
  female: 2
}

test('render svg de FinDeCurso', async () => {
  const { container } = render(<FinDeCurso />)
  const img = container.querySelector('img')
  expect(img.src.split('/').includes('finDeCursoFem.svg')).toBeTruthy()
})

test('render svg de FinDeCurso femenino', async () => {
  const { container } = render(<FinDeCurso gender={gender.female} />)
  const img = container.querySelector('img')
  expect(img.src.split('/').includes('finDeCursoFem.svg')).toBeTruthy()
})

test('render svg de FinDeCurso masculino', async () => {
  const { container } = render(<FinDeCurso gender={gender.male} />)
  const img = container.querySelector('img')
  expect(img.src.split('/').includes('finDeCursoMas.svg')).toBeTruthy()
})
