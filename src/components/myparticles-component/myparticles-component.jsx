import React from 'react'
import Particles from 'react-particles-js' 
import './myparticles-component.css'
function MyParticles() {
    return (
        <div>
            <Particles className="particles"
          params={{
                  "particles": {
                  "number": {
                  "value": 100
                  },
                  "size": {
                  "value": 3
                  } 
                  },
                  "interactivity": {
                  "events": {
                  "onhover": {
                  "enable": false,
                  "mode": "repulse"
                  }
                  }
                  }
                  }
                }
            width= "auto"
            height="100vh" 
          /> 
        </div>
    )
}
 
export default MyParticles
