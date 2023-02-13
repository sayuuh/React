import React from 'react'
import Lista from '../../components/lista.component/Lista'

function Alunos({alunos}) {
  return (
    <main>
        {
            alunos.map((aluno) => (
                <Lista key={aluno.id} nome={aluno.nome} id={aluno.id} />
            ))
        }
    </main>
  )
}

export default Alunos