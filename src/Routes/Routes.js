import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home/Home";
import Login from "../Pages/Home/Home/Login/Login";
import About from "../Pages/Home/Home/About/About";
import Vouchers from "../Pages/Home/Home/Vouchers/Vouchers";
import SignUp from "../Pages/Home/Home/Login/SignUp";
import ProductDetail from "../Pages/Home/Home/ProductDetail";
import Cart from "../Pages/Home/Home/Cart/Cart";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
      element: <Home></Home>,
    },
      {
        path: '/about',
      element: <About></About>,
    },
      {
        path: '/all gift vouchers',
      element: <Vouchers></Vouchers>,
    },
      {
        path: '/cart',
      element: <Cart></Cart>,
    },
      {
        path: '/login',
      element: <Login></Login>,
    },
    {
      path: '/signup',
      element: <SignUp></SignUp>
    },
    {
      path:"/product/:productId",
      element: <ProductDetail></ProductDetail>
    },
    ]
}
]);
export default router;