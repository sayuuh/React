import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// PAGES
import Character from './pages/character.page/Character'
import Characters from './pages/characters.page/Characters'
import House from './pages/house.page/House'
import Houses from './pages/houses.page/Houses'
import Spells from './pages/spells.page/Spells'

// TEMPLATE
import Header from './templates/header.template/Header'

const routes = () => {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/characters' element={<Characters />}/>
            <Route path='/spells' element={<Spells />}/>
            <Route path='/houses' element={<Houses />}/>
            <Route path='/character/:id' element={<Character />}/>
            <Route path='/house/:name' element={<House />}/>
        </Routes>
    </BrowserRouter> 
  )
}

export default routes