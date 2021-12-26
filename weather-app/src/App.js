import './App.css';
import Weathers from './components/Weathers';
import Header from './components/Header';
import {Container} from "reactstrap"
import { WeatherProvider } from './contexts/WeatherContext';


function App() {
  return (
    <div className='App'>
      <WeatherProvider>
        <Container>
          <Header/>
          <Weathers/>
        </Container>
      </WeatherProvider>
     
      
    </div>
  );
}

export default App;
