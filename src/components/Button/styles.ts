import { ViewStyle, TextStyle } from 'react-native';
import * as colors from '../../constants/colors';

export const base: ViewStyle = {
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderWidth: 1,
  borderColor: colors.blue,
  alignSelf: 'center',
  borderRadius: 5,
  backgroundColor: colors.blue,
  shadowColor: colors.black,
  shadowOffset: { width: 10, height: 10 },
  shadowOpacity: 0.8,
  shadowRadius: 2,
  elevation: 1,
};

export const textBase: TextStyle = {
  textAlign: 'center',
  textTransform: 'uppercase',
  color: colors.white,
};

export const outline: ViewStyle = {
  backgroundColor: 'transparent',
};

export const green: ViewStyle = {
  backgroundColor: colors.green,
  borderColor: colors.green,
};
