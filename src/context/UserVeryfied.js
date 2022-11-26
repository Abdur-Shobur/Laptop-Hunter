import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
function UserVeryfied(e) {
  const all_data = {
    user_verified: true,
    user_id: e,
  }
  console.log(all_data)
  const UserVeryfied_byid = () => {
    return axios.put(`http://localhost:5000/users/veryfy`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(all_data),
    })
  }
  const { data, isLoading, refetch } = useQuery(
    ['UserVeryfied'],
    UserVeryfied_byid,
  )
  const users_data = data?.data
  return { users_data, isLoading, refetch }
}

export default UserVeryfied
