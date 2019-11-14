import * as React from 'react'
import { render, cleanup } from '@testing-library/react'
// this adds custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'
import ExamenRecibido from './'

afterEach(cleanup)

const gender = {
  male: 1,
  female: 2
}

test('render svg de ExamenRecibido', async () => {
  const { container } = render(<ExamenRecibido />)
  const img = container.querySelector('img')
  expect(img.src.split('/').includes('examenRecibidoFem.svg')).toBeTruthy()
})

test('render svg de ExamenRecibido femenino', async () => {
  const { container } = render(<ExamenRecibido gender={gender.female} />)
  const img = container.querySelector('img')
  expect(img.src.split('/').includes('examenRecibidoFem.svg')).toBeTruthy()
})

test('render svg de ExamenRecibido masculino', async () => {
  const { container } = render(<ExamenRecibido gender={gender.male} />)
  const img = container.querySelector('img')
  expect(img.src.split('/').includes('examenRecibidoMas.svg')).toBeTruthy()
})
