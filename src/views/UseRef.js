import React, { useState, useEffect, useRef } from 'react'

const UseRef = () => {
  const [value, setValue] = useState('')
  const messageRef = useRef()

  useEffect(() => {
    const boundingBox = messageRef.current.getBoundingClientRect()
    console.log(boundingBox.width)
  })

  const handleInputChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div>
      <h1>How to useRef in React</h1>
      <input type="text" value={value} onChange={handleInputChange} />
      <div>
        <span ref={messageRef}>{value}</span>
      </div>
    </div>
  )
}

export default UseRef