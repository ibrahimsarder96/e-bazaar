import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home/Home";
import Login from "../Pages/Home/Home/Login/Login";
import About from "../Pages/Home/Home/About/About";
import Vouchers from "../Pages/Home/Home/Vouchers/Vouchers";
import SignUp from "../Pages/Home/Home/Login/SignUp";
import ProductDetail from "../Pages/Home/Home/ProductDetail";

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
        path: '/login',
      element: <Login></Login>,
    },
    {
      path: '/signup',
      element: <SignUp></SignUp>
    },
    // {
    //   path:"/product/:productId",
    //   element: <RequireAuth>
    //     <ProductDetail></ProductDetail>
    //   </RequireAuth>
    // },
    ]
}
]);
export default router;