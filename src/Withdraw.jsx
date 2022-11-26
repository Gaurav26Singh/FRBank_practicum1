import React from 'react'
import {useState} from 'react';
import { useEffect } from "react";
import { useSearchParams,useLocation } from 'react-router-dom';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.0/firebase-app.js";
import { getDatabase,ref, set,child, get,remove,update  } from "https://www.gstatic.com/firebasejs/9.12.0/firebase-database.js";

import './Deposit.css'

const Withdraw = () => {
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
  const database = getDatabase(app);
  
  const location = useLocation();
  let userdata= location.state.dataset;
  let faceio;

  useEffect(() => {
    faceio = new faceIO("fioaad90");
  }, []);



    const cancel = event => {

        window.location.reload();
       
    }
   
    const pay = event => {

      var y = document.getElementById('withdrawm');
      y.style.display = "none";
      handleLogIn();
     
  }

  const handleLogIn = async () => {
      try {
        let response = await faceio.authenticate({
          locale: "auto",
        });
  
        console.log(` Unique Facial ID: ${response.facialId}
            PayLoad: ${response.payload}
            `);
            if(response.payload.email == String(userdata.email))
            {
              var psuss = document.getElementById('success');
              var y = document.getElementById('withdrawm');
              var x = document.getElementById("user_interface");

              userdata.amount = Number(userdata.amount) - Number(document.getElementById('da').value);
              
              update(ref(database, 'users/' + userdata.uid), {
              
                amount : userdata.amount,
              
                
                });
             
              setTimeout(()=>{
              psuss.style.display = "block";
              y.style.display = "block";},3000)
    
              setTimeout(()=>{ 
             window.location.reload()},6000)
            }
           else
           {
            error;
           }
  
      } catch (error) {
        var pfail = document.getElementById('failed');
          var y = document.getElementById('withdrawm');
          var x = document.getElementById("user_interface");
         
          setTimeout(()=>{
          pfail.style.display = "block";
          y.style.display = "block";},3000)

          setTimeout(()=>{ 
         window.location.reload()},4500)
          handleError(error)
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
    };

  return (
    <div id='deposit'>

              <h2 id="dhead">Withdraw &nbsp;Money</h2>
        <div id="depositbox">
              <div id="ddetail">
                <div id="acc">Account Number: <span id='An'>{userdata.userId}</span></div>
                <div id="damount">Amount:
                <span id="rupee">₹</span>
                <input type="Number" name="" id="da" /></div>
              </div>
              <div id="dfun">
                <button className='df' id='depositam' onClick={pay}>Withdraw</button>
                <button className='df' id='cancel'
                onClick={cancel}>Cancel</button>
                  <img id='failed' src="https://i0.wp.com/www.indiaesevakendra.in/wp-content/uploads/2020/07/payment-failed1.gif?resize=640%2C368&ssl=1" alt="" />
                  <img  id='success'src="https://cdn.dribbble.com/users/147386/screenshots/5315437/success-tick-dribbble.gif" alt="" />
              </div>
        </div>
         
    </div>
  )
}

export default Withdraw
