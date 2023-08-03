import {Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import Novidades from './pages/Novidades'
import Roupas from './pages/Roupas'
import Biquinis from './pages/Biquinis'

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/novidades" element={<Novidades />}/>
      <Route path="/roupas" element={<Roupas />}/>
      <Route path="/biquinis" element={<Biquinis />}/>
    </Routes>
  )
}

export default Rotas
