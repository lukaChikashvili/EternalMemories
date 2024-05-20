import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';

import Login from './components/Login';
import Register from './components/Register';

import Main from './components/Main';
import SmoothScroll from './components/SmoothScroll';
import {Canvas} from '@react-three/fiber';
import Model from './components/Model';
import Lights from './components/Lights';
import Header from './components/Header';


function App() {
  const auth = !!localStorage.getItem('token');
  return (
    <div className="App">
      <div className='absolute  h-screen w-full '>
      <Canvas camera={{ position: [0, 10, 15], fov: 50 }}  >
        <Model />
        <Lights />
      </Canvas>
      </div>
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
