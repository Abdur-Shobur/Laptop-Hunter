import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

function AllUsers() {
  const data_fetch = () => {
    return axios.get('http://localhost:5000/users')
  }
  const { data, isLoading, refetch } = useQuery(['users'], data_fetch)
  const user_db = data?.data

  return { user_db, data, isLoading, refetch }
}

export default AllUsers