import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useEffect, useState } from 'react'
function UsersLoad(email) {
  const user_data_by_emails = () => {
    return axios.get(`http://localhost:5000/users-profile/${email}`)
  }
  const { data, isLoading, refetch } = useQuery(
    ['user_data_by_email', email],
    user_data_by_emails,
  )
  const users_data = data?.data[0]
  return { users_data, isLoading, refetch }
}

export default UsersLoad
