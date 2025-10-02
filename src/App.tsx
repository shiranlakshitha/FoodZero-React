
import Home from './pages/Home.tsx'
import { Route, Routes } from 'react-router-dom'
import Menu from './pages/Menu.tsx'
import Contact from './pages/Contact.tsx'
import Portfolio from './pages/Portfolio.tsx'
import Blogs from './pages/Blogs.tsx'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/blogs' element={<Blogs />} />
      </Routes>
    </>
  )
}


export default App