import React from 'react'

const MainScreen = (props) => {
  return (
    <div className='mainback'>


          <div className="page">
            {
              <>
                <h1 className="heading">{props.title}</h1>
                <hr />
              </>
            }
            {props.children}
          </div>
        
    </div>
  )
}

export default MainScreen
