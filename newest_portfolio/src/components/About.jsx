import React from 'react'
import laBand from '../images/laBand.jpg'

const About = () => {
  return (
    <div className="media">
      <img className="align-self-start mr-3 profile" src={laBand} alt="laBand" />
      <div className="media-body">
        <h5 className="textFont">A Little About Me</h5>
        <p className="textFont">
          Hey there if you've found this page, you're in the right place. My name is Andrew Young and I am a fullstack web developer. I am 27 years old with a degree in business administration and organizational leadership. I am currently in the Vanderbilt coding bootcamp where the work in the projects section is what I have to showcase. As of right now this site is a work in progress, however I will be adding addtional features like my resume when it is fully functional.
        </p>
      </div>
    </div>
  );
}




export default About
