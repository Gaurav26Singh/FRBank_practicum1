import React from 'react'
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './login.css';
import {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.0/firebase-app.js";
        import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, sendEmailVerification, RecaptchaVerifier,signInWithPhoneNumber,signInWithRedirect,GoogleAuthProvider,getRedirectResult,signOut} from "https://www.gstatic.com/firebasejs/9.12.0/firebase-auth.js";
        import { getDatabase,ref, set,child, get,remove,update  } from "https://www.gstatic.com/firebasejs/9.12.0/firebase-database.js";
        import { createSearchParams,Routes,Route,useNavigate,Link } from 'react-router-dom';

  AOS.init();

    const failureusernotify = () => toast.error('user not mathched or registered', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });

      const failurepasswordnotify = () => toast.error('Incorrect Password', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
  
 

const Login = () => {

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
  const provider = new GoogleAuthProvider();
  const database = getDatabase(app);
  let curr;
  let tex;
  let info = false;
  let dash;
  const navigate = useNavigate();  
  let extract;

  function fire()
  {
    
    var emaill = document.getElementById('emailadd').value;
            var passwordl = document.getElementById('password').value;
  signInWithEmailAndPassword(auth, emaill, passwordl)
  .then((userCredential) => {
    const user = userCredential.user;
    const dbRef = ref(getDatabase());
get(child(dbRef, 'users/' + user.uid)).then((snapshot) => {
  if (snapshot.exists()) {
    update(ref(database, 'users/' + snapshot.val().uid), {
                
      logint : new Date().toLocaleString()
      
      });
     extract = snapshot.val();
     navigate("/Dashboard",{
      state:{
        dataset : extract,
      }
   });
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
console.log('login success');



    // ...
  })
  .catch((error) => {
      failurepasswordnotify();
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  }

  const [lisShown, lsetIsShown] = useState(false);
  const handlelClick = event => {
    lsetIsShown(current => !current);
  };
  let faceio;

  useEffect(() => {
    faceio = new faceIO("fioaad90");
  }, []);

  const handleLogIn = async () => {
    try {
      let response = await faceio.authenticate({
        locale: "auto",
      });

      console.log(` Unique Facial ID: ${response.facialId}
          PayLoad: ${response.payload}
          `);

          var emaill = document.getElementById('emailadd').value;
          if(response.payload.email == String(emaill))
          {
    
            fire();
          }
          else
          {
              failureusernotify();
          }
    } catch (error) {
      handleError(error);
    }

    function handleError(errCode) {
      // Log all possible error codes during user interaction..
      // Refer to: https://faceio.net/integration-guide#error-codes
      // for a detailed overview when these errors are triggered.
      switch (errCode) {
        case fioErrCode.PERMISSION_REFUSED:
          console.log("Access to the Camera stream was denied by the end user");
          break;
        case fioErrCode.NO_FACES_DETECTED:
          console.log("No faces were detected during the enroll or authentication process");
          break;
        case fioErrCode.UNRECOGNIZED_FACE:
          console.log("Unrecognized face on this application's Facial Index");
          break;
        case fioErrCode.MANY_FACES:
          console.log("Two or more faces were detected during the scan process");
          break;
        case fioErrCode.PAD_ATTACK:
          console.log("Presentation (Spoof) Attack (PAD) detected during the scan process");
          break;
        case fioErrCode.FACE_MISMATCH:
          console.log("Calculated Facial Vectors of the user being enrolled do not matches");
          break;
        case fioErrCode.WRONG_PIN_CODE:
          console.log("Wrong PIN code supplied by the user being authenticated");
          break;
        case fioErrCode.PROCESSING_ERR:
          console.log("Server side error");
          break;
        case fioErrCode.UNAUTHORIZED:
          console.log("Your application is not allowed to perform the requested operation (eg. Invalid ID, Blocked, Paused, etc.). Refer to the FACEIO Console for additional information");
          break;
        case fioErrCode.TERMS_NOT_ACCEPTED:
          console.log("Terms & Conditions set out by FACEIO/host application rejected by the end user");
          break;
        case fioErrCode.UI_NOT_READY:
          console.log("The FACEIO Widget could not be (or is being) injected onto the client DOM");
          break;
        case fioErrCode.SESSION_EXPIRED:
          console.log("Client session expired. The first promise was already fulfilled but the host application failed to act accordingly");
          break;
        case fioErrCode.TIMEOUT:
          console.log("Ongoing operation timed out (eg, Camera access permission, ToS accept delay, Face not yet detected, Server Reply, etc.)");
          break;
        case fioErrCode.TOO_MANY_REQUESTS:
          console.log("Widget instantiation requests exceeded for freemium applications. Does not apply for upgraded applications");
          break;
        case fioErrCode.EMPTY_ORIGIN:
          console.log("Origin or Referer HTTP request header is empty or missing");
          break;
        case fioErrCode.FORBIDDDEN_ORIGIN:
          console.log("Domain origin is forbidden from instantiating fio.js");
          break;
        case fioErrCode.FORBIDDDEN_COUNTRY:
          console.log("Country ISO-3166-1 Code is forbidden from instantiating fio.js");
          break;
        case fioErrCode.SESSION_IN_PROGRESS:
          console.log("Another authentication or enrollment session is in progress");
          break;
        case fioErrCode.NETWORK_IO:
        default:
          console.log("Error while establishing network connection with the target FACEIO processing node");
          break;
      }
    }
  };
  return (
    <div id='llogin' data-aos="slide-right"
    data-aos-once="True" style={{left: lisShown ? '-70%' : '0'}}>
       <button id='back'  onClick={handlelClick}>back</button>
        <h2>Login here</h2>
      <form >
        <label>E-mail</label>
        <input type="text" id="emailadd"/>
        <label>Password</label>
        <input type="password" id="password"/>
        <div className="box">
        <button id="loginbtn" type="button" onClick={handleLogIn}>Login</button>
        
      </div>
      </form>  
      </div>
  )
}

export default Login
