import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import Body from './components/Body';
const App = () => {
  // Body component state and handling
  const [item, setItem] = useState(0);
  const handleChange = (event, value) => {
    setItem(value);
  };
  // Component...

  return (
    <>
      <Navbar />
      <Body value={item} handleChange={handleChange} />
    </>
  );
};

export default App;
