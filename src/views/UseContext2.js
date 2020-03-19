import React, { useState, useContext } from 'react'

const UserContext = React.createContext()

const UserDetail = () => {
  const { user, setUser } = useContext(UserContext)

  return (
    <>
      <p>
        Hello {user}
        <button onClick={() => setUser(null)}>Log out</button>
      </p>
    </>
  )
}

const Login = () => {
  const { user, setUser } = useContext(UserContext)
  const [ loginUser, setLoginUser ] = useState('')

  return (
    <div>
      <input value={loginUser} onChange={(e) => setLoginUser(e.target.value)} />
      <button onClick={() => setUser(loginUser)}>Login</button>
    </div>
  )
}

const UseContext2 = () => {
  const [user, setUser] = useState('')

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div>
        <h1>Use Context 2</h1>
        <div>
          {user ? <UserDetail /> : <Login />}
        </div>
      </div>
    </UserContext.Provider>
  )
}

export default UseContext2