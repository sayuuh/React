import React, {useState} from 'react'

const Condicional = () => {
    const [status, setStatus] = useState(false)
    const [nome, setNome] = useState('Pedro')
    return(
        <div>
            <h1>Condicional JSX</h1>
            <div>
                {
                    status && <p>O status é verdadeiro!</p>
                }
                {
                    !status && <p>O status é falso!</p>
                }
                {
                    nome === 'Pedro' && <p>Olá, {nome}</p>
                }
            </div>
            <div>
                <button onClick={(e) => setStatus(!status)}>Alterar Status</button>
                <button onClick={(e) => setNome('João')}>Alterar Nome</button>
            </div>
            <div>
                {
                    status
                        ?
                        <div>
                            <header>
                                <h3>Título</h3>
                            </header>
                            <main>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, voluptas. Molestiae officiis vitae ipsa ea, quibusdam doloremque quam deserunt mollitia sint atque provident saepe nobis ab esse illo adipisci? Ad!</p>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, voluptas. Molestiae officiis vitae ipsa ea, quibusdam doloremque quam deserunt mollitia sint atque provident saepe nobis ab esse illo adipisci? Ad!</p>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, voluptas. Molestiae officiis vitae ipsa ea, quibusdam doloremque quam deserunt mollitia sint atque provident saepe nobis ab esse illo adipisci? Ad!</p>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, voluptas. Molestiae officiis vitae ipsa ea, quibusdam doloremque quam deserunt mollitia sint atque provident saepe nobis ab esse illo adipisci? Ad!</p>
                            </main>
                            <footer>
                                <p>Todos os direitos reservados</p>
                            </footer>
                        </div>
                        :
                        <div>
                            <p>Carregando . . . </p>
                        </div>
                }
            </div>
        </div>
    )
}

export default Condicional

// { status ? console.log('True') : console.log('False')}