import React from 'react'
import { Link } from 'react-router-dom'

const Lista = ({nome, id}) => {
  return (
    <div>
        <h3>{nome}</h3>
        <h3>{id}</h3>
        <Link to={`/aluno/${id}`}>Ver mais</Link>
    </div>
  )
}

export default Lista