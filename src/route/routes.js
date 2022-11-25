import { createBrowserRouter } from 'react-router-dom'
import AdminLayout from '../layout/AdminLayout'
import MainLayoutRoutes from '../layout/MainLayout.routes'
import SellerLayout from '../layout/SellerLayout'
import AddCategory from '../page/AdminDashbord/AddCategoryModal'
import AdminDashbord from '../page/AdminDashbord/AdminDashbord'
import AllCategory from '../page/AdminDashbord/AllCategory'
import AllUsers from '../page/AdminDashbord/AllUsers'
import Home from '../page/home/Home'
import Login from '../page/Login/Login'
import Registration from '../page/Login/Registration'
import NotFound from '../page/notFound/NotFound'
import YourLaptop from '../page/SellerDashboard/YourLaptop'
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
    path: '/seller-dahboard',
    element: <SellerLayout />,
    children: [
      {
        path: 'your-laptops',
        element: <YourLaptop />,
      },
    ],
  },
])

export default routes
