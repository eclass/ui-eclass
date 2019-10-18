import React from 'react';
import {  addDecorator ,configure } from '@storybook/react';
import '../src/index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { addReadme } from 'storybook-readme';
import GlobalStyle from './globalStyle'



addDecorator(addReadme);

function withGlobalStyle(storyFn) {
  return (
    <>
      <GlobalStyle />
      {storyFn()}
    </>
  );
}

addDecorator(withGlobalStyle);

const req = require.context('../src', true, /\.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);