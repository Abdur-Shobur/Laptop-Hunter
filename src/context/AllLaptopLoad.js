import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

function AllLaptopLoad(e) {
  const data_fetch = () => {
    return axios.get(`http://localhost:5000/laptops/email?email=${e}`)
  }
  const { data, isLoading, refetch } = useQuery(
    ['laptops-category', e],
    data_fetch,
    { refetchOnWindowFocus: false },
  )
  const laptops = data?.data

  return { laptops, data, isLoading, refetch }
}

export default AllLaptopLoad
