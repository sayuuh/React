import { useState } from "react"
import Button from "../Button"
import "./styles.css"

const Card = ({data, tarefa}) => {

    const [active, setActive] = useState(false)
    return(
        <li className={`default-card ${active ? "bg-color-active" : "bg-color-default"}`}>
            <p>{data}</p>
            <p>{tarefa}</p>
            <Button onClick={() => {setActive(true)}}  text={active ? "Já Realizado" : "Realizar"} />
        </li>
    )
}
export default Card