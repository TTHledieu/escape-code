// @flow

import * as React from 'react';
import * as Style from '../helpers/style';

type Props = {|
  style?: {},
  className?: string,
  value?: string,
  placeholder?: string,
  disabled?: boolean,
  onChange?: (e: SyntheticEvent<HTMLInputElement>) => void,
  fieldName?: string,
  name?: string
|};

type State = {|
  focused: boolean
|};

class Input extends React.PureComponent<Props, State> {
  static defaultsProps = {
    type: 'text'
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      focused: false
    };
  }

  handleOnChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  };

  handleOnFocus = (e: SyntheticFocusEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.setState(prevState => ({
      focused: !prevState.focused
    }));
  };

  handleOnBlur = (e: SyntheticFocusEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.setState(prevState => ({
      focused: !prevState.focused
    }));
  };

  render() {
    return (
      <input
        className={this.props.className}
        name={this.props.name}
        onFocus={this.handleOnFocus}
        onBlur={this.handleOnBlur}
        onChange={this.handleOnChange}
        disabled={this.props.disabled}
        value={this.props.value}
        placeholder={this.props.placeholder}
        style={Style.cx(
          styles.input,
          this.props.style,
          this.state.focused && styles.focused,
          this.props.disabled && styles.disabled
        )}
      />
    );
  }
}

const styles: Style.Sheet = {
  paddingIcon: {
    paddingLeft: 40,
    paddingRight: 0
  },
  input: {
    fontSize: 14,
    fontWeight: 'lighter',
    color: '#4a4949',
    borderWidth: 1,
    borderColor: '#e3e4e6',
    borderStyle: 'solid',
    borderRadius: 4,
    paddingBottom: 10,
    paddingTop: 10,
    paddingRight: 8,
    paddingLeft: 8,
    appearance: 'none',
    transition: 'all 0.2s ease',
    backgroundColor: 'white',
    backgroundImage: 'none',
    display: 'block',
    outline: 'none',
    maxWidth: '100%',
    height: '100%'
  },
  focused: {
    boxShadow: `0 1px 2px 0 ${Style.hexToRgba('#36C297', 0.75)}`,
    borderColor: '#36C297'
  },
  disabled: {
    pointerEvents: 'none',
    backgroundColor: '#efefef'
  }
};

export default Input;
