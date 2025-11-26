import React, { useState } from 'react'

const App = () => {

  const [num, setnum] = useState({user:'Vishal', age:20})

  const btnClicked = () => {
    // const newNum = {...num};
    // newNum.user = 'Aman'
    // setnum(newNum)

    setnum(prev=>({...prev,age:50}))
  }

  return (
    <div>
      <h1>{num.user},{ num.age}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App