import image from './images/gif.gif';
import gaurav from './images/gaurav.jpg';
import atul from './images/atul.jpg';
import shubham from './images/shubham.jpg';
import Dashboard from './Dashboard';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import How from './How'
import Signup from './Signup';
import {useState} from 'react';
import Login from './pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import Homepage from './Homepage';
  import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter,Routes,Route,useNavigate,Link } from 'react-router-dom';


AOS.init();


function App() {
  
  return (
         <>
        
         <Routes>
            <Route path='/' element={<Homepage/>} ></Route>
            <Route exact path='/Dashboard' element={<Dashboard/>} ></Route>
         </Routes>
        
         </>
  );
}

export default App;
