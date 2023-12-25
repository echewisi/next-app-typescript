import React from 'react'
// rafce

interface User{
  id: number;
  name: string
}

const UsersPage = async () => {
  const res= await fetch("https://jsonplaceholder.typicode.com/users", {next:{revalidate:10}})
  //use "cache: 'no-store'" for cache if you have data that changes frequently(this disables caching)
  const users: User[]= await res.json()
  return (
    <div> 
      <h1>Users:</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map(users=> <li key={users.id}> {users.name}</li>)}
      </ul>
    </div>
    
  )
}

export default UsersPage