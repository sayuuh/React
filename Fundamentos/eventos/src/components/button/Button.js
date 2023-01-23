const Button = () => {
    const handleBtn = (e) => {
        console.log('Clicou em mim!')
        
    }
    return(
        <div>
            <div>
            <button onClick={handleBtn}>Clique aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log('Função inline')}>Função Inline</button>
            </div>
            <div>
                <button onClick={(e) => {
                    console.log("Bloco")
                    e.target.classList.add("evento")
                    console.log(e.target)
                }}>Bloco inLine</button>
            </div>
        </div>
    )
} 

export default Button