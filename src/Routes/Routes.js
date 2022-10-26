import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Home/Home";
import ErrorPage from "../ErrorPAge/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Blog from "../Pages/Blog/Blog";
import Courses from "../Pages/Courses/Courses";
import PrivateRoute from "../Pages/Private/PrivateRoute";



export const routes=createBrowserRouter([


    {
        path:"/",
        element:<Main></Main>,
        children:[

          {
            path:"/",
            element:<Home></Home>,
          },
          {
            path:"/login",
            element:<Login></Login>
          },
           {
             path:"/register",
             element:<Register></Register>
           },
          {
            path:"/blog",
            element:<PrivateRoute><Blog></Blog></PrivateRoute>
           },
           {
            path:"/courses",
            element:<Courses></Courses>,
            loader:()=>fetch("http://localhost:5000/courses")
           },
        
        
        ]

       
    },


    {
      path:"*",
      element:<ErrorPage></ErrorPage>
    }



])