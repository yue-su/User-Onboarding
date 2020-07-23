import React, { useState, useEffect } from "react"
import axios from "axios"
import "./App.css"
import UserCard from "./Components/usercard"
import Form from "./Components/form"
import styled from "styled-components"
import { v4 as uuid } from "uuid"

const StyledApp = styled.div`
  background-color: #f2f7f5;

  .form {
    background-color: #f2f7f5;
    height: 200px;
  }

  .section {
    background-color: #00473e;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

function App() {
  const URL = "https://reqres.in/api/users"

  const initialValue = {
    first_name: "",
    last_name: "",
    email: "",
  }

  const [users, setUsers] = useState([])
  const [formValues, setFormValues] = useState(initialValue)

  const update = (name, value) => {
    const updatedValue = {
      ...formValues,
      [name]: value,
    }
    setFormValues(updatedValue)
  }

  const submit = () => {
    const newUser = {
      id: uuid(),
      first_name: formValues.first_name.trim(),
      last_name: formValues.last_name.trim(),
      email: formValues.email.trim(),
    }
    setUsers([newUser, ...users])
    setFormValues(initialValue)
  }

  useEffect(() => {
    axios.get(URL).then((res) => setUsers(res.data.data))
  }, [])

  return (
    <StyledApp className="App">
      <h1 className="title is-1">User Onboarding</h1>
      <div className="form">
        <Form values={formValues} update={update} submit={submit} />
      </div>
      <div className="section">
        {users.map((item) => {
          return <UserCard user={item} />
        })}
      </div>
    </StyledApp>
  )
}

export default App
