import React from 'react';

import './styles.scss';

type Props = {
  gender: string,
  email: string,
  dob: string,
  userName: string,
  picture: string,
  nat: string,
}

export const UserCard: React.FC<Props> = React.memo(
  ({
    gender,
    email,
    dob,
    userName,
    picture,
    nat,
  }) => {
    return (
      <div
        className="userCard"
      >
        <div className="userCard__img-container">
          <img
          className="userCard__img"
            src={picture}
            alt={userName}
          />
        </div>
  
      <h2 className="userCard__title">
      {userName}
      </h2>
  
        <section className="userCard__info">
          <div className="userCard__info-gender">
            {gender}
          </div>

          <div className="userCard__info-email">
            {email}
          </div>

          <div className="userCard__info-dob">
            {dob}
          </div>

          <div className="userCard__info-nat">
          {nat}
          </div>
        </section>
      </div>
    )
  }
)
