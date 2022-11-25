import { useEffect, useState } from 'react'
function UsersLoad(email) {
  const [users_data, set_users_data] = useState('')
  useEffect(() => {
    fetch(`http://localhost:5000/users-profile/${email}`)
      .then((res) => res.json())
      .then((data) => set_users_data(data[0]))
  }, [email])

  return { users_data }
}

export default UsersLoad
