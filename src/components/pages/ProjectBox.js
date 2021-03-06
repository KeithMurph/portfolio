import React from "react";

export default function Portfolio(props) {
  return (
    <div className="projectCard">
      <h1 id="nameProject" className="card-title-text-center">
        {props.name}
      </h1>

      <div className="img-container">
        <img alt={props.name} src={props.image} className="img-container"/>
          
      </div>
      
     
        <h1 className="tech-text-center"> {props.tech} </h1>

        <h1 className="description">{props.description}</h1>
        <div className="icons-container">
          <a href={props.github} target="_blank" rel="noreferrer">
            <img
            
              className="project-icon"
              src="https://img.icons8.com/bubbles/100/000000/github.png"
              alt="GitHub"
              
              
            />
          </a>

          <a href={props.deploy} target="_blank" rel="noreferrer">
            <img
          
              className="project-icon"
              src="https://img.icons8.com/clouds/100/000000/domain.png"
              alt="url"
             
            />
          </a>
        </div>
     
    </div>
  );
}
