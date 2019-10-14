import React from 'react';
import { storiesOf } from '@storybook/react';
import  Select  from './Select';
import regiones  from './countries'
// import { addParameters } from '@storybook/react';
// import { themes } from '@storybook/theming';


// // Option defaults.
// addParameters({
//   options: {
//     theme: themes.dark,
//   },
// });



storiesOf('Select', module)
.addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .add('SelectStandar', () => <Select label="Selecciona tu región" placeholder="Selecciona" data={regiones.regiones}></Select>)
  .add('SelectDisabled', () => <Select disabled={true} placeholder="Seleccionar" label="Select disabled"/>)


  export default {
    title: 'Design System|Avatar',
  
    parameters: {
      component: Select,
      componentSubtitle: 'Displays an image that represents a user or organization',
    },
  };