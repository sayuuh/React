import {useState, useEffect, useCallback} from 'react'
import axios from 'axios'
import './App.css';

function App() {
  const url = 'https://pokeapi.co/api/v2'
  const [valor, setValor] = useState([])
  const [search, setSearch] = useState('')
  useEffect(() => {
    // request()
    requestAxios()
  }, [])

  // const request = useCallback(async () => {
  //   try{
  //     const response = await fetch(`${url}/pokemon`)
  //     const data = await response.json()
  //     console.log(data)
  //     setValor(data)
  //   }catch(err){
  //     console.log(err)
  //   }
  // }, [])

  const requestAxios = useCallback( async () => {
    // axios
    // .get(`${url}/pokemon`)
    // .then(response => setValor(response.data.results))
    // .catch(err => console.log(err))
    // .finally()
    try{
      const res = await axios.get(`${url}/pokemon`)
      setValor (res.data.results)
    }catch(err){
      console.log(err.message)
    }
  }, [url])

  const toSearch = search.toLowerCase()
  const arrayValor = valor.filter(item => item.name.toLowerCase().includes(toSearch))


  return (
    <div className="App">
      <h1>Axios API</h1>
      <ul>
        {
          arrayValor &&
          arrayValor.map((item, i) => (
            <li key={i}
            // onClick={() => {
            //   search
            //   ?
            //   setSearch('')
            //   :
            //   setSearch(item.name)
            // }}

            onDoubleClick={() => {
              setValor(valor.filter((valor, index) => index !== i))
            }}
            >
              {item.name}
            </li>
        
          ))
        }
      </ul>

      {/* <ul>
        {
          valor &&
          valor.map((item, i) => (
            <li key={i}>{item.name}</li>
          ))
        }
      </ul> */}
    </div>
  );
}

export default App;
