import React from 'react';
import { TouchableWithoutFeedback, Text, StyleSheet, View } from 'react-native';
import { buttonType } from './types';
import { getViewBaseStyle, getTextBaseStyle } from './helpers';

interface ButtonProps {
  text: string;
  outline?: boolean;
  type?: buttonType;
  styles?: Array<object>;
  textStyle?: Array<object>;
}

const Button: React.FC<ButtonProps> = ({ text, type, outline, styles, textStyle }) => {
  const viewBase = getViewBaseStyle(type, outline);
  const textBase = getTextBaseStyle(type, outline);

  const customStyle = StyleSheet.create([viewBase, ...styles]);
  const customTextStyle = StyleSheet.create([textBase, ...textStyle]);

  return (
    <View style={customStyle}>
      <TouchableWithoutFeedback>
        <Text style={customTextStyle}>{text}</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

Button.defaultProps = {
  styles: [],
  outline: false,
  type: 'default',
  textStyle: [],
};

export default Button;
