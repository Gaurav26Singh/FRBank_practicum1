import image from './images/gif.gif';
import Dashboard from './Dashboard';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import How from './How'
import Signup from './Signup';
import {useState} from 'react';
import Support from './Support';
import Login from './pages/Login'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


AOS.init();


const Homepage = () => {
  
    const [isShown, setIsShown] = useState(false);
    const [lisShown, lsetIsShown] = useState(false);
    
    const handleClick = event => {
      setIsShown(current => !current);
    };
  
    const handlelClick = event => {
      lsetIsShown(current => !current);
      
    };
    return (
      <>
     <div className='data'>
     <header>
         <div className="logo">
          <img src={"https://logoeps.com/wp-content/uploads/2013/03/linkin-park-band-vector-logo1.png"} alt="" />
          <span id='bname'>FRBank</span>
         </div>
         <div className="links">
          <ul className="options">
            <li><a href="#">Home</a><div className="liner"></div></li>
            <li><a href='#howitworks'>How it works</a></li>
            {/* <li><a href="#contributors">About Us</a></li> */}
            <li><a href="#support">Support</a></li>
            <li><a id='login' onClick={handlelClick}>Login</a></li>
          </ul>
         </div>
     </header>
     <div className="welcome">
      <div className="info" data-aos="slide-right"
      data-aos-once="false">
          <p id='head'>Payments,<br/>More Secure Now</p>
          <p id='discription'>Now make your payments more safe & secured with our powerful facial authentication based payment.</p>
          <div className="start">
          <a>
        <button id='startbtn' onClick={handleClick}>Get Started </button>
        </a>
          </div>   
      </div>
      <div>
        {isShown && <Signup />}
      </div>
  
      <div>
        {lisShown && <Login />}
      </div>
    
      <div className="mygif"><img src={image} alt="" />
      </div>
     </div>
     </div>
     <How/>
     <Login/>
     <ToastContainer/>
     <Support/>
     </>
    );
  }


export default Homepage
