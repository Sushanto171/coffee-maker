import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route,  Routes } from 'react-router'
import MainlayOut from './components/MainlayOut.jsx'
import LogIn from './components/LogIn.jsx'
import Home from './components/Home.jsx'
import AddCoffee from './components/AddCoffee.jsx'
import UpdateCoffee from './components/UpdateCoffee.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter >
    <Routes >
      <Route path='/' element={ <MainlayOut />} >
      <Route path='/' element={<Home />} />
      <Route path='/login' element={ <LogIn />} />
      <Route path='/addCoffee' element={<AddCoffee />} />
      <Route path='/updateCoffee/:id' element={<UpdateCoffee />} />
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
