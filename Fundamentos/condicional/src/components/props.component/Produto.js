import Button from "./Button"

const Produto = ({id, descricao, preco, handlerClick}) => {
    return(
        <div>
            <p>{id}</p>
            <p>{descricao}</p>
            <p>R$ {(preco).toFixed(2)}</p>
            {/* <button onClick={() => handlerClick(id)}>Remover</button> */}
            <Button value="Remover" evento={() => handlerClick(id)} classe='red' />
        </div>
    )
}

export default Produto