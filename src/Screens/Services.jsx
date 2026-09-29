import React from 'react'
import "./Services.css"

const Services = () => {
  return (
    <div>
     <section className="services">
    <div className="services-header">
      <span className="services-eyebrow">Programs</span>
      <h1 className="services-title">Practical training in technology</h1>
      <p className="services-sub">We provide the best learning experience of new comers in the tech industry</p>
    </div>

    <div className="services-grid">
      <div className="service-card">
        <h3>Web Development</h3>
        <p className="service-blurb">Building Websites and web apps from scratch</p>
        <ul className="service-points">
          <li>HTML, CSS &amp; JavaScript</li>
          <li>A front-end framework like react</li>
          <li>Basic back-end concepts</li>
          <li>Github</li>
          <li>Deploying a live site</li>
        </ul>
        <button className="service-btn">Learn More</button>
      </div>

      <div className="service-card">
        <h3>Cyber Security</h3>
        <p className="service-blurb">Protectin systems, networks and data from attacks.</p>
        <ul className="service-points">
          <li>Networking basics</li>
          <li>Common attack types</li>
          <li>Linux command types</li>
          <li> Password and Authentication Security</li>
          <li>Basic ethical hacking tools</li>
        </ul>
        <button className="service-btn">Learn More</button>
      </div>

      <div className="service-card">
        <h3>Data Analysis</h3>
        <p className="service-blurb">Turning raw data into insights people can act on.</p>
        <ul className="service-points">
          <li>Excel or Google sheets fundamental</li>
          <li>SQL for queryin databases</li>
          <li>Python or R basics</li>
        </ul>
        <button className="service-btn">Learn More</button>
      </div>
       <div className="service-card">
        <h3>Web Design</h3>
        <p className="service-blurb">The look, feel and usability of a website, distinct from coding it.</p>
        <ul className="service-points">
          <li>Wireframing and prototyping</li>
          <li>Basic UX designs</li>
          <li>HTML/CSS basics</li>
        </ul>
        <button className="service-btn">Learn More</button>
      </div>
       <div className="service-card">
        <h3>Photography</h3>
        <p className="service-blurb">Capturing images with technical and creative control.</p>
        <ul className="service-points">
          <li>Camera basics</li>
          <li>Composition rules</li>
          <li>Lighting fundamentals</li>
          <li>Understanding your camera's manual</li>
          <li>Basic photo editing </li>
          <li>Building a simple portofolio</li>
        </ul>
        <button className="service-btn">Learn More</button>
      </div>
       <div className="service-card">
        <h3>Video Editing</h3>
        <p className="service-blurb">Create fast and secure servers, databases and APIs that power great applications.</p>
        <ul className="service-points">
          <li>Editing software basics</li>
          <li>Cutting and sequencing clips</li>
          <li>Basic color correction</li>
          <li>Audio editing</li>
          <li>Transition and pacing</li>
          <li>Exporting from different platforms</li>
        </ul>
        <button className="service-btn">Learn More</button>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Services
