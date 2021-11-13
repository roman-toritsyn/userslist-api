
type Props = {
  gender: string,
  email: string,
  dob: string,
  userName: string,
  picture: string,
  nat: string,
}

export const UserCard: React.FC<Props> = ({
  gender,
  email,
  dob,
  userName,
  picture,
  nat,
}) => {
  return (
    <div
      className="card"
    >
      <figure>
        <img
          src={picture}
          alt={userName}
        />
      </figure>

    <p>
    {userName}
    </p>

      <span>
        {gender}
        <br/>
        {email}
        <br/>
        {dob}
        <br/>
        {nat}
      </span>
    </div>
  )
}
