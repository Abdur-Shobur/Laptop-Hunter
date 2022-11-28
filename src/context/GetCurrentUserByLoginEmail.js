import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useContext } from 'react'
import { UserSystem } from './FirebaseContext'

function GetCurrentUserByLoginEmail() {
  const { user } = useContext(UserSystem)
  const load_data = () => {
    return axios.get(
      `http://localhost:5000/user-get-by-email/v1?email=${user?.email}`,
    )
  }
  const { data, isLoading, refetch } = useQuery(
    ['GetCurrentUserByLoginEmail'],
    load_data,
    { refetchOnWindowFocus: false },
  )
  const current_db_user = data?.data
  return { current_db_user, isLoading, refetch }
}

export default GetCurrentUserByLoginEmail
