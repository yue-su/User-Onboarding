import React from "react"
import styled from "styled-components"

const StyledUserCard = styled.div`
  text-align: center;
  width: 500px;
  display: flex;
  margin: 1rem;
  background-color: #f2f7f5;
  padding: 2rem;
  border-radius: 15px;

  &:hover {
    background-color: #faae2b;
    color: #f2f7f5;
  }
`

const UserCard = (props) => {
  const { user } = props

  return (
    <StyledUserCard className="card">
      <div className="card-image">
        <figure className="image is-128x128">
          <img src={user.avatar} alt="Placeholder" className="is-rounded" />
        </figure>
      </div>
      <div className="card-content">
        <p className="title is-4">
          {user.first_name} {user.last_name}
        </p>
        <p className="subtitle is-6">{user.email}</p>
      </div>
    </StyledUserCard>
  )
}

export default UserCard
