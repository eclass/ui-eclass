import React from 'react';
import { storiesOf } from '@storybook/react';
import  Select  from './Select';
import regiones  from './countries'


storiesOf('Select', module)
.addDecorator(story => <div style={{ display: 'block' }}>{story()}</div>)
  .add('All', () => <>
  <Select label="Selecciona tu región" placeholder="Selecciona" data={regiones.regiones}></Select>
  <Select disabled={true} placeholder="Seleccionar" label="Select disabled"/>
  </>)
  .add('SelectStandar', () => <Select label="Selecciona tu región" placeholder="Selecciona" data={regiones.regiones}></Select>)
  .add('SelectDisabled', () => <Select disabled={true} placeholder="Seleccionar" label="Select disabled"/>)

