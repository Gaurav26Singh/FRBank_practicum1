import "./Signup.css";
import { useEffect } from "react";
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Routes,Route,useNavigate } from 'react-router-dom';
  import 'react-toastify/dist/ReactToastify.css';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.0/firebase-app.js";
        import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, sendEmailVerification, RecaptchaVerifier,signInWithPhoneNumber,signInWithRedirect,GoogleAuthProvider,getRedirectResult,signOut} from "https://www.gstatic.com/firebasejs/9.12.0/firebase-auth.js";
        import { getDatabase,ref, set,child, get,remove  } from "https://www.gstatic.com/firebasejs/9.12.0/firebase-database.js";

// const element = <FontAwesomeIcon icon={faArrowLeft} />


AOS.init();

const successnotify = () => toast.success('SignUp Sccessfully!', {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
  });
  const failurenotify = () => toast.error('SignUp failed!', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });
const Signup = () => {
  
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
  
  
  
  //         window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);
  //         recaptchaVerifier.render().then((widgetId) => {
  //   window.recaptchaWidgetId = widgetId;
  // }); 
  let sub = document.getElementById('regis');
  function runn()
  {
   
      var email = document.getElementById('email').value;
      var password = document.getElementById('pass').value;
      let an = document.getElementById('an').value;
  let dob = document.getElementById('dob').value;
  let name = document.getElementById('name').value;
  let cn = document.getElementById('cn').value;
  tex = String(email);
      createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
  // Signed in 
  const user = userCredential.user;
  curr = userCredential.user.uid;
  set(ref(database, 'users/' + user.uid), {
  userId: an,
  username:name,
  email: email,
  dob : dob,
  contact : cn,
  uid :curr,
  amount : Math.floor(Math.random()*100000),
  cid: "FR"+ Math.floor(Math.random()*100000),
  logint : new Date().toLocaleString(),
  rt:new Date().toLocaleString(),
  
  });
  
  handleRegister();

  })
  .catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  // ..
  
  });

  
  }

  const [isShown, setIsShown] = useState(false);
  const handleClick = event => {
    setIsShown(current => !current);
  };
  let faceio;

  useEffect(() => {
    faceio = new faceIO("fioaad90");
  }, []);

  const handleRegister = async () => {
    try {
      
      let response = await faceio.enroll({
        locale: "auto",
        payload: {
          email: tex,
        },
      });

      console.log(` Unique Facial ID: ${response.facialId}
      Enrollment Date: ${response.timestamp}
      Gender: ${response.details.gender}
      Age Approximation: ${response.details.age}`);
       successnotify();
       setTimeout(()=>{window.location.reload()},3300)
    } catch (error) {
      rmv();
			handleError(error);
      failurenotify();
      setTimeout(()=>{window.location.reload()},3300)
    }
  };

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
function rmv()
   {
  remove(ref(database,'users/' + curr))
  .then(()=>{ M.toast({html: 'SignUp Failed!',classes:'false'});})
  .catch((error)=>{ })
};

  return (
    <>
    <section id='try'>
      <div>
      </div>
    </section>
    <div id='signup' data-aos="slide-right"
    data-aos-once="false" style={{left: isShown ? '-70%' : '0'}}>
       <button id='back'  onClick={handleClick}>back</button>
      <h3>SignUp</h3>
    <form id='sform'>
      <label>Name</label>
      <input type="text" id="name" className="validate"/>
      <label>Contact Number</label>
      <input type="text" id="cn"/>
      <label>Date of Birth</label>
      <input type="date" id="dob"/>
      <label>Accout Number</label>
      <input type="text" id="an"/>
        <label>E-mail</label>
        <input type="email" id="email"/>
        <label>Password</label>
        <input type="password" id="pass"/>
        <br/>
        <div className="box">
        <button id="regis" type="button" onClick={runn}>Register</button>
      </div>
      </form>
      
      <script src="auth.js"></script>
    <script type="module"></script>
   
   
      </div>
      
    </>
  )
}

export default Signup