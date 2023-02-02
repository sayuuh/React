import "./styles.css" 

const Button = ({text, onClick, type}) => {
    return(
        <button onClick={onClick} className="default-button" type={type}>{text}</button>
    )
}

export default Button 