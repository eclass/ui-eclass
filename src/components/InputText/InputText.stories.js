import React from 'react';
import { storiesOf } from '@storybook/react';
import InputText from './InputText';



storiesOf('InputText', module)
.addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .add('InputText', () => <InputText/>)
  .add('InputAutoFocus', () => <InputText autoFocus={true}/>)
  .add('InputDisable', () => <InputText disabled={true}/>)
  .add('InputValidation', () => <InputText  valid={true} type="phone" />)
  .add('InputError', () => <InputText invalid={true} type="email"/>)

