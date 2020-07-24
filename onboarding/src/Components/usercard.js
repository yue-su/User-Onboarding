import React from "react"
import styled from "styled-components"
import { Image, Button } from "semantic-ui-react"

const StyledUserCard = styled.div`
  text-align: center;
  width: 500px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 1rem;
  background-color: #f2f7f5;
  padding: 2rem;
  border-radius: 15px;

  &:hover {
    background-color: #faae2b;
    color: #f2f7f5;
    transform: translate(0, -5px);
    box-shadow: 3px 5px #004669;
    transition-duration: 500ms;
  }
`

const UserCard = (props) => {
  const { user, postUser } = props

  const clickHandler = (event) => {
    event.preventDefault()
    postUser(user)
  }

  return (
    <StyledUserCard className="card">
      <div className="card-image">
        <figure className="image is-128x128">
          <Image
            src={user.avatar}
            alt="Placeholder"
            className="is-rounded"
            circular
          />
        </figure>
      </div>
      <div className="card-content">
        <p className="title is-4">
          {user.first_name} {user.last_name}
        </p>
        <p className="subtitle is-6">{user.email}</p>
      </div>
      <Button onClick={clickHandler} color="yellow">
        Post
      </Button>
    </StyledUserCard>
  )
}

export default UserCard
