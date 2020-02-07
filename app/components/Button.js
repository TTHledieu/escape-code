// @flow

import * as React from 'react';
import * as Style from '../helpers/style';

type Props = {|
  size: 'small' | 'medium' | 'large',
  isHoverable: boolean,
  style?: {},
  name?: string,
  value?: string,
  disabled?: boolean,
  children?: React.Node,
  onClick?: (SyntheticEvent<HTMLButtonElement>) => void,
  color?: string,
  type?: 'button' | 'submit'
|};

type State = {|
  focused: boolean
|};

class Button extends React.PureComponent<Props, State> {
  static defaultProps = {
    isHoverable: true,
    size: 'medium'
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      focused: false
    };
  }
  render() {
    return (
      <button
        name={this.props.name}
        value={this.props.value}
        onClick={this.props.onClick}
        disabled={this.props.disabled}
        type={this.props.type}
        onFocus={() => this.setState(() => ({ focused: true }))}
        onBlur={() => this.setState(() => ({ focused: false }))}
        style={Style.cx(
          styles.button,
          styles[this.props.size],
          this.props.style,
          this.state.focused && styles.hovered,
          this.props.disabled && styles.disabled
        )}
      >
        {this.props.children}
      </button>
    );
  }
}

const styles: Style.Sheet = {
  button: {
    appearance: 'none',
    transition: 'all 0.2s ease',
    backgroundColor: '#f15151',
    borderColor: '#f15151',
    color: '#FFFFFF',
    borderRadius: 4,
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    boxShadow: 'none',
    outline: 'none',
    cursor: 'pointer'
  },
  hovered: {
    opacity: 0.9
  },
  disabled: {
    pointerEvents: 'none',
    opacity: 0.55
  },

  small: {
    fontSize: 14,
    height: 30,
    paddingLeft: 8,
    paddingRight: 8,
    minWidth: 60,
    maxWidth: 80
  },
  medium: {
    fontSize: 15,
    height: 34,
    paddingLeft: 12,
    paddingRight: 12,
    minWidth: 80
  },
  large: {
    fontSize: 16,
    height: 38,
    paddingLeft: 16,
    paddingRight: 16,
    minWidth: 120
    // maxWidth: 180
  }
};

export default Button;
