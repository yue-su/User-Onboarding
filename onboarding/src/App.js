import React, { useState, useEffect } from "react"
import axios from "axios"
import "./App.css"
import UserCard from "./Components/usercard"

function App() {
  const URL = "https://reqres.in/api/users"

  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get(URL).then((res) => setUsers(res.data.data))
  }, [])

  console.log(users)

  return (
    <div className="App">
      <h1 className="title is-1">User Onboarding</h1>
      <div className="section">
        {users.map((item) => {
          return <UserCard user={item} />
        })}
      </div>
    </div>
  )
}

export default App
