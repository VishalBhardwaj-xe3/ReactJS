import React from 'react'

const Nav2 = (props) => {
  return (
      <div className='Nav2'>
          <a href="">Home</a><a href="">About</a><a href="">Contact</a>
          <h2>{props.theme }</h2>
    </div>
  )
}

export default Nav2