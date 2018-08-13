// @flow

import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';

const root = document.getElementById('root');

if (root !== null) {
  render(
    <AppContainer>
      <App />
    </AppContainer>,
    root
  );
}