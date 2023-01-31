import Nome from "./Nome"
import {useEffect, useState} from 'react'
import Escola from "./Escola"
import Produto from "./Produto"
import Children from "./Children"
import Button from "./Button"

const alunos = [
    {
      id:1,
      nome: 'Ana Silva',
      situacao: 'aprovado'
    },
    {
      id:2,
      nome: 'Bia Miranda',
      situacao: 'aprovado'
    },
    {
      id:3,
      nome: 'Bruno Oliveira',
      situacao: 'reprovado'
    },
    {
      id:4,
      nome: 'Caio Junior',
      situacao: 'aprovado'
    },
    {
      id:5,
      nome: 'Camila Garcia',
      situacao: 'aprovado'
    },
    {
      id:6,
      nome: 'Daniela Carla',
      situacao: 'reprovado'
    },
  ]

const produtos = [
    {
      id: 1,
      nome: 'Arroz',
      preco: 18.50
    },
    {
      id: 2,
      nome: 'Feijão',
      preco: 7.90
    },
    {
      id: 3,
      nome: 'Macarrão',
      preco: 3.90
    },
    {
      id: 4,
      nome: 'Farinha',
      preco: 2.30
    },
  ]

const Props = () => {
    const [idade, setIdade] = useState(33)
    const [turma, setTurma] = useState(1001)
    const [status, setStatus] = useState(false)
    const [lista, setLista] = useState([])

    useEffect(() => {
        setLista([...produtos])
    }, [])

    const removerProduto = (id) => {
        let array = lista.filter((prod) => prod.id !== id)
        setLista([...array])
    }

    return(
        <div>
            <h2>Props</h2>
            <Nome nome='Sayumi' sobrenome='Hashimoto' age={idade}/>
            {/* <button onClick={() => setIdade(idade + 1)}>Idade</button> */}
            <Button value='Add Idade' evento={() => setIdade(idade + 1)} classe="green"/>
            <br />

            {/* <button onClick={() => setStatus(!status)}>
                {status ? 'Remover' : 'Exibir'}
            </button> */}
            <Button value={status ? 'Remover' : 'Exibir'} evento={() => setStatus(!status)} classe="red"/>
            {status && <Escola turma={turma} alunos={alunos}/>}

            {
                lista.map((produto) => (
                    <Produto 
                    key={produto.id}
                    id={produto.id}
                    descricao={produto.nome}
                    preco={produto.preco}
                    handlerClick={removerProduto}
                    />
                ))
            }

            <Children valor='Children 1'>
                <p>Olá!</p>
            </Children>
            <Children valor='Children 2'>
                <h4>Teste</h4>
                <p>Teste</p>
            </Children>
            
        </div>
    )
}
export default Props