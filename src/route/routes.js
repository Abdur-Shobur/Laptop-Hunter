import { createBrowserRouter } from 'react-router-dom'
import MainLayoutRoutes from '../layout/MainLayout.routes'
import Home from '../page/home/Home'
import Login from '../page/Login/Login'
import Registration from '../page/Login/Registration'
import User from '../page/UserDashbord/User'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayoutRoutes />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/registration',
        element: <Registration />,
      },
      {
        path: '/profile',
        element: <User />,
      },
    ],
  },
])

export default routes
