import React from 'react'
import { action } from '@storybook/addon-actions'
import { Button } from './Button'

export default {
  title: 'Plataforma v8|Button',
  parameters: {
    component: Button,
    componentSubtitle: 'Botones con diferentes estados y customizables'
  }
}

export const buttons = () => (
  <>
    <Button state="primary" text={'Button Primary'} onClick={action('click')} />
    <Button text={'Button Ghost'} ghost={true} onClick={action('click')} />
    <Button
      state="info"
      text={'Disabled'}
      disabled={true}
      onClick={action('click')}
    />
  </>
)

export const states = () => (
  <>
    <Button state="primary" text={'Button Blue'} />
    <Button text={'Button Ghost'} ghost={true} />
    <Button state="info" text={'Disabled'} disabled={true} />
  </>
)

export const OtherStates = () => (
  <>
    <Button state="info" text={'Button'} opacityPressed={0} />
    <Button state="danger" text={'Button'} />
    <Button state="warning" text={'Disabled'} />
  </>
)

export const xs = () => (
  <>
    <Button state="primary" size={'xs'} text={'Disabled'} />
  </>
)
