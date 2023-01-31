import './index.css'
import {useEffect, useState} from 'react'
import User from './User'

const Index = () => {
    const user = [
        {
            id: 1,
            user: 'Kenji',
            status: false
        },
        {
            id: 2,
            user: 'Akio',
            status: true
        },
        {
            id: 3,
            user: 'Sayumi',
            status: false
        },
        {
            id: 4,
            user: 'Mateus',
            status: false
        },
        {
            id: 5,
            user: 'Davi',
            status: false
        }
    ]

    const [lista, setLista] = useState([])
    const [status, setStatus] = useState(false)

    useEffect(() =>{
        setLista([...user])
    }, [])

    const updateStatus = (id) => {
        let array = lista.map((item) => item.id === id ? ({...item, status: !item.status}) : item)
        
        setLista([...array])
    }

    return(
        <div className='content'>
            <h2>CSS</h2>
            <h3>Css Global - src/index.css</h3>

            <h4>Css component - css.css</h4>
            <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eveniet eius pariatur reprehenderit quia a distinctio, accusantium magni similique quibusdam nemo veritatis mollitia, possimus sapiente consequuntur velit. Optio, beatae repellendus.</p>

            <h5 style={{color:"green", fontSize:"1.5em", backgroundColor:'lightcyan', padding:'5px'}}>Css Inline - Utilizar style</h5>

            <h5 style={status ?({backgroundColor: 'green', color: 'white'}) : ({backgroundColor: 'red', color: 'white'})}>Css IDinâmico - inline</h5>

            <h5 className={status ? 'large' : 'null'}>Css dinâmico - Classe</h5>

            {
                lista.map((item) => (
                    <User key={item.id} id={item.id} status={item.status} user={item.user} evento={updateStatus} />
                ))
            }
        </div>
    )
}
export default Index