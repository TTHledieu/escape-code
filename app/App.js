// @flow

import * as React from 'react';
import TimerPage from './pages/TimerPage';
import Button from './components/Button';

type Props = {};

type State = {|
  start: boolean
|};
const OBJ = '80d4d410d6b330bc2015e461e6b6b78d';
class App extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      start: false
    };
  }
  handleOnClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    this.setState({ start: true });
  };

  render() {
    return (
      <div style={{ height: '100vh' }}>
        {!this.state.start ? (
          <div
            style={{
              display: 'flex',
              flex: 1,
              alignItems: 'center',
              height: '100%',
              justifyContent: 'center'
            }}
          >
            <Button onClick={this.handleOnClick} size="large">
              COMMENCER LE DÉSAMORÇAGE
            </Button>
          </div>
        ) : (
          <TimerPage toDecode={OBJ} />
        )}
      </div>
    );
  }
}

export default App;
