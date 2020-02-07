// @flow

import * as React from 'react';
import * as Style from '../helpers/style';
import md5 from 'js-md5';
import Timer from '../components/Timer';
import Input from '../components/Input';
import Button from '../components/Button';
import explo from '../assets/explo.gif';
import BuzzerSound from '../assets/Buzzer-hiin.mp3';
import EndingSound from '../assets/Ending.mp3';
import VictorySound from '../assets/Victory-Theme.mp3';
import DefeatSound from '../assets/Defeat-Theme.mp3';
import ExploSound from '../assets/Bruit-dexplosion.mp3';

type Props = {|
  toDecode: string
|};

type State = {|
  value: string,
  try: number,
  processing: boolean,
  victory: boolean,
  defeat: boolean
|};

class TimerPage extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      value: '',
      try: 3,
      processing: false,
      victory: false,
      defeat: false
    };
  }

  defeat = () => {
    // $FlowFixMe
    setTimeout(() => {
      // $FlowFixMe
      const audio = new Audio(DefeatSound);
      audio.play();
    }, 4000);
    // $FlowFixMe
    const audio = new Audio(ExploSound);
    audio.play();
    this.setState({ defeat: true });
  };

  stress = () => {
    // $FlowFixMe
    const audio = new Audio(EndingSound);
    audio.play();
  };

  checkDefeat = () => {
    if (this.state.try === 0) {
      this.defeat();
    }
  };

  handleOnChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    this.setState({ value });
  };

  handleOnClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    const hashed = md5(this.state.value);
    this.setState({ processing: true });
    setTimeout(() => {
      if (this.props.toDecode === hashed) {
        // $FlowFixMe
        const audio = new Audio(VictorySound);
        audio.play();
        this.setState(prevState => ({
          processing: false,
          victory: true
        }));
      } else {
        if (this.state.try > 1) {
          // $FlowFixMe
          const audio = new Audio(BuzzerSound);
          audio.play();
        }
        this.setState(
          prevState => ({
            value: '',
            try: prevState.try - 1,
            processing: false
          }),
          this.checkDefeat
        );
      }
    }, 3000);
  };

  render() {
    return (
      <React.Fragment>
        {this.state.defeat && (
          <div
            style={Style.cx(styles.absolute, {
              width: '110vh',
              height: '110vh'
            })}
          >
            <img
              style={Style.cx(styles.absolute, styles.pos1)}
              src={explo}
              alt="loading..."
            />
            <img
              style={Style.cx(styles.absolute, styles.pos2)}
              src={explo}
              alt="loading..."
            />
            <img
              style={Style.cx(styles.absolute, styles.pos3)}
              src={explo}
              alt="loading..."
            />
            <img
              style={Style.cx(styles.absolute, styles.pos4)}
              src={explo}
              alt="loading..."
            />
            <img
              style={Style.cx(styles.absolute, styles.pos5)}
              src={explo}
              alt="loading..."
            />
            <img
              style={Style.cx(styles.absolute, styles.pos6)}
              src={explo}
              alt="loading..."
            />
            <img
              style={Style.cx(styles.absolute, styles.pos7)}
              src={explo}
              alt="loading..."
            />
            <img
              style={Style.cx(styles.absolute, styles.pos8)}
              src={explo}
              alt="loading..."
            />
            <img
              style={Style.cx(styles.absolute, styles.pos9)}
              src={explo}
              alt="loading..."
            />
            <img
              style={Style.cx(styles.absolute, styles.pos10)}
              src={explo}
              alt="loading..."
            />
            <img
              style={Style.cx(styles.absolute, styles.pos11)}
              src={explo}
              alt="loading..."
            />
            <img
              style={Style.cx(styles.absolute, styles.pos12)}
              src={explo}
              alt="loading..."
            />
            <img
              style={Style.cx(styles.absolute, styles.pos13)}
              src={explo}
              alt="loading..."
            />
            <img
              style={Style.cx(styles.absolute, styles.pos14)}
              src={explo}
              alt="loading..."
            />
            <img
              style={Style.cx(styles.absolute, styles.pos15)}
              src={explo}
              alt="loading..."
            />
            <img
              style={Style.cx(styles.absolute, styles.pos16)}
              src={explo}
              alt="loading..."
            />
            <img
              style={Style.cx(styles.absolute, styles.pos17)}
              src={explo}
              alt="loading..."
            />
          </div>
        )}
        <div style={styles.container}>
          {this.state.try <= 2 && (
            <h3 style={styles.error}>ERROR!ERROR!ERROR!</h3>
          )}
          {this.state.try === 1 && (
            <h3 style={styles.error}>ERROR!ERROR!ERROR!</h3>
          )}

          <div style={styles.timer}>
            {this.state.try <= 2 && (
              <h3 style={styles.error}>ERROR!ERROR!ERROR!</h3>
            )}
            {this.state.try === 1 && (
              <h3 style={styles.error}>ERROR!ERROR!ERROR!</h3>
            )}

            <Timer
              style={styles.timerStyle}
              timer={2700}
              onEnd={this.defeat}
              onNearEnd={this.stress}
              stop={this.state.victory || this.state.defeat}
            />

            {this.state.try <= 2 && (
              <h3 style={styles.error}>ERROR!ERROR!ERROR!</h3>
            )}
            {this.state.try === 1 && (
              <h3 style={styles.error}>ERROR!ERROR!ERROR!</h3>
            )}
          </div>
          <div style={styles.input}>
            {this.state.try === 1 && (
              <h3 style={styles.error}>ERROR!ERROR!ERROR!</h3>
            )}

            <Input
              className={this.state.try === 2 ? 'error1' : ''}
              onChange={this.handleOnChange}
              style={{ maxHeight: 45, width: '50%' }}
              value={this.state.value}
              disabled={this.state.defeat || this.state.victory}
            />

            {this.state.try === 1 && (
              <h3 style={styles.error}>ERROR!ERROR!ERROR!</h3>
            )}
          </div>

          <div style={styles.try}>
            {this.state.try <= 2 && (
              <h3 style={styles.error}>ERROR!ERROR!ERROR!</h3>
            )}{' '}
            {this.state.try <= 2 && (
              <h3 style={styles.error}>ERROR!ERROR!ERROR!</h3>
            )}
            <Button
              onClick={this.handleOnClick}
              size="large"
              disabled={!this.state.value}
            >
              SOUMETTRE CODE
            </Button>
            {this.state.try === 1 && (
              <h3 style={styles.error}>ERROR!ERROR!ERROR!</h3>
            )}
            {this.state.try === 1 && (
              <h3 style={styles.error}>ERROR!ERROR!ERROR!</h3>
            )}
          </div>
          <div style={styles.numberOfTry}>
            {this.state.try === 1 && (
              <h3 style={styles.error}>ERROR!ERROR!ERROR!</h3>
            )}
            {this.state.try === 1 && (
              <h3 style={styles.error}>ERROR!ERROR!ERROR!</h3>
            )}
            {this.state.victory && (
              <h1 style={styles.victory}>BOMBE DÉSAMORCÉE</h1>
            )}
            {this.state.defeat && <h1 style={styles.defeat}>A D I E U</h1>}
            {!this.state.processing &&
            !this.state.victory &&
            !this.state.defeat ? (
              <h1 style={styles.nbTryStyle}>
                NOMBRE D'ESSAIS RESTANT : {this.state.try}
              </h1>
            ) : (
              <h2 style={styles.nbTryStyle}>DÉCODAGE EN COURS. . .</h2>
            )}

            {this.state.try <= 2 && (
              <h3 style={styles.error}>ERROR!ERROR!ERROR!</h3>
            )}
          </div>
        </div>
      </React.Fragment>
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
    flex: 3,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  input: {
    display: 'flex',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  try: {
    display: 'flex',
    flex: 2,
    justifyContent: 'center'
  },
  numberOfTry: {
    display: 'flex',
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  timerStyle: {
    fontSize: 80,
    color: 'white'
  },
  nbTryStyle: {
    fontSize: 25,
    color: 'white'
  },
  error: {
    padding: 15,
    color: '#f15151',
    fontSize: 15
  },
  victory: {
    color: '#36C297',
    fontSize: 20
  },
  defeat: {
    color: '#f15151',
    fontSize: 20
  },
  absolute: {
    position: 'absolute'
  },
  pos1: {
    top: 0,
    bottom: 0,
    right: 500,
    left: 500
  },
  pos2: {
    top: 0,
    bottom: 500,
    right: 0,
    left: 0
  },
  pos3: {
    top: 0,
    bottom: 100,
    right: 800,
    left: 0
  },
  pos4: {
    top: 200,
    bottom: 500,
    right: 20,
    left: 500
  },
  pos5: {
    top: 800,
    bottom: 0,
    right: 50,
    left: 600
  },
  pos6: {
    top: 200,
    bottom: 300,
    right: 200,
    left: 0
  },
  pos7: {
    top: 500,
    bottom: 100,
    right: 0,
    left: 800
  },
  pos8: {
    top: 0,
    bottom: 800,
    right: 0,
    left: 600
  },
  pos9: {
    top: 800,
    bottom: 0,
    right: 0,
    left: 300
  },
  pos10: {
    top: 600,
    bottom: 0,
    right: 0,
    left: 800
  },
  pos11: {
    top: 200,
    bottom: 0,
    right: 0,
    left: 100
  },
  pos12: {
    top: 800,
    bottom: 0,
    right: 0,
    left: 1000
  },
  pos13: {
    top: 300,
    bottom: 0,
    right: 0,
    left: 1200
  },
  pos14: {
    top: 100,
    bottom: 0,
    right: 0,
    left: 750
  },
  pos15: {
    top: 800,
    bottom: 0,
    right: 0,
    left: 300
  },
  pos16: {
    top: 600,
    bottom: 0,
    right: 0,
    left: 300
  },
  pos17: {
    top: 350,
    bottom: 0,
    right: 0,
    left: 1400
  }
};

export default TimerPage;
