import React from 'react'
import { useState } from 'react';

const App = () => {

  const [Counter, setCounter] = useState(0)

  function increase() {
    setCounter(Counter + 1);
  }
  function decrease() {
    setCounter(Counter - 1)
  }
  function increaseby() {
    setCounter(Counter + 5)
  }

  return (
    <div>
      <h1>{Counter }</h1>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={increaseby}>increase 5</button>
    </div>
  )
}

export default App