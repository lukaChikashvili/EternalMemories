import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path = "/" element = {<Login />} />
        <Route path = "/register" element = {<Register />} />
       <Route path = "/profile" element = {<Home />} />
      </Routes>
    </div>
  );
}

export default App;
