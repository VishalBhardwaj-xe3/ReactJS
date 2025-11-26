import React from 'react'
import { useState } from 'react'

const App = () => {

  const [title, settitle] = useState('');


  const submitHandler = (elem) => {
    elem.preventDefault()
    console.log("fs");

    settitle('')
  }

  return (
    <div>
      <form onSubmit={(elem) => {
        submitHandler(elem)
      }}>
        <input type="text" placeholder='enter your name'
          value={title}
          onChange={(e) => {
            settitle(e.target.value)
        }}
        />
        <button>Submit</button>
    </form>
    </div>
  )
}

export default App