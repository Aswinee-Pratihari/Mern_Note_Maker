import React from 'react'
import './Landing.css'
const Landing = () => {
  return (
    <div className='main'>
      <div className="intro-text">
        <div>
          <h1 className='title'>Welcome to note-maker</h1>
          <p className='subtitle'>Lets make some notes</p>
        </div>
        <div className="buttonContainer">

          <button className="landingbutton btn btn-primary">
            Login
          </button>
          <button
            variant="outline-primary "
            size="lg"
            className="landingbutton btn btn-outline-primary"
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  )
}

export default Landing
