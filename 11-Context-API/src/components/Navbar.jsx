import React from 'react'
import Nav2 from './nav2'
import { useContext } from 'react'
import { themeDataContext } from '../Context/ThemeContext'

const Navbar = (props) => {

    const data = useContext(themeDataContext)

    console.log(data


        
    );
    

  return (
      <div className='nav'>
          <h2>vishal</h2>
          <Nav2 theme={props.theme } />
    </div>
  )
}

export default Navbar