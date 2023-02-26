import React, { useEffect, useState } from 'react'
// import { useFetch } from '../../components/hooks/UseFetch'

const Pokemons = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon'
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        const request = async () => {
            const response = await fetch(`${url}?limit=151`)
            const data = await response.json()
            // console.log(data)

            setPokemons([...data.results])
        }

        request()
    }, [])

    console.log(pokemons)

  return (
    <div className='pokemons'>
        <div className="card-pokemons">
            {
                pokemons.map((item) => (
                    <p>{item.name}</p>
                ))
            }
        </div>
    </div>
  )
}

export default Pokemons