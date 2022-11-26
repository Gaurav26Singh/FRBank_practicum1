import React from 'react'
import './How.css'

const How = () => {
  return (
    <div id="howitworks">
        <h1 className="heads">How it works</h1>
        <p className="hcontent">This application uses the face recognition technology which makes your payments more secure. It improves the security of online transactions by successfully recognizing and authenticating authorized users.</p>

        <div className="steps-card">
            <div className="boxss">
                <div className="icon">01</div>
                <div className="scontent">
                    <h3>Register/Login</h3>
                    <p className="step-content">Get started by registering into the application. After registering, login using your credentials. </p>
                </div>
            </div>
    
            <div className="boxss">
                <div className="icon">02</div>
                <div className="scontent">
                    <h3>Face authentication</h3>
                    <p className="step-content">Authenticate your face while you login or make payments.</p>
                </div>
            </div>
    
            <div className="boxss">
                <div className="icon">03</div>
                <div className="scontent">
                    <h3>Make payments</h3>
                    <p className="step-content">Now you are ready to perform transactions in a more secure way.</p>
                </div>
            </div>
    
            <div className="boxss">
                <div className="icon">04</div>
                <div className="scontent">
                    <h3>Payment summary</h3>
                    <p className="step-content">After every successful payment, get your payment details.</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default How
