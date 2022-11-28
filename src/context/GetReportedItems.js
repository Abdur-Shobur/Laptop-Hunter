import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

function GetReportedItems() {
  const load_reported_laptop = () => {
    return axios.get(`http://localhost:5000/reported-laptop/v1`)
  }
  const { data, isLoading, refetch } = useQuery(
    ['GetReportedItems'],
    load_reported_laptop,
    { refetchOnWindowFocus: false },
  )
  const laptops = data?.data
  return { laptops, isLoading, refetch }
}

export default GetReportedItems
