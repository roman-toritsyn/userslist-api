import { useEffect, useState } from "react";
import { request } from "../../api";
import { useLocalStorage } from "../../customHooks/useLocalStorage";
import { SelectedNats } from "../selectedNats";
import { UserCard } from "../userCard";

type User = {
  gender: string,
  email: string,
  dob: {
    date: string,
  }
  name: {
    first: string,
    last: string,
  },
  picture: {
    large: string,
  },
  nat: string,
}

export const UsersList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedGender, setSelectedGender] = useLocalStorage('selectedGender', '');
  const [selectedNationalities, setSelectedNationalities] = useLocalStorage('selectedNat', ['&nat=']);

  useEffect(() => {
    request()
      .then(responce => setUsers(responce.results))
  }, []);

  const getDate = (date:string) => {
    return (
      `${date.slice(0, 10)}`
    )
  }

  const nationalities = ['AU', 'BR', 'CA', 'CH', 'DE', 'DK', 'ES', 'FI', 'FR', 'GB', 'IE', 'IR', 'NO', 'NL', 'NZ', 'TR', 'US'];

  const selectNatOptions = nationalities.map(nat => (
    <option value={nat} key={nat}>
      {nat}
    </option>
  ));

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          if (selectedGender || selectedNationalities.length !== 1) {
            const filterUrl = selectedNationalities.join(',') + selectedGender;

            request(filterUrl)
              .then(responce => setUsers(responce.results));
          } else {
            request()
              .then(responce => setUsers(responce.results));
          }
        }}
      >
        <label htmlFor="gender-select">Select gender</label>
        <select
          name="gender"
          id="gender-select"
          value={selectedGender}
          onChange={(event) => setSelectedGender(event.target.value)}
        >
          <option value="">
            Male and Female
          </option>
          <option value="&amp;gender=male">
            Male
          </option>
          <option value="&amp;gender=female">
            Female
          </option>
        </select>

        <label htmlFor="nationality">Select nationality</label>
        <select
          name="nationality"
          id="nationality"
          size={5}
          onChange={event => {
            if (event.target.value === 'all-nationalities') {
              setSelectedNationalities(['&nat=']);
              return;
            }

            if (!selectedNationalities.includes(event.target.value)) {
              setSelectedNationalities([...selectedNationalities, event.target.value]);
            }
          }}
        >
          <option value="all-nationalities">
            All nationalities
          </option>
          {selectNatOptions}
        </select>

          <SelectedNats selectedNationalities={selectedNationalities}/>

        <button type="submit">
          FInd users
        </button>
      </form>

      <button
        onClick={() => {
          console.log(users);
          console.log(selectedGender);
          console.log(selectedNationalities);
        }
        }
      >
        show users log
      </button>

      {users.map(user => (
        <UserCard
          key={user.email}
          gender={user.gender}
          email={user.email}
          dob={getDate(user.dob.date)}
          userName={`${user.name.first} ${user.name.last}`}
          picture={user.picture.large}
          nat={user.nat}
        />
      ))}

    </div>
  )
}
