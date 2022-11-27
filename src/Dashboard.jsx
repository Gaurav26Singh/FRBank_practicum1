import React from 'react'
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Dashboard.css';
import {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { Routes,Route,useNavigate,Link } from 'react-router-dom';
  import Login from './pages/Login'
  import Deposit from './Deposit'
import Withdraw from './Withdraw';
import Transfer from './Transfer';
import { useSearchParams,useLocation } from 'react-router-dom';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.0/firebase-app.js";
        import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, sendEmailVerification, RecaptchaVerifier,signInWithPhoneNumber,signInWithRedirect,GoogleAuthProvider,getRedirectResult,signOut} from "https://www.gstatic.com/firebasejs/9.12.0/firebase-auth.js";
        import { getDatabase,ref, set,child, get,remove,update  } from "https://www.gstatic.com/firebasejs/9.12.0/firebase-database.js";

            
const Dashboard = () => {
    const [disShown, setdIsShown] = useState(false);
    const [wisShown, setwIsShown] = useState(false);
    const [tisShown, settIsShown] = useState(false);
    const [searchparams]= useSearchParams();
    const location = useLocation();
    const navigate = useNavigate();  
   
    let userdata= location.state.dataset;
    
    console.log(location.state.dataset);
    const firebaseConfig = {
      apiKey: "AIzaSyBYJVj50-S3hFC0LCguoGwBMAkXf4BHydw",
      authDomain: "banking-427e9.firebaseapp.com",
      databaseURL: "https://banking-427e9-default-rtdb.firebaseio.com",
      projectId: "banking-427e9",
      storageBucket: "banking-427e9.appspot.com",
      messagingSenderId: "845332022643",
      appId: "1:845332022643:web:1fe7a1ff1f087c3f52f106"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(); 
    const database = getDatabase(app);
    const dbRef = ref(getDatabase());
    // get(child(dbRef, 'users/' + userdata.uid)).then((snapshot) => {
    //   if (snapshot.exists()) {
    //      console.log(paisa)
    //   } else {
    //     console.log("No data available");
    //   }
    // }).catch((error) => {
    //   console.error(error);
    // });
    const provider = new GoogleAuthProvider();
    const depositm = event => {
        setdIsShown(current => !current);
        var x = document.getElementById("user_interface");
        var y = document.getElementById('depam');
        if (x.style.opacity === "0.5") {
          x.style.opacity = "1";
          x.style.pointerEvents = "auto";
         
         
          
        } else {
            
          x.style.opacity = "0.5";
          x.style.pointerEvents = "none";
          y.style.display = "block"
          

        }
        
      };
      const lg = event => {
        const auth = getAuth();
         signOut(auth).then(() => {
          navigate("/",{
           
         });
}).catch((error) => {
  // An error happened.
});
        
      };

      const withdrawm = event => {
        setwIsShown(current => !current);
        var x = document.getElementById("user_interface");
        var y = document.getElementById('depam');
        if (x.style.opacity === "0.5") {
          x.style.opacity = "1";
          x.style.pointerEvents = "auto";
         
          
        } else {
            
          x.style.opacity = "0.5";
          x.style.pointerEvents = "none";
          y.style.display = "block"

        }
        
      };

      const transferm = event => {
        settIsShown(current => !current);
        var x = document.getElementById("user_interface");
        var y = document.getElementById('transferm');
        if (x.style.opacity === "0.5") {
          x.style.opacity = "1";
          x.style.pointerEvents = "auto";
         
          
        } else {
            
          x.style.opacity = "0.5";
          x.style.pointerEvents = "none";
          y.style.display = "block"

        }
        
      };

      
  return (
    <div id="structure">
         <div id='depam'>
        {disShown && <Deposit />}
      </div>
      
      <div id='withdrawm'>
        {wisShown && <Withdraw />}
      </div>
      <div id='transferm'>
        {tisShown && <Transfer/>}
      </div>
       
    <header id="nav">
    
       <div id="logo">
        <img src="https://logoeps.com/wp-content/uploads/2013/03/linkin-park-band-vector-logo1.png" alt=""/>
        <span id='bname'>FR Bank</span>
        </div>
        <div id="user">
            <div id="username"><p>{userdata.username}</p></div>
            <div id="logout"> <button onClick={lg}>LogOut</button></div>
        </div>
    </header>
   
    <div id="user_interface">

    <h1>Dashboard</h1>
    <div id="firstblock">
        <div id="amount">
            <div id="small">
                <p>Main Account</p>
                <p>Amount Available</p>
            </div>
            <div id="medium">
                <p>FRBank Savings Account</p>
               
                    <p id="arupees"> ₹{userdata.amount}</p>
            </div>
            <div id="large">
                <p>Account NUmber</p><p id='anum'>{userdata.userId}</p>
            </div>

        </div>
        <div id="timing">
            <h2>Welcome Back,</h2>
            <div id="calender"><span id="uname">{userdata.username}</span>
                <img src="https://cdn-icons-png.flaticon.com/512/869/869604.png"/></div>
                <div id="time"><p>Last Login:  </p><span id="ll">{userdata.logint}</span></div>
               
            </div>
           
        </div>
    
    <div id="user_option">
        <div id="option_user1">
            <div id="cid"><p>Customer ID</p></div>
            <div id="cn"><h2>{userdata.cid}</h2></div>
        </div>
        <div id="option_user2">
            <button onClick={depositm}>Deposit Money</button>
           
        </div>
        <div id="option_user3">
            <button onClick={withdrawm}>Withdraw Money</button>
        </div>
        <div id="option_user4">
            <button onClick={transferm}>Transfer Money</button>
        </div>
    </div>
    <div id="action">
        <div id="transactions">
            <h1>User Details</h1>
            <p> <h3>Name :</h3> {userdata.username}<br/></p>
            <p><h3> Contact Number :</h3> {userdata.contact}<br/></p>
            <p> <h3>Date of Birth :</h3> {userdata.dob}<br/></p>
            <p> <h3>Registered email :</h3> {userdata.email}</p>
            <p> <h3> Registered On :</h3> {userdata.rt}</p>
        </div>
        <div id="notifications">
            <h1>Notifications</h1>
            <ul>
                <li>Cloud techs role in driving payment modernisation</li>
                <li>Indian Overseas Bank resets interest rates with effect from November 10</li>
                <li>Govt nominees on PSB boards told to review reform path</li>
                <li>MFIs faced up to a 10% credit loss in FY21 and FY22 due to the pandemic</li>
                <li>Sidbi likely to revamp microfinance equity fund scheme</li>
                <li>Corporate loans surge on capex revival</li>
                <li>Indian Overseas Bank resets interest rates with effect from November 10</li>
                <li>MFIs faced up to a 10% credit loss in FY21 and FY22 due to the pandemic</li>
                <li>Govt nominees on PSB boards told to review reform path</li>

               
            </ul>
        </div>

    </div>
</div>
</div>
  )
}

export default Dashboard
