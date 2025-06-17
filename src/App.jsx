import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import Events from './pages/Events'
import Competitions from './pages/Competitions'
import Schedule from './pages/Schedule'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import ErrorPage from './pages/Errorpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/events' element={<Events/>}/>
        <Route path='/competitions' element={<Competitions/>}/>
        <Route path='/schedule' element={<Schedule/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        
        </Route>
        <Route path='/*' element={<ErrorPage/>}/>
      </Routes>
    </>
  )
}

export default App
