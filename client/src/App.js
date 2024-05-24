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
import CreateModal from './components/CreateModal';
import ExampleMemorial from './components/ExampleMemorial';
import FullPage from './components/FullPage';
import Comments from './components/Comments';


function App() {
  const auth = !!localStorage.getItem('token');
  return (
    <div className="App">
      <div className='fixed  h-screen w-full back '>
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
         <Route path = "/profile" element = {<Home /> }></Route>  
          <Route path = "/create" element = {<CreateModal /> } />
          <Route path = "/example" element = {<ExampleMemorial /> } />
          <Route path = "/events/:id" element = {<FullPage /> }>
               <Route path = "comments" element = {<Comments />} />
            </Route>
      </Routes>
      </SmoothScroll>
    </div>
  );
}

export default App;
