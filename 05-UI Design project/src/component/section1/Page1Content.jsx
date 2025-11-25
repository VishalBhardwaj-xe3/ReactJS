import React from 'react'
import LeftText from './LeftText'
import RightContent from './RightContent'

const Page1Content = (props) => {
     
  return (
      <div className='py-10 pt-10 flex justify-between items-center gap-10 h-[90vh] px-18'>
          <LeftText />
          <RightContent users={props.users } />
    </div>
  )
}

export default Page1Content