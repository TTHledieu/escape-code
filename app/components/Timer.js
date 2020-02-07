// @flow

import * as React from 'react';

type Props = {|
  timer: number,
  style?: {},
  onEnd: () => void,
  onNearEnd?: () => void,
  stop?: boolean
|};

type State = {|
  interval: ?IntervalID,
  time: {
    minutes: number,
    seconds: number
  },
  timeTotal: number
|};

class Timer extends React.PureComponent<Props, State> {
  static defaultProps = {
    style: {}
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      interval: null,
      time: {
        minutes: -1,
        seconds: -1
      },
      timeTotal: -1
    };
  }

  componentDidMount() {
    const { timer } = this.props;
    this.setState(
      () => ({
        time: this.secondsToTime(timer),
        timeTotal: timer
      }),
      this.startTimer
    );
  }

  secondsToTime = (timer: number) => {
    const divisorMinutes = timer % (60 * 60);
    const minutes = Math.floor(divisorMinutes / 60);

    const divisorSeconds = divisorMinutes % 60;
    const seconds = Math.ceil(divisorSeconds);

    const time = {
      minutes,
      seconds
    };

    return time;
  };

  startTimer = () => {
    const interval = setInterval(this.countDown, 1000);
    this.setState({ interval });
  };

  countDown = () => {
    const { timeTotal } = this.state;
    const timeLeft = timeTotal - 1;

    if (timeLeft === 900) {
      this.props.onNearEnd && this.props.onNearEnd();
    }
    this.setState(
      () => ({
        time: this.secondsToTime(timeLeft),
        timeTotal: timeLeft
      }),
      () => {
        if (this.state.timeTotal === 0) {
          window.clearInterval(this.state.interval);
          this.props.onEnd();
        }
      }
    );
  };

  formatTime = (unit: number, pad: string, nbUnit: number) =>
    (Array(nbUnit + 1).join(pad) + unit).slice(-nbUnit);

  render() {
    const { minutes, seconds } = this.state.time;
    const formattedTime = `${this.formatTime(
      minutes,
      '0',
      2
    )}:${this.formatTime(seconds, '0', 2)}`;
    if (this.props.stop) {
      window.clearInterval(this.state.interval);
    }

    return <span style={this.props.style}>{formattedTime}</span>;
  }
}

export default Timer;
