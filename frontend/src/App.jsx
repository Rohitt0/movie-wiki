import './css/App.css'
import Fav from './pages/fav'
import Home from './pages/Home'
import { Routes, Route } from "react-router-dom"
import { MovieProvider } from "./contexts/MovieContext"
import NavBar from "./components/NavBar"


function App() {
  return (
    <MovieProvider>

      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Fav />} />
        </Routes>
      </main>

    </MovieProvider>
  )
}

export default App
