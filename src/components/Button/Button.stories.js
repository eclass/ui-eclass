import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './Button';



storiesOf('Button', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .add('Primary', () => <Button state="primary" text={"Button Primary"} onclick={action('click')}/>)
  .add('Ghost', () => <Button  text={"Button Ghost"} ghost={true}  onclick={action('click')}/>)
  .add('Disabled', () => <Button state="" text={"Disabled"} disabled={true} onclick={action('click')}/>);
