import * as React from 'react'
import { render, cleanup } from '@testing-library/react'
// this adds custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'
import ActividadDisponible from './'

afterEach(cleanup)

const gender = {
  male: 1,
  female: 2
}

test('render svg de ActividadNoDisponible', async () => {
  const { container } = render(<ActividadDisponible />)
  const img = container.querySelector('img')
  expect(
    img.src.split('/').includes('actividadNoDisponibleFem.svg')
  ).toBeTruthy()
})

test('render svg de ActividadNoDisponible masculino', async () => {
  const { container } = render(<ActividadDisponible gender={gender.male} />)
  const img = container.querySelector('img')
  expect(
    img.src.split('/').includes('actividadNoDisponibleMas.svg')
  ).toBeTruthy()
})

test('render svg de ActividadNoDisponible femenino', async () => {
  const { container } = render(<ActividadDisponible gender={gender.female} />)
  const img = container.querySelector('img')
  expect(
    img.src.split('/').includes('actividadNoDisponibleFem.svg')
  ).toBeTruthy()
})

test('render svg de ActividadDisponible femenino', async () => {
  const { container } = render(
    <ActividadDisponible enable gender={gender.female} />
  )
  const img = container.querySelector('img')
  expect(img.src.split('/').includes('actividadDisponibleFem.svg')).toBeTruthy()
})

test('render svg de ActividadNoDisponible femenino', async () => {
  const { container } = render(<ActividadDisponible gender={gender.female} />)
  const img = container.querySelector('img')
  expect(
    img.src.split('/').includes('actividadNoDisponibleFem.svg')
  ).toBeTruthy()
})

test('render svg de ActividadDisponible masculino', async () => {
  const { container } = render(
    <ActividadDisponible enable gender={gender.male} />
  )
  const img = container.querySelector('img')
  expect(img.src.split('/').includes('actividadDisponibleMas.svg')).toBeTruthy()
})

test('render svg de ActividadNoDisponible masculino', async () => {
  const { container } = render(<ActividadDisponible gender={gender.male} />)
  const img = container.querySelector('img')
  expect(
    img.src.split('/').includes('actividadNoDisponibleMas.svg')
  ).toBeTruthy()
})
