import React, { createContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import app from '../auth/Firebase.init'
const auth = getAuth(app)
export const UserSystem = createContext()
function FirebaseContext({ children }) {
  const Google_Provider = new GoogleAuthProvider()
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  // create user by emal and password
  const create_user_email_and_password = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // sing in user by emal and password
  const signin_user_email_and_password = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  // sign in with google pop up
  const sign_in_google_pop_up = () => {
    setLoading(true)
    return signInWithPopup(auth, Google_Provider)
  }
  // log out
  const log_out = () => {
    setLoading(true)
    return signOut(auth)
  }

  useEffect(() => {
    onAuthStateChanged(auth, (u) => {
      setUser(u)
      setLoading(false)
    })
  }, [])
  const value = {
    user,
    create_user_email_and_password,
    loading,
    setLoading,
    signin_user_email_and_password,
    sign_in_google_pop_up,
    log_out,
  }
  return <UserSystem.Provider value={value}>{children}</UserSystem.Provider>
}

export default FirebaseContext
