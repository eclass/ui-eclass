import React from 'react';
import { storiesOf } from '@storybook/react';
import  Select  from './Select';
import { addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';
import regiones  from './countries'

// Option defaults.
addParameters({
  options: {
    theme: themes.dark,
  },
});


storiesOf('Select', module)
.addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .add('SelectStandar', () => <Select label="Selecciona tu región" placeholder="Seleccionar" data={regiones.regiones}></Select>)
  .add('SelectDisable', () => <Select disabled={true} placeholder="Seleccionar" label="Select disabled"/>)


