// App.js is a component which is one file that holds all the js logic, html, styling.

import React, { useState } from 'react';
import Tweet from './Tweet';

function App() {
  const [users, setUsers] = useState([
    { name: 'Ed', message: 'Hi there' },
    { name: 'John', message: 'Hi person' },
    { name: 'Mosh', message: 'I am awesome' },
  ]);

  return (
    <div className='app'>
      {users.map((user) => (
        <Tweet name={user.name} message={user.message} />
      ))}

      {/* jsx
    <Tweet */}
      {/* //     name='Dev Ed'
    //     message='Check out my courses and become more creative'
    //     likes='5'
    //   />
    //   <Tweet name='Mosh' message='My new course is available' likes='10000' />
    //   <Tweet name='Phen' message='This is a random tweet' likes='2000' />
    //   <Tweet name='Traversy' message='700k my dudes' likes='10000000' /> */}
    </div>
  );
}

export default App;
