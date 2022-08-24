import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cash from './views/Cash'
import Game from './views/Game'
import Home from './views/Home'
import Landing from './views/Landing'
import Layout from './views/Layout'
import Login from './views/Login'
import NotFound from './views/NotFound'
import Report from './views/Report'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/point' element={<Layout />}>
          <Route index element={<Login />} />
          <Route path='cash/:type' element={<Cash />} />
          <Route path='home' element={<Home />} />
          <Route path='report' element={<Report />} />
          <Route path='game' element={<Game />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
