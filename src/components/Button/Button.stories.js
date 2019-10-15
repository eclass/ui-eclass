import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './Button';
import { withA11y } from '@storybook/addon-a11y';//accesibilidad addon


storiesOf('Button', module)
  .addDecorator(withA11y)
  .addDecorator(story => <div style={{ display: 'flex' }}>{story()}</div>)
  .add('All', () => <>
  <Button state="primary" text={"Button Primary"} onClick={action('click')} />
  <Button  text={"Button Ghost"} ghost={true}  onClick={action('click')}/>
  <Button state="" text={"Disabled"} disabled={true} onClick={action('click')}/>
</>)
  .add('Primary', () => <Button state="primary" text={"Button Primary"} onClick={action('click')}/>)
  .add('Ghost', () => <Button  text={"Button Ghost"} ghost={true}  onClick={action('click')}/>)
  .add('Disabled', () => <Button state="" text={"Disabled"} disabled={true} onClick={action('click')}/>)
  

