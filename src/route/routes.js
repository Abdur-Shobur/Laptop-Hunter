import { createBrowserRouter } from 'react-router-dom'
import AdminLayout from '../layout/AdminLayout'
import MainLayoutRoutes from '../layout/MainLayout.routes'
import AddCategory from '../page/AdminDashbord/AddCategory'
import AdminDashbord from '../page/AdminDashbord/AdminDashbord'
import AllCategory from '../page/AdminDashbord/AllCategory'
import AllUsers from '../page/AdminDashbord/AllUsers'
import Home from '../page/home/Home'
import Login from '../page/Login/Login'
import Registration from '../page/Login/Registration'
import NotFound from '../page/notFound/NotFound'
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
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
  {
    path: '/admin-dashboard',
    element: <AdminLayout />,
    children: [
      {
        path: '/admin-dashboard',
        element: <AdminDashbord />,
        children: [
          {
            path: 'all-category',
            element: <AllCategory />,
          },
          {
            path: 'all-users',
            element: <AllUsers />,
          },
        ],
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])

export default routes
