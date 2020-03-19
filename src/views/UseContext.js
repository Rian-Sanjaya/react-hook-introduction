import React, { useState, useContext } from 'react'

const CountContext = React.createContext()

const CountNumber = () => {
  const { count } = useContext(CountContext)

  return (
    <span style={{ color: 'hotpink' }}>{count}</span>
  )
}

const CountTitle = () => {
  return (
    <h1>
      The current count is <CountNumber />
    </h1>
  )
}

const UseContext = () => {
  const [count, setCount] = useState(0)

  const increment = (e) => {
    setCount(oldCount => oldCount + 1)
  }

  const reset = (e) => {
    setCount(0)
  }

  return (
    <CountContext.Provider value={{ count }}>
      <div>
        <h1>How to useContext in React</h1>
        <button style={{ border: '1px solid', padding: '5px 10px', marginRight: 10, borderRadius: 3}} onClick={increment}>Increase Count</button>
        <button style={{ border: '1px solid', padding: '5px 10px', marginRight: 10, borderRadius: 3}} onClick={reset}>Reset Count</button>
        <CountTitle />
      </div>
    </CountContext.Provider>
  )
}

export default UseContext