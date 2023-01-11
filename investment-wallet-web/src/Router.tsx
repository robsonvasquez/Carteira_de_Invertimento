import {
  // createBrowserRouter,
  // createRoutesFromElements,
  // RouterProvider,
  Route,
  Routes,
} from "react-router-dom";

import Login from './pages/Login'
import User from './pages/User'
import Home from './pages/Home';
import Wallet from "./pages/Wallet";
import NewCount from './pages/NewCount';
import Profile from "./pages/Profile";
import NewActive from "./pages/NewActive";
import { ProtecteLayout } from "./components/ProtecteLayout";


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
      <Route path='/' element={<ProtecteLayout><Home/></ProtecteLayout>}/>
      <Route path='/wallet' element={<ProtecteLayout><Wallet/></ProtecteLayout>}/>
      <Route path='/user' element={<ProtecteLayout><User/></ProtecteLayout>}/>
      <Route path='/profile' element={<ProtecteLayout><Profile/></ProtecteLayout>}/>
      <Route path='/newactive' element={<ProtecteLayout><NewActive/></ProtecteLayout>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/newcount' element={<NewCount/>}/>
    </Routes>
  );
}