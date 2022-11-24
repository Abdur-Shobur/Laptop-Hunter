import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import FirebaseContext from './context/FirebaseContext'
import routes from './route/routes'
import 'react-toastify/dist/ReactToastify.css'
function App() {
  return (
    <FirebaseContext>
      <ToastContainer />
      <RouterProvider router={routes} />
    </FirebaseContext>
  )
}

export default App
