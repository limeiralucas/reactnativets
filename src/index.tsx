import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import CircleImage from './components/CircleImage';

const App: React.FC = () => {
  return (
    <TouchableWithoutFeedback>
      <CircleImage
        src="https://placekitten.com/400/400"
        size={100}
        onPress={() => console.warn('test')}
      />
    </TouchableWithoutFeedback>
  );
};

export default App;
