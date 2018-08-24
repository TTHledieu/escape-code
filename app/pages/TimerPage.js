// @flow

import * as React from 'react';
import Timer from '../components/Timer';

type Props = {||};

class TimerPage extends React.PureComponent<Props> {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.timer}>
          <Timer style={styles.timerStyle} timer={2700} />
        </div>
        <div style={styles.input}>input</div>
        <div style={styles.try}>try</div>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    height: '100%'
  },
  timer: {
    display: 'flex',
    flex: 4,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  input: {
    display: 'flex',
    flex: 2
  },
  try: {
    display: 'flex',
    flex: 4
  },
  timerStyle: {
    fontSize: 80,
    color: 'white'
  }
};

export default TimerPage;
