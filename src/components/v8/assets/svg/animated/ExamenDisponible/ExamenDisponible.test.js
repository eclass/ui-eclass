import * as React from 'react'
import { render, cleanup } from '@testing-library/react'
// this adds custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'
import ExamenDisponible from './'

afterEach(cleanup)

const gender = {
  male: 1,
  female: 2
}

test('render svg de ExamenNoDisponible', async () => {
  const { container } = render(<ExamenDisponible />)
  const img = container.querySelector('img')
  expect(img.src.split('/').includes('examenNoDisponibleFem.svg')).toBeTruthy()
})

test('render svg de ExamenNoDisponible masculino', async () => {
  const { container } = render(<ExamenDisponible gender={gender.male} />)
  const img = container.querySelector('img')
  expect(img.src.split('/').includes('examenNoDisponibleMas.svg')).toBeTruthy()
})

test('render svg de ExamenNoDisponible femenino', async () => {
  const { container } = render(<ExamenDisponible gender={gender.female} />)
  const img = container.querySelector('img')
  expect(img.src.split('/').includes('examenNoDisponibleFem.svg')).toBeTruthy()
})

test('render svg de ExamenDisponible femenino', async () => {
  const { container } = render(
    <ExamenDisponible enable gender={gender.female} />
  )
  const img = container.querySelector('img')
  expect(img.src.split('/').includes('examenDisponibleFem.svg')).toBeTruthy()
})

test('render svg de ExamenNoDisponible femenino', async () => {
  const { container } = render(<ExamenDisponible gender={gender.female} />)
  const img = container.querySelector('img')
  expect(img.src.split('/').includes('examenNoDisponibleFem.svg')).toBeTruthy()
})

test('render svg de ExamenDisponible masculino', async () => {
  const { container } = render(<ExamenDisponible enable gender={gender.male} />)
  const img = container.querySelector('img')
  expect(img.src.split('/').includes('examenDisponibleMas.svg')).toBeTruthy()
})

test('render svg de ExamenNoDisponible masculino', async () => {
  const { container } = render(<ExamenDisponible gender={gender.male} />)
  const img = container.querySelector('img')
  expect(img.src.split('/').includes('examenNoDisponibleMas.svg')).toBeTruthy()
})
