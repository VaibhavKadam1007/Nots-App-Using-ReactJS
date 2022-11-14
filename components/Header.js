import React from 'react'

const Header = ({handledarkmode}) => {
  return (
    <div className='header'>
     <h1>notes</h1>
     <button 
      onClick={()=>
         handledarkmode(
             (previousDarkMode)=>!previousDarkMode
         )
    }
      className='save'>toggle</button>
    </div>
  )
}

export default Header