import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import Schools from './components/Schools';

function App() {
  const auth = !!localStorage.getItem('token');
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path = "/" element = {<Login />} />
        <Route path = "/register" element = {<Register />} />
         <Route path = "/profile" element = {<Home /> }>
             <Route path = "schools" element = {<Schools />} />
          </Route>  

      </Routes>
    </div>
  );
}

export default App;
