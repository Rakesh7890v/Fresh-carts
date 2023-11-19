import React from 'react'
import photo from './images/rakesh.jpeg';
import './App.css';

const About = () => {
  return (
    <div>
        <div className="about-section">
            <div className="left-photo">
                <img src={photo} alt='Creator-icon'></img>
            </div>
            <div className="right-about">
              <h2>Rakesh <span>V</span></h2>
              <p>I'm pursuing my B.Tech Artificial intelligence and Data science in kongunadu college of engineering and technology. I'm a web developer who loves making websites. My goal is to create sites that help people and make their lives simpler.</p>
            </div>
        </div>
    </div>
  )
}

export default About