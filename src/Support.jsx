import React from 'react'
import './Support.css'

const Support = () => {
  return (
      <footer className="footer" id='support'>
  <div className="footer-left col-md-4 col-sm-6">
    <p className="about">
      <span> About the company</span>This web application is part of our Practicum-1.This web application is created by students of IIIT Sonepat 2nd year (IT),namely Gaurav Singh, Shubham Kumar, Atul Garg.This project is based on "Facial Recognition based Payment" to make payment system more secured and safe.
    </p>
  </div>
  <div className="footer-center col-md-4 col-sm-6">
    <div>
      <i className="fa fa-map-marker"></i>
      <p><span id='add'>Room No.316, 318 COHO Hostel, Sonepat</span> Haryana, India</p>
    </div>
    <div>
      <i className="fa fa-phone"></i>
      <p> 1800-182-264-130</p>
    </div>
    <div>
      <i className="fa fa-envelope"></i>
      <p id='cmail'><a href="mailto:gauravsinghgyan26@gmail.com">frbank_support@gmail.com</a></p>
    </div>
  </div>
  <div className="footer-right col-md-4 col-sm-6">
  <img id='logoc' src={"https://logoeps.com/wp-content/uploads/2013/03/linkin-park-band-vector-logo1.png"} alt="" />

    <p className="name">FRBank &copy; 2022</p>
  </div>
</footer>

  )
}

export default Support
