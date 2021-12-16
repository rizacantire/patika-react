import { useState,useEffect } from 'react';
import './App.css';
import axios from 'axios';
function App() {
  const [content, setContent] = useState("")
 useEffect(() => {
  let currentContent = axios("https://www.google.com/")
  setContent(currentContent.data);
  console.log(currentContent.data)
 }, [])
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
