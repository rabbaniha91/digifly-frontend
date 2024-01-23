import { Route, Routes } from 'react-router-dom'
import { register } from 'swiper/element/bundle';
import Home from './pages/Home'
import './App.css'
import Login from './pages/Login';
import Products from './pages/Products';


register();

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/products/:main_category/:sub_category?' element={<Products />} />
    </Routes>
  )
}

export default App
