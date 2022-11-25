import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

function AllLaptopsLoad() {
  const load_all_laptop = () => {
    return axios.get(`http://localhost:5000/laptops`)
  }
  const { data, isLoading } = useQuery(['load_all_laptops'], load_all_laptop)
  const all_laptops = data?.data
  return { all_laptops, isLoading }
}

export default AllLaptopsLoad
