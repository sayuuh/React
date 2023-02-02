import Form from './components/Form';
import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';
import CardList from './components/CardList';
import { useState } from "react"

function App() {
  const [list, setList] = useState([])
  const handleList2 = (text, data) => {
    console.log(text, data)
    const newList = [...list] //spread
    newList.push({tarefa: text, data})
    setList(newList)  
  }
  
  return (
    <div className="App">
      <Form handleList={handleList2}/>
      <CardList list={list}/>
    </div>
  );
}

export default App;
