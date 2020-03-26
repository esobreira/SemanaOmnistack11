// import React, { useState } from 'react';
import React from 'react';
// import Header from './Header';

import './global.css';

import Routes from './routes';
// import Logon from './pages/Logon';

// JSX - JavaScript XML

function App() {
  return (
    <div>
      <Routes />
    </div>
  );
}

// function App() {
//   const [counter, setCounter] = useState(0);

//   function increment() {
//     setCounter(counter + 1);
//   }

//   return (
//     //<h1 id="title">Hello Eberton</h1>
//     // <Header title="Semana OmniStack" />
//     <div>
//       <Header>Contador: {counter}</Header >
//       <button onClick={increment}>Incrementar</button>
//     </div>

//   );
// }

export default App;