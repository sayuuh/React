import Card from "../Card"
import "./styles.css"

const CardList = () => {
    return(
        <ul className="card-list">
            <Card data="2022-01-30" tarefa="Estudar"/>
            <Card data="2022-01-30" tarefa="Trabalhar"/>
        </ul>       
    )
}

export default CardList