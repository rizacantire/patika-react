import { useState } from 'react';
import './App.css';

function App() {

  const [counter,setCounter] = useState(0);
  return (
    <div className="App">
      Sayaç : {counter}
      <button>+</button>
      <button>-</button>
    </div>
  );
}

export default App;
