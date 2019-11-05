import React from 'react';
import Button from './components/Button';

const styles = {
  marginTop: 20,
};

const App: React.FC = () => {
  return <Button text="Go to cart" styles={[styles]} outline />;
};

export default App;
