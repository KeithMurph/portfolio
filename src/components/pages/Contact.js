import React from "react";

export default function Contact() {
  return (
    <div>
      <div className="contact">
        <h1 className="contactHead">Contact Me</h1>
        <br></br>
      
        <h1 className="contact">
          Resume
          <a
            className="col-md-4"
            href="https://drive.google.com/file/d/1s5ltQeJey-1JiQMR2FJriIWIrXyMjjQc/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <img 
            className="contact-icon"
              src="https://img.icons8.com/bubbles/100/000000/resume.png"
              alt="resume"
            />
          </a>
        </h1>
        <h1 className="contact">
          GitHub
          <a
            href="https://github.com/KeithMurph"
            target="_blank"
            rel="noreferrer"
          > 
            <img 
            className="contact-icon"
              src="https://img.icons8.com/bubbles/100/000000/github.png"
              alt="github"
            />
          </a>
      
        </h1>

        <h1 className="contact">
          LinkedIn
          <a
            className="col-md-4"
            href="https://www.linkedin.com/in/keithmurph/"
            target="_blank"
            rel="noreferrer"
          >
           
            <img 
            className="contact-icon"
              src="https://img.icons8.com/bubbles/100/000000/linkedin.png"
              alt="linkedIn"
            />
          </a>
     
        </h1>

        
   


        <h1 className="contact">
        
          <a
            className="col-md-4"
            href="mailto:keithmurphy.dev@gmail.com"
            rel="noreferrer"
          >
            <img 
              className="contact-icon"
              src="https://img.icons8.com/bubbles/100/000000/email--v1.png"
              alt="email"
            />
          </a>
    <p>
          keithmurphy.dev@gmail.com </p>
        </h1>
      </div>
      <div></div>
    </div>
  );
}
