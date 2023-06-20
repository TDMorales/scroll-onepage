import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} exact />
      <Route path='/signin' element={<SignIn />} exact />
    </Routes>
  )
}

export default App
