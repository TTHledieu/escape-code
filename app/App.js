// @flow

import * as React from 'react';
import TimerPage from './pages/TimerPage';

type Props = {};

class App extends React.PureComponent<Props> {
  render() {
    return (
      <div style={{ height: '100vh' }}>
        <TimerPage />
      </div>
    );
  }
}

export default App;
