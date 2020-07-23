import React, { useState, useEffect } from "react"
import axios from "axios"
import "./App.css"
import UserCard from "./Components/usercard"
import Form from "./Components/form"
import styled from "styled-components"
import { v4 as uuid } from "uuid"
import formSchema from "../src/validation/formSchema"
import * as yup from "yup"

const StyledApp = styled.div`
  background-color: #f2f7f5;
  color: #475d5b;

  h1 {
    padding: 2rem;
  }

  .form {
    background-color: #f2f7f5;
    min-height: 400px;
    width: 500px;
    margin: 1rem auto;
    border: 3px solid #00473e;
    border-radius: 15px;
    padding: 1rem;
  }

  .section {
    background-color: #00473e;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
const URL = "https://reqres.in/api/users"

const initialValue = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  terms: false,
}

const initialFormErrors = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  terms: "",
}

const initialDisabled = true
const initialUsers = []

function App() {
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialValue)
  const [randomUser, setRandomUser] = useState(null)
  const [disabled, setDisabled] = useState(initialDisabled)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  const getUsers = () => {
    axios.get(URL).then((res) => setUsers(res.data.data))
  }

  const update = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        })
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        })
      })

    const updatedValue = {
      ...formValues,
      [name]: value,
    }

    setFormValues(updatedValue)
  }

  const submit = () => {
    const newUser = {
      id: uuid(),
      avatar: randomUser.picture.large,
      first_name: formValues.first_name.trim(),
      last_name: formValues.last_name.trim(),
      email: formValues.email.trim(),
    }
    setUsers([newUser, ...users])
    setFormValues(initialValue)
  }

  const cancel = () => {
    setFormValues(initialValue)
    setFormErrors(initialFormErrors)
  }

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/")
      .then((res) => setRandomUser(res.data.results[0]))

    formSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid)
    })
  }, [formValues])

  return (
    <StyledApp className="App">
      <h1 className="title is-1">User Onboarding</h1>
      <div className="form">
        <Form
          values={formValues}
          update={update}
          submit={submit}
          disabled={disabled}
          errors={formErrors}
          cancel={cancel}
        />
      </div>
      <div className="section">
        {users.map((item) => {
          return <UserCard user={item} key={item.id} />
        })}
      </div>
    </StyledApp>
  )
}

export default App
