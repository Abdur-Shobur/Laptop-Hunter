import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

function AllLaptopLoad() {
  const data_fetch = () => {
    return axios.get('http://localhost:5000/laptops')
  }
  const { data, isLoading, refetch } = useQuery(
    ['laptops-category'],
    data_fetch,
    { refetchOnWindowFocus: false },
  )
  const laptops = data?.data

  return { laptops, data, isLoading, refetch }
}

export default AllLaptopLoad
