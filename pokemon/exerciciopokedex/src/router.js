import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

// PAGES 
import Header from './components/header.component/Header'
import Pokemons from './pages/page.pokemons/Pokemons'


const Router = () => {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' />
            <Route path='/pokemons' element={<Pokemons />}/> 
        </Routes>
    </BrowserRouter>
  )
}

export default Router