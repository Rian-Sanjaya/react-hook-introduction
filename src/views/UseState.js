import React, { useState } from 'react'

const UseState = () => {
  const [value, setValue] = useState('')

  // useState returns an array contains 2 element
  // first one the value, second one a function to update that value
  // useState can take an optional default value

  const handleInputChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div>
      <h1>How to useState in React</h1>
      <input style={{ border: '1px solid'}} type="text" value={value} onChange={handleInputChange} />
    </div>
  )
}

export default UseState