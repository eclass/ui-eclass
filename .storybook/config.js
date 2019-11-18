import { configure, addDecorator } from '@storybook/react';
import GlobalStyle from './globalStyle'
import React from 'react'
import '../src/index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js$/), module);

function withGlobalStyle(storyFn) {
    return (
      <>
        <GlobalStyle/> 
        {storyFn()}
      </>
    );
  }
  
  addDecorator(withGlobalStyle);
  addDecorator(story => <div style={{ display: 'flex' }}>{story()}</div>)
