import React from 'react';
import FastImage from 'react-native-fast-image';
import { TouchableWithoutFeedback } from 'react-native';

interface ImageProps {
  src: string;
  size: number;
  circular?: boolean;
  onPress?: () => void;
}

const Image: React.FC<ImageProps> = ({ src, size, circular, onPress }) => {
  const style = { width: size, height: size, borderRadius: circular ? size / 2 : 0 };
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <FastImage source={{ uri: src }} style={[style]} />
    </TouchableWithoutFeedback>
  );
};

Image.defaultProps = {
  circular: false,
};

export default Image;
