import React, { useEffect, useState } from 'react'

// Components
import Apresentacao from './Apresentacao'
import Lista from './Lista'


const Index = () => {
  const [cadastros, setCadastros] = useState([])
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')

    // use state
    // let nome = 'Sayumi'
    // const [n, setN] = useState(true)
    // const [contador, setContador] = useState(0)

    // useEffect(() => {
    //   setN(false)
    // }, [])

    // useEffect(() => {
    //   console.log('useEffect')
    //   console.log(contador)
    //   console.log('--------------------') 
    // }, [contador])

    const add = (senha) => {
        const body = {
          id: Math.random(),
          nome,
          email,
          senha
        }
        setCadastros([body, ...cadastros])
    }

    const remover = (id) => {
        const array = cadastros.filter((item) => item.id !== id)
        setCadastros([...array])
    }

  return (
    <div>
        <h2>Revisão</h2>
        <Apresentacao nome={setNome} email={setEmail} evento={add}/>
        <ul>
            {
              cadastros.map((item) => (
                <Lista key={item.id} id={item.id} nome={item.nome} email={item.email} senha={item.senha} evento={remover}/>
              ))
            }
        </ul>



        {/* <button onClick={() => setN(!n)}>
          {
            n
            ?
              'Verdadeiro'
            :
              'Falso'
          }
        </button>
        <button onClick={() => setContador(contador + 1)}>Contador</button> */}
    </div>
  )
}

export default Index