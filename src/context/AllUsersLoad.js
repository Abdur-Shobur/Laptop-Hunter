import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

function AllUsersLoad(user) {
  const load_all_userss = () => {
    return axios.get(`http://localhost:5000/users-seller?user=${user}`)
  }
  const { data, isLoading, refetch } = useQuery(
    ['load_all_users', user],
    load_all_userss,
  )
  const all_users = data?.data
  return { all_users, isLoading, refetch }
}

export default AllUsersLoad
