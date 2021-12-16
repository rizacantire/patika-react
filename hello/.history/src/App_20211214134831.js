import { useState,useEffect } from 'react';
import './App.css';
import axios from 'axios';
function App() {
  const [content, setContent] = useState("")
 useEffect(() => {
  let currentContent = axios.get("https://www.google.com/")
  setContent(currentContent);
  console.log(content)
 }, [])
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
