import { useState,useEffect } from 'react';
import './App.css';
import axios from 'axios';
function App() {
  const [content, setContent] = useState("")
 useEffect(() => {
  let currentContent = axios.get("http://localhost:3000/").then(d=>d.data)
  setContent(currentContent.data);
  console.log(currentContent)
 }, [])
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
