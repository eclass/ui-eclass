import React from 'react'
import { action } from '@storybook/addon-actions'
import Button from './Button'

export default {
  title: 'Plataforma v8|Button',
  parameters: {
    component: Button,
    componentSubtitle:
      'Displays an image that represents a user or organization'
  }
}

export const buttons = () => (
  <>
    <Button state="primary" text={'Button Primary'} onClick={action('click')} />
    <Button text={'Button Ghost'} ghost={true} onClick={action('click')} />
    <Button
      state=""
      text={'Disabled'}
      disabled={true}
      onClick={action('click')}
    />
  </>
)

export const sizes = () => (
  <>
    <Button state="primary" text={'Button Primary'} />
    <Button text={'Button Ghost'} ghost={true} />
    <Button state="" text={'Disabled'} disabled={true} />
  </>
)
