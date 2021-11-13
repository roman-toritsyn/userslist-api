const BASE_URL = 'https://randomuser.me/api/?results=15&inc=gender,email,dob,name,picture,nat';

export const request = (urlForFilter = '') => {
  return (
    fetch(`${BASE_URL}${urlForFilter}`)
      .then(responce => {
        if (!responce.ok) {
          throw new Error(`${responce.status} --- ${responce.statusText}`)
        }

        return responce.json();
      }))
};
