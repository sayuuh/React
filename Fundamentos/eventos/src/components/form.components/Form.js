const Form = () => {
    const handleForm = (e) =>{
        e.preventDefault()
        const text = document.querySelector('input[type="text"]')
        console.log(`Texto: ${text.value}`)
        e.target.reset()
    }
    return(
        <form onSubmit={handleForm}>
            <input type="text" placeholder="Digite o nome" required />
            <input type="submit" value="Gravar" />
        </form>
    )
}

export default Form