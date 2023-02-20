import React from 'react'
import { useEffect, useState } from 'react';
import './index.css'

// COMPONENTS
import CardCharacter from '../../components/cardCharacter.component/CardCharacter';

const Characters = () => {
  const url = 'https://hp-api.onrender.com/api'
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const request = async () => {
      const response = await fetch(`${url}/characters`)
      console.log('response', response)
      const data = await response.json()


      console.log(data)

      setCharacters([...data])
    }

    request()
  }, [])
  return (
    <div className='characters'>
        <div className='card-character'>
          {
            characters.map((item) => (
              <CardCharacter key={item.id} character={item} />
            )) 
          }
        </div>
    </div>
  )
}

export default Characters