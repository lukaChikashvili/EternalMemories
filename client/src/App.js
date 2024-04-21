import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';

import Main from './components/Main';
import SmoothScroll from './components/SmoothScroll';


function App() {
  const auth = !!localStorage.getItem('token');
  return (
    <div className="App">
      <SmoothScroll>
    
      <Header />
      <Routes>
      <Route path = "/" element = {<Main />} />
        <Route path = "/login" element = {<Login />} />
        <Route path = "/register" element = {<Register />} />
         <Route path = "/profile" element = {<Home /> }>
          
          </Route>  

      </Routes>
      </SmoothScroll>
    </div>
  );
}

export default App;
