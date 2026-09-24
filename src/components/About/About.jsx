import React from 'react'
import './About.css'
import temimg from "../../assets/car.jpg"

const About = () => {
  return (
    <div>
       {/* <!-- ABOUT SECTION --> */}
                <section className="about">
                  <div className="about-text">
                      <h4>ABOUT US</h4>
                      <h2>Building Skills,< br />Building Futures</h2>
                      <p>At morning className Digital Skills Academy, we provide practial training that helps you create a future</p>
                      <ul>
                          <li>&#10004; practial Hands-on Learning</li>
                          <li>&#10004; Expert instructor</li>
                          <li>&#10004; Flexible learning schedule</li>
      
      
                      </ul>
                      <a href="#"className="btn">Learn More</a>
                  </div>
                  <div className="about-image">
                  <img src= {temimg} alt="Student Leraning"/> </div>
                
                </section>
              
    </div>
  )
}

export default About
