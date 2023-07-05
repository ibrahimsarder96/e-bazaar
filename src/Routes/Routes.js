import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home/Home";
import Login from "../Pages/Home/Home/Login/Login";
import About from "../Pages/Home/Home/About/About";
import Vouchers from "../Pages/Home/Home/Vouchers/Vouchers";


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
    }
    ]
}
]);
export default router;