import React from 'react';
import FastImage from 'react-native-fast-image';
import {TouchableWithoutFeedback} from 'react-native';

interface ImageProps {
  src: string;
  size: number;
  circular?: boolean;
  onPress?: () => void;
}

const Image: React.FC<ImageProps> = ({src, size, circular, onPress}) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <FastImage
      source={{uri: src}}
      style={[
        {width: size, height: size, borderRadius: circular ? size / 2 : 0},
      ]}
    />
  </TouchableWithoutFeedback>
);

Image.defaultProps = {
  circular: false,
};

export default Image;
