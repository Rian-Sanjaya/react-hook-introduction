import React, { useState, useEffect } from 'react'

const UseEffect = () => {
  const [mouseX, setMouseX] = useState('0')
  const [mouseY, setMouseY] = useState('0')

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  })

  const handleMouseMove = (e) => {
    setMouseX(e.clientX)
    setMouseY(e.clientY)
  }

  return (
    <div>
      <h1>How to useEffect in React</h1>
      <p>Mouse X position: {mouseX}</p>
      <p>Mouse Y position: {mouseY}</p>
    </div>
  )
}

export default UseEffect