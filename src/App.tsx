
import Navbar from './components/Navbar'
import Home from './pages/Home.tsx'
import { Route, Routes } from 'react-router-dom'
import Menu from './pages/Menu.tsx'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/menu' element={<Menu />} />
      </Routes>
    </>
  )
}


export default App