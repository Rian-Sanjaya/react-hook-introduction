import React, { useState } from 'react'

const useInput = (initialValue) => {
  const [name, changeName] = useState(initialValue)

  const changeNameWithInput = (e) => {
    changeName(e.target.value)
  }

  return [name, changeNameWithInput]
}

const Name = () => {
  const [name, changeName] = useInput('')
  const [age, changeAge] = useInput('')

  return (
    <div>
      <p>What's your name?</p>
      <input value={name} onChange={changeName} />
      <p>{name && `Hello, ${name}!`}</p>
      <br/>
      <p>Your age?</p>
      <input value={age} onChange={changeAge} />
      <p>{age && `Age: ${age}`}</p>
    </div>
  )
}

const CustomHook2 = () => {
  return (
    <div>
      <h1>Custom Hook 2</h1>
      <Name />
    </div>
  )
}

export default CustomHook2