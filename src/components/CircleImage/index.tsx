import React from 'react';
import FastImage from 'react-native-fast-image';
import {TouchableWithoutFeedback} from 'react-native';

interface CircleImageProps {
  src: string;
  size: number;
  onPress?: () => void;
}

const CircleImage: React.FC<CircleImageProps> = ({src, size, onPress}) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <FastImage
      source={{uri: src}}
      style={[{width: size, height: size, borderRadius: size / 2}]}
    />
  </TouchableWithoutFeedback>
);

export default CircleImage;
