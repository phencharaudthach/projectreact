// App.js is a component which is one file that holds all the js logic, html, styling.

import React, { useState } from 'react';
import Tweet from './Tweet';

function App() {
  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  };

  return (
    // jsx
    <div className='app'>
      <h1 className={isRed ? 'red' : ''}>Change my color! </h1>
      <button onClick={increment}>Increment</button>
      <h1>{count} </h1>
      {/* <Tweet
        name='Dev Ed'
        message='Check out my courses and become more creative'
        likes='5'
      />
      <Tweet name='Mosh' message='My new course is available' likes='10000' />
      <Tweet name='Phen' message='This is a random tweet' likes='2000' />
      <Tweet name='Traversy' message='700k my dudes' likes='10000000' /> */}
    </div>
  );
}

export default App;
