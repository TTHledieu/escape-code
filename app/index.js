// @flow

import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';
import './app.global.css';

const root = document.getElementById('root');

if (root !== null) {
  render(
    <AppContainer>
      <App />
    </AppContainer>,
    root
  );
}
