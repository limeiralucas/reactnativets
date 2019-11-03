import React from 'react';
import Button from './components/Button';

const App: React.FC = () => {
  return <Button text="Go to cart" styles={[{marginTop: 20}]} outline />;
};

export default App;
