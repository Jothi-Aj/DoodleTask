import React, { Component } from 'react';
import {
  View,
  StatusBar,
  TextInput,
  Text,
  Animated
} from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './style';
import {config} from '../../../theme/config';

class FloatingLabelInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(10),
      labelFontSize: new Animated.Value(14),
    };
      this.handleFocus = this.handleFocus.bind(this);
      this.handleBlur = this.handleBlur.bind(this);
  }
  _focusCall() {
      const { fadeAnim, labelFontSize } = this.state;
      Animated.sequence([
        Animated.parallel([
          Animated.spring(fadeAnim, { toValue: -5 }),
          Animated.spring(labelFontSize, { toValue: 11 }),
        ]),
      ]).start();
  }
  handleFocus(){
    this._focusCall();
  }
  handleBlur(){
    const { fadeAnim, labelFontSize } = this.state;
    const { value } = this.props;
    if(value === '') {
      Animated.sequence([
        Animated.parallel([
          Animated.spring(fadeAnim, { toValue: 14 }),
          Animated.spring(labelFontSize, { toValue: 14 }),
        ]),
      ]).start();
    }
  }

  render() {
    const { label, value, onChange, name, secureTextEntry, keyboardType, lastChild } = this.props;
    const { fadeAnim, labelFontSize } = this.state;
    return (
      <View style={[styles.input, lastChild && {marginBottom: 10} ]}>
        <Animated.Text 
          style={[styles.label, {top:fadeAnim, fontSize:labelFontSize}]}>{label}
        </Animated.Text>
        <TextInput
          value={value} 
          style={styles.inputText}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          name={name}
          keyboardType ={keyboardType}
          secureTextEntry={secureTextEntry}
          onChangeText={onChange}
          blurOnSubmit
        />
      </View>
    );
  }
}

FloatingLabelInput.propTypes = {
  label: PropTypes.string.isRequired,
  value:PropTypes.string,
  onChange:PropTypes.func,
  name:PropTypes.string,
  secureTextEntry:PropTypes.bool,
  keyboardType:PropTypes.string
};

export default FloatingLabelInput;