
import React from 'react'

const App = () => {
  return (
    <div>
       {/* <!-- HEADER --> */}
     <section>
        <header>
            <div className="nav-link-text"><a href="">Home</a></div>
            <div className="nav-link-text"><a href="">About us</a></div>
            <div className="nav-link-text"><a href="">Contact</a></div>
            <div className="nav-link-text"><a href="">Services</a></div>
        </header>

     </section>
     
        {/* <!-- HERO SECTION --> */}
         <section className="hero">
            <div className="overlay">
            <div className="hero-content"><h1>Welcome to my Web Page</h1>
            <p>Learn fullstack development, UI/UX, Graphics Design and other digital skills</p>
            <button>Get started</button></div>
            
            </div>

         </section>
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
            <img src="../html crash course/car.jpg"
            alt="Student Leraning"/> </div>
            {/* <!-- TESTIMONY SECTION --> */}
          </section>
          <section className="testimonials">
            <h4>TESTIMONIES</h4>
            <h2>Feedback from our students</h2>
            <div className="testimonial-container"/>
                <div className="card">
                    <img src="../html project/student2.jpg" alt="student-1"/>
                    <h3>Ndukuba Chidmi</h3>
                    <p>This Academy Completely Changed my Career. I jobs after the programm</p>
                    </div>

                
                <div className="card">
                    
                    <img src="../html project/student2.jpg" alt="student-1"/>
                    <h3>Anekwe Winifred</h3>
                    <p>This Academy Completely Changed my Career. I got to understand the concept of technology</p>


                </div>
                <div className="card">
                    <img src="../html project/student2.jpg" alt="student-1"/>
                    <h3>Nwaribe Toni</h3>
                    <p>This Academy Completely Changed my Career. It got me to believe in myself</p>

            </div>


          </section>
          {/* <!-- Call to action --> */}
           <section className="cta">
            <div className="cta-content">
                <h2>Ready To Start Your Learning Journey?</h2>
                <p>
                    Join Us today and start learning practical digital skill to trasform your future.
                </p>
                <a href="#" className="cta-button">Get started</a>
            </div>
           </section>
           {/* <!-- FOOTER --> */}
            <footer className="footer">
                <div className="footer-container">
                    {/* <!-- ABOUT --> */}
                     <div className="footer-box">
                        <h2>Our Digitial Skills Academy</h2>

                        <p>
                            Empowering students with practical digital skills for a better future.
                        </p>
                     </div>
                     {/* <!-- QUICK LINKS --> */}
                      <div className="footer-box">
                        <h3>Quick Links</h3>
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Course</a>
                        <a href="#">Contact</a>

                      </div>
                      {/* <!-- CONTACT --> */}
                       <div className="footer-box">
                        <h3>Contact Us</h3>
                        <p> Email: info@example.com</p>
                        <p> Phone: +234 800 000 0000</p>
                        <p>Owerri, Imo State </p>
                       </div>
                </div>
                {/* <!-- COPYRIGHT --> */}
                 <div className="copyright">
                    <p> &copy; 2026 Our Digitial Skills Academy. All Rights Reserved.</p>
                 </div>
            </footer>
         
     
    {/* <script src="./ClassName.js"> */}
        
    {/* </script> */}

    </div>
  )
}

export default App
