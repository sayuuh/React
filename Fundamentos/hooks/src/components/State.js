import React, {useState} from 'react'

const State = () => {
    let cont = 0
    const nome = "Utilizando uma variável padrão sem alteração de estado"
    const [contador, setContador] = useState(0)

    return(
        <div>
            <h2>useState</h2>
            <div>
                <h3>Sem Estado</h3>
                {nome}
                {cont}
                <br />
                <button onClick={() => cont += 1}>Contador</button>
            </div>

            <div>
                <h3>Com Estado</h3>
                {contador}
                <br />
                <button onClick={() => setContador(contador + 1)}>Adicionar</button>
            </div>
        </div>
    )
}

export default State