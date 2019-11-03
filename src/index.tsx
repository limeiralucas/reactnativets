import React from 'react';
import Image from './components/Image';

const App: React.FC = () => {
  return (
    <Image
      src="https://placekitten.com/400/400"
      size={100}
      onPress={() => console.warn('test')}
      circular
    />
  );
};

export default App;
