import { BrowserRouter, Routes, Route } from "react-router-dom"
import './ui/styles/navbar.css'

import Home from "./ui/pages/Home"
import Movies from "./ui/pages/Movies"
import Search from "./ui/pages/Search"
import Favorites from "./ui/pages/Favorites"
import Login from "./ui/pages/Login"
import Signup from "./ui/pages/Signup"
import MovieDetails from "./ui/pages/MovieDetails"

import Navbar from "./ui/components/Navbar"
import History from "./ui/pages/History"

function App() {

  return (

    <BrowserRouter>

      <Navbar/>

      <Routes>

        <Route path="/" element={<Home/>} />

        <Route path="/movies" element={<Movies/>} />

        <Route path="/search" element={<Search/>} />

        <Route path="/favorites" element={<Favorites/>} />

        <Route path="/history" element={<History/>}/>

        <Route path="/login" element={<Login/>} />

        <Route path="/signup" element={<Signup/>} />

        <Route path="/movie/:id" element={<MovieDetails/>} />

      </Routes>

    </BrowserRouter>

  )

}

export default App