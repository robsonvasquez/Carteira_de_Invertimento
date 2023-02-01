import { BrowserRouter } from 'react-router-dom'
import './input.css'
import Router from './Router'
import { AuthProvider } from './contexts/AuthProvider'

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </AuthProvider>
  )
}
