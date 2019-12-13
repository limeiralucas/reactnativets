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
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  type,
  outline = false,
  styles = [],
  textStyle = [],
  onClick,
}) => {
  const viewBase = getViewBaseStyle(type, outline);
  const textBase = getTextBaseStyle(type, outline);

  const customStyle = StyleSheet.create([viewBase, ...styles]);
  const customTextStyle = StyleSheet.create([textBase, ...textStyle]);

  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={customStyle}>
        <Text style={customTextStyle}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Button;
