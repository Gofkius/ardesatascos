import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import AvisoLegal from './components/AvisoLegal'
import PoliticaCookies from './components/PoliticaCookies'
import PoliticaPrivacidad from './components/PoliticaPrivacidad'
import NotFound from './components/NotFound'
import './index.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/aviso-legal' element={<AvisoLegal />} />
      <Route path='/politica-de-cookies' element={<PoliticaCookies />} />
      <Route path='/politica-de-privacidad' element={<PoliticaPrivacidad />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
