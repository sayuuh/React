import Button from "../Button"
import Input from "../Input"
import "./styles.css"

const Form = () => {
    return(
        <form className="task-form">
            <Input type="text" required/>
            <Input type="datetime-local" required/>
            <Button text="Adicionar"/>
        </form>
    )
}
export default Form