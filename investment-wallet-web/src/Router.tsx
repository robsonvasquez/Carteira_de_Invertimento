import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";


import Login from './pages/Login'
import User from './pages/User'
import Home from './pages/Home';
import NewCount from './pages/NewCount';
import Profile from "./pages/Profile";

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home/>,
//   },
//   {
//     path: 'user',
//     element: <User/>
//   },    
//   {
//     path: 'login',
//     element: <Login/>
//   }
// ]);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Home/>}>
//       <Route path='user' element={<User/>}/> 
//       <Route path='login' element={<Login/>}/> 
//     </Route>
//   )
// );

export default function Router(){
  return(
    // <RouterProvider router={router}/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/user' element={<User/>}/> 
      <Route path='/login' element={<Login/>}/>
      <Route path='/newcount' element={<NewCount/>}/> 
      <Route path='/profile' element={<Profile/>}/> 
    </Routes>
  );
}