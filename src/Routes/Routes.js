import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Home/Home";
import ErrorPage from "../ErrorPAge/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Blog from "../Pages/Blog/Blog";
import Courses from "../Pages/Courses/Courses";
import CourseDetails from "../Pages/Courses/CourseDetails/CourseDetails";
import PrivateRoute from "../Pages/Private/PrivateRoute";
import FAQ from "../Pages/FAQ/FAQ";
import GetPremium from "../Pages/Courses/GetPremiumPage/GetPremium";



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
            path:"/faq",
            element:<FAQ></FAQ>
           },
          {
            path:"/blog",
            element:<Blog></Blog>
           },
           {
            path:"/courses",
            element:<Courses></Courses>,
            loader:()=>fetch("https://alpha-math-9vmzx3qsk-mohammadibrahim2.vercel.app/courses")
           },
           {
            path:"/course-details/:id",
            element:<CourseDetails></CourseDetails>,
            loader:({params})=>fetch(`https://alpha-math-9vmzx3qsk-mohammadibrahim2.vercel.app/courseDetails/${params.id}`)
           },
           {
            path:"/getPremium/:id",
            element:<PrivateRoute><GetPremium></GetPremium></PrivateRoute>,
            loader:({params})=>fetch(`https://alpha-math-9vmzx3qsk-mohammadibrahim2.vercel.app/Topic/${params.id}`)
           
           }
           
        
        
        
        ]

       
    },


    {
      path:"*",
      element:<ErrorPage></ErrorPage>
    }



])