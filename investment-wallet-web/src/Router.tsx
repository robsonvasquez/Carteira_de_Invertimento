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
    </Routes>
  );
}