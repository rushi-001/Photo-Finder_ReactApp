import React from 'react'
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container"></div>
      <div className="title">
        React Photo seach App
      </div>
    </>
  )
}

export default App
