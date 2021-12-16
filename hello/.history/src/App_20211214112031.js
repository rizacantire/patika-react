import { useState } from 'react';
import './App.css';

function App() {

  const [counter,setCounter] = useState(0);
  return (
    <div className="App">
      Sayaç : {counter}
      <br/>
      <button onClick={()=>{
        setCounter(counter+1)}}>+</button>
      <button onClick={()=>setCounter(1)}>-</button>
    </div>
  );
}

export default App;
