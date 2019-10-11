import React from 'react';
import { storiesOf } from '@storybook/react';
import InputText from './InputText';
import { action } from '@storybook/addon-actions';



storiesOf('InputText', module)
.addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .add('InputText', () => <InputText placeholder="Escribe algo..." label="Etiqueta" onClick={action('click')}/>)
  .add('InputAutoFocus', () => <InputText  placeholder="Escribe algo..." autoFocus={true} label="Autofocus" onClick={action('click')}/>)
  .add('InputDisabled', () => <InputText placeholder="Placeholder" label="Disabled" disabled={true} onClick={action('click')}/>)
  .add('InputValidationPhone', () => <InputText  placeholder="Ingresa un número de teléfono" label="Número de teléfono" type="phone" onClick={action('click')} />)
  .add('InputValidationEmail', () => <InputText  placeholder="Correo electrónico" label="Correo electrónico" type="email"/>)
  .add('InputValidationAlphabetic', () => <InputText  placeholder="Ingresa tu nombre" label="Nombre" type="alphabetic"/>)

