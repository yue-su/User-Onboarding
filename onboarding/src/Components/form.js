import React from "react"

const Form = (props) => {
  const { values, submit, update } = props

  const changeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value
    update(name, value)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    submit()
  }

  return (
    <form className="field" onSubmit={submitHandler}>
      <label className="label">
        First Name
        <div className="control">
          <input
            className="input"
            name="first_name"
            value={values.first_name}
            onChange={changeHandler}
            type="text"
            placeholder="First Name"
          />
        </div>
      </label>
      <label className="label">
        Last Name
        <div className="control">
          <input
            className="input"
            name="last_name"
            value={values.last_name}
            onChange={changeHandler}
            type="text"
            placeholder="Last Name"
          />
        </div>
      </label>
      <label className="label">
        Email
        <div className="control">
          <input
            className="input"
            name="email"
            value={values.email}
            onChange={changeHandler}
            type="email"
            placeholder="abc@abc.com"
          />
        </div>
      </label>
    </form>
  )
}

export default Form
