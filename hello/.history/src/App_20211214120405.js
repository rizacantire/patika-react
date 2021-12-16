import { useState } from 'react';
import './App.css';

function App() {

  const [form,setForm] = useState({name:"",lastName:""});
  let changeForm = (event)=>{
    console.log(event)
  }
  return (
    <div className="App">
      İsim
      <br/>
      <input name='name' onChange={changeForm} />
      <input name='lastName' onChange={changeForm} />
      
    </div>
  );
}

export default App;
