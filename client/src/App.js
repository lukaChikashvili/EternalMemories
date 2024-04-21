import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import Schools from './components/Schools';
import SchoolDetail from './components/SchoolDetail';
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
             <Route path = "schools" element = {<Schools />} />
             <Route path="schools/:id" element={<SchoolDetail />} />
          </Route>  

      </Routes>
      </SmoothScroll>
    </div>
  );
}

export default App;
