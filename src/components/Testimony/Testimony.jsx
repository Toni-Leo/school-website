import React from 'react'
import "./Testimony.css"
import cardimg from '../../assets/student2.jpg'
const Testimony = () => {
  return (
    <div>
         {/* <!-- TESTIMONY SECTION --> */}
        <section className="testimonials">
            <h4>TESTIMONIES</h4>
            <h2>Feedback from our students</h2>
            <div className="testimonial-container">
                <div className="card">
                     <img src={cardimg} alt="toni" width ="300px" />
                    <h3>Ndukuba Chidmi</h3>
                    <p>This Academy Completely Changed my Career. I jobs after the programm</p>
                    </div>

                
                <div className="card">
                    
                    <img src={cardimg} alt="toni" width ="300px" />
                    <h3>Anekwe Winifred</h3>
                    <p>This Academy Completely Changed my Career. I got to understand the concept of technology</p>


                </div>
                <div className="card">
                     <img src={cardimg} alt="toni" width="300px"/>
                    <h3>Nwaribe Toni</h3>
                    <p>This Academy Completely Changed my Career. It got me to believe in myself</p>

                </div>
            </div>
        </section>
    </div>
  )
}

export default Testimony
