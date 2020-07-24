import React from "react"
import styled from "styled-components"
import { Input, Button, Checkbox, Message } from "semantic-ui-react"

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Form = (props) => {
  const { values, submit, update, disabled, errors, cancel } = props

  const changeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value
    update(name, value)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    submit()
  }

  const cancelHandler = (event) => {
    event.preventDefault()
    cancel()
  }

  return (
    <StyledForm onSubmit={submitHandler}>
      <div className="field">
        <Message attached>
          Welcome onboard!
          {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
          <div>{errors.first_name}</div>
          <div>{errors.last_name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.terms}</div>
        </Message>
      </div>
      <div className="field">
        <label className="label">
          First Name
          <div className="control">
            <Input
              className="input"
              name="first_name"
              value={values.first_name}
              onChange={changeHandler}
              type="text"
              placeholder="First Name"
            />
          </div>
        </label>
      </div>
      <div className="field">
        <label className="label">
          Last Name
          <div className="control">
            <Input
              className="input"
              name="last_name"
              value={values.last_name}
              onChange={changeHandler}
              type="text"
              placeholder="Last Name"
            />
          </div>
        </label>
      </div>
      <div className="field">
        <label className="label">
          Email
          <div className="control">
            <Input
              className="input"
              name="email"
              value={values.email}
              onChange={changeHandler}
              type="text"
              placeholder="abc@abc.com"
            />
          </div>
        </label>
      </div>

      <div className="field">
        <label className="label">
          Password
          <div className="control">
            <Input
              className="input"
              name="password"
              value={values.password}
              onChange={changeHandler}
              type="password"
              placeholder="password"
            />
          </div>
        </label>
      </div>

      <div className="field">
        <div className="control">
          <label className="label">
            <Checkbox
              type="checkbox"
              name="terms"
              onChange={changeHandler}
              className="checkbox"
              checked={values.terms}
              value="terms"
            />
            I agree to the terms of service.
          </label>
        </div>
      </div>
      <div className="field is-grouped">
        <div className="control">
          <Button disabled={disabled}>Submit</Button>
        </div>
        <div className="control">
          <Button onClick={cancelHandler}>Cancel</Button>
        </div>
      </div>
    </StyledForm>
  )
}

export default Form
