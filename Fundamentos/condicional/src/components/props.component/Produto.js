const Produto = ({id, descricao, preco, handlerClick}) => {
    return(
        <div>
            <p>{id}</p>
            <p>{descricao}</p>
            <p>R$ {(preco).toFixed(2)}</p>
            <button onClick={() => handlerClick(id)}>Remover</button>
        </div>
    )
}

export default Produto