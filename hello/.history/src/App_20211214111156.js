import { useState } from 'react';
import './App.css';

function App() {

  const [counter,setCounter] = useState(0);
  return (
    <div className="App">
      Sayaç : {counter}
      <br/>
      <button onClick={()=>{
        setCounter(2)
        console.log(counter)}}>+</button>
      <button onClick={()=>setCounter(1)}>-</button>
    </div>
  );
}

export default App;
