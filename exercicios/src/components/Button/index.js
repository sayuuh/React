import "./styles.css" 

const Button = ({text, onClick}) => {
    return(
        <button onClick={onClick} className="default-button">{text}</button>
    )
}

export default Button 