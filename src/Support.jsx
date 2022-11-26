import React from 'react'
import './Support.css'

const Support = () => {
  return (
      <footer class="footer" id='support'>
  <div class="footer-left col-md-4 col-sm-6">
    <p class="about">
      <span> About the company</span>This web application is part of our Practicum-1.This web application is created by students of IIIT Sonepat 2nd year (IT),namely Gaurav Singh, Shubham Kumar, Atul Garg.This project is based on "Facial Recognition based Payment" to make payment system more secured and safe.
    </p>
  </div>
  <div class="footer-center col-md-4 col-sm-6">
    <div>
      <i class="fa fa-map-marker"></i>
      <p><span id='add'>Room No.316, 318 COHO Hostel, Sonepat</span> Haryana, India</p>
    </div>
    <div>
      <i class="fa fa-phone"></i>
      <p> (+91) 7667 477 957</p>
    </div>
    <div>
      <i class="fa fa-envelope"></i>
      <p id='cmail'><a href="mailto:gauravsinghgyan26@gmail.com">gauravsinghgyan26@gmail.com</a></p>
    </div>
  </div>
  <div class="footer-right col-md-4 col-sm-6">
  <img id='logoc' src={"https://logoeps.com/wp-content/uploads/2013/03/linkin-park-band-vector-logo1.png"} alt="" />

    <p class="name">FRBank &copy; 2022</p>
  </div>
</footer>

  )
}

export default Support
