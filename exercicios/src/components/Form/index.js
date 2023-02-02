import Button from "../Button"
import Input from "../Input"
import "./styles.css"

const Form = ({handleList}) => {
    const F = (e) => {
        e.preventDefault()
        handleList(e.target[0].value, e.target[1].value)
    }
    return(
        <form className="task-form" onSubmit={F}>
            <Input type="text" required/>
            <Input type="datetime-local" required/>
            <Button text="Adicionar" type="submit"/>
        </form>
    )
}
export default Form