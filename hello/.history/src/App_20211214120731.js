import { useState } from 'react';
import './App.css';

function App() {

  const [form,setForm] = useState({name:"",lastName:""});
  let changeForm = (event)=>{
    setForm({[event.target.name]:event.target.value})
  }
  return (
    <div className="App">
      İsim
      <br/>
      <input name='name' onChange={changeForm} />
      <br />
      <input name='lastName' onChange={changeForm} />

      <br />
      {form.name} {form.lastName}
      
    </div>
  );
}

export default App;
