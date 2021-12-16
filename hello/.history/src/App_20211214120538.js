import { useState } from 'react';
import './App.css';

function App() {

  const [form,setForm] = useState({name:"",lastName:""});
  let changeForm = (event)=>{
    setForm({...form,[event.target.name]:event.target.value})
  }
  return (
    <div className="App">
      İsim
      <br/>
      <input name='name' onChange={changeForm} />
      <br />
      <input name='lastName' onChange={changeForm} />
      
    </div>
  );
}

export default App;
