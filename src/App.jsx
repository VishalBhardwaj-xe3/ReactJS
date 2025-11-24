import React from 'react'
import Card from './component/Card'
import Navbar from './component/Navbar'

const App = () => {
  return (
    <div className="parent">
      <Card
        user="Voult"
        age={18}
        img="https://images.unsplash.com/photo-1757383670320-5012a9748a34?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card user="Vishal" age={21} />
    </div>
  );
}

export default App