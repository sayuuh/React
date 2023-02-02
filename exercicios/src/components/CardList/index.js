import { useState } from "react"
import Card from "../Card"
import "./styles.css"

const CardList = ({list}) => {
    return(
        <ul className="card-list">
            {list.map((t) => (
            <Card data={t.data} tarefa={t.tarefa}/>

            ))}
        </ul>       
    )
}

export default CardList

