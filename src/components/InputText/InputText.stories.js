import React from 'react';
import { storiesOf } from '@storybook/react';
import InputText from './InputText';



storiesOf('InputText', module)
.addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .add('InputText', () => <InputText placeholder="Escribe algo..." label="Etiqueta"/>)
  .add('InputAutoFocus', () => <InputText  placeholder="Escribe algo..." autoFocus={true} label="Autofocus"/>)
  .add('InputDisable', () => <InputText placeholder="Placeholder" label="Disable" disabled={true}/>)
  .add('InputValidationPhone', () => <InputText  placeholder="Ingresa un número de teléfono" label="Número de teléfono" type="phone" />)
  .add('InputValidationEmail', () => <InputText  placeholder="Correo electrónico" label="Correo electrónico" type="email"/>)
  .add('InputValidationAlphabetic', () => <InputText  placeholder="Ingresa tu nombre" label="Nombre" type="alphabetic"/>)

