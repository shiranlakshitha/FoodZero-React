
import Home from './pages/Home.tsx'
import { Route, Routes } from 'react-router-dom'
import Menu from './pages/Menu.tsx'
import Contact from './pages/Contact.tsx'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}


export default App