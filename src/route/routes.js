import { createBrowserRouter } from 'react-router-dom'
import AdminLayout from '../layout/AdminLayout'
import BuyerLayout from '../layout/BuyerLayout'
import MainLayoutRoutes from '../layout/MainLayout.routes'
import SellerLayout from '../layout/SellerLayout'
import AllCategory from '../page/AdminDashbord/AllCategory'
import AllLaptops from '../page/AdminDashbord/AllLaptops'
import AllSellers from '../page/AdminDashbord/AllSellers'
import AllUsers from '../page/AdminDashbord/AllUsers'
import RepotedItems from '../page/AdminDashbord/RepotedItems'
import MyOrders from '../page/BuyerDashboard/MyOrders'
import MyWishList from '../page/BuyerDashboard/MyWishList'
import Home from '../page/home/Home'
import Login from '../page/Login/Login'
import Registration from '../page/Login/Registration'
import NotFound from '../page/notFound/NotFound'
import ProductDetails from '../page/ProductDetails/ProductDetails'
import AddLaptop from '../page/SellerDashboard/AddLaptop'
import MyBuyer from '../page/SellerDashboard/MyBuyer'
import YourLaptop from '../page/SellerDashboard/YourLaptop'
import ShopPage from '../page/shopPage/ShopPage'
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
        path: '/shop',
        element: <ShopPage />,
      },
      {
        path: '/shop/category-details/:_id',
        element: <ProductDetails />,
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/product-category-by-id/v1/${params._id}`,
          ),
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
      {
        path: 'all-sellers',
        element: <AllSellers />,
      },
      {
        path: 'all-laptops',
        element: <AllLaptops />,
      },
      {
        path: 'reported-items',
        element: <RepotedItems />,
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
      {
        path: 'add-laptop',
        element: <AddLaptop />,
      },
      {
        path: 'my-buyer',
        element: <MyBuyer />,
      },
    ],
  },
  {
    path: '/buyer-dashboard',
    element: <BuyerLayout />,
    children: [
      {
        path: 'my-orders',
        element: <MyOrders />,
      },
      {
        path: 'my-wishlists',
        element: <MyWishList />,
      },
    ],
  },
])

export default routes
