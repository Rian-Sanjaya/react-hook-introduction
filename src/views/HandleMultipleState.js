import React, { useState } from 'react'

const HandleMultipleState = () => {
  const [state, setCounter] = useState({counterA: 0, counterB: 0})

  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <button 
          style={{ border: "1px solid", padding: "10px 20px", marginRight: 20}}
          onClick={() => setCounter({...state, counterA: state.counterA + 1})}
        >
          Increment A
        </button>
        <button 
          style={{ border: "1px solid", padding: "10px 20px" }}
          onClick={() => setCounter({...state, counterB: state.counterB + 1})}
        >
          Increment B
        </button>
      </div>
      <h1>Counter A: {state.counterA}</h1>
      <h1>Counter B: {state.counterB}</h1>
    </div>
  )
}

export default HandleMultipleState