// @flow

import * as React from 'react';
import TimerPage from './pages/TimerPage';

type Props = {
};

class App extends React.PureComponent<Props> {
  render() {
    return (
      <TimerPage />
    );
  }
}
export default App;