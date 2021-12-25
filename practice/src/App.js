import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Users from './components/Users';
import UserDetail from './components/UserDetail';

function App() {
  return (
    
    <div>
      <header>
        <ul>
          <li>
            <Link to="/users">Users</Link>
          </li>
      
        </ul>
      </header>
      <Routes>
      <Route
        path="userDetails/:id"
        element={<UserDetail/>}
      />
      <Route
        path="users/"
        element={<Users />}
      />
      <Route exact path="/" element={<Users/>} />
    </Routes>
    </div>
  );
}



export default App;
