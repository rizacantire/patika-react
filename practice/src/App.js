import './App.css';
import {ThemeProvider} from './contexts/ThemeContext';
import  Button  from './components/Button';
import Header from './components/Header';

function App() {
  return (
    
    <div>
      <ThemeProvider>
        <Header/>
        <br/>
        <hr/>
        <Button/>
      </ThemeProvider>
    </div>
  );
}



export default App;
