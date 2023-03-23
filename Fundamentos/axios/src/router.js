import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Postagem from './pages/Postagem'
import Profile from './pages/Profile'

const Router = () => {
    const user = {
        id: 10101989,
        username: 'sayuuh',
        avatar: 'https://i.pinimg.com/280x280_RS/48/11/eb/4811eb4cb322fb22ad23a4d4da98cf60.jpg',
        auth: '^lw%V2voS5HjeLfEghE2YWw4U$cv0pVj2Pd8LzFQLilkpNt^sQ'
    }

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home user={user} />}/>
            <Route path='/profile/:userID' element={<Profile user={user} />}/>
            <Route path='/post/:id' element={<Postagem user={user} />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router