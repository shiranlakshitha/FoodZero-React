
import Home from './pages/Home.tsx'
import { Route, Routes } from 'react-router-dom'
import Menu from './pages/Menu.tsx'
import Contact from './pages/Contact.tsx'
import Portfolio from './pages/Portfolio.tsx'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
    </>
  )
}


export default App