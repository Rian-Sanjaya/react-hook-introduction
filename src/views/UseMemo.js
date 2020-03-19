import React, { useState, useMemo } from 'react'
import UserTable from '../components/UserTable'

const currentDate = new Date()

export default function UseMemo(props) {
  const [filter, setFilter] = useState('all')

  // useMemo functions expect 2 argument
  // first one is a callback function
  // second is an array, anytime value inside the array change, the function is run
  const formattedUsers = useMemo(() => props.users.map( user => {
    console.log('unnecessary work')
    return {
      ...user,
      status: user.expires > currentDate ? 'active' : 'expired'
    }
  }), [props.users])

  const filteredUsers = formattedUsers.filter( user => {
    if (filter === 'all') return true
    return user.status = filter
  })

  return (
    <UserTable users={filteredUsers} filter={filter} setFilter={setFilter} />
  )
}