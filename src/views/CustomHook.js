import React, { useState } from 'react'

const useInput = (defaultValue) => {
  const [value, setValue] = useState(defaultValue)

  function onChange(e) {
    setValue(e.target.value)
  }

  return {
    value,
    onChange
  }
}

const CustomHook = () => {
  const name = useInput('')
  const age = useInput('')
  const email = useInput('')

  return (
    <div>
      <h1>How to create a custom hook in React</h1>
      
      <label>
        <span>Name</span>
        {/* <input value={name.value} onChange={name.onChange} /> */}
        <input {...name} />
      </label>

      <label>
        <span>Age</span>
        {/* <input value={age.value} onChange={age.onChange} /> */}
        <input {...age} />
      </label>

      <label>
        <span>Email Address</span>
        {/* <input value={email.value} onChange={email.onChange} /> */}
        <input {...email} />
      </label>
    </div>
  )
}

export default CustomHook