import { Route, Routes } from 'react-router-dom'
import { register } from 'swiper/element/bundle';
import Home from './pages/Home'
import './App.css'
import Login from './pages/Login';

register();

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default App
