import './App.css';

function App() { 

  const element = <p>Hello World</p>
  const link = <a href="/login" target='_blank'>Clique aqui</a>
  const texto = <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, sunt omnis eligendi vitae nulla magni ex. Adipisci, sapiente accusamus optio unde sunt, odio perferendis, excepturi minima voluptates voluptatum recusandae repellendus?</p>
  const alunos = ["Akio", "Kenji", "Sayumi", "Mateus"]

  return (
    <div className="App">
      <h1>JSX</h1>
      {element}
      {link}
      {texto}
      {/* Tags precisam ser fechadas */}
      <br />
      <img src="/logo192.png" alt="img" />
      <hr />

      {/* Diferenças de Nomenclaturas */}
      <label htmlFor="teste"></label>

      <p className="teste"></p>

      <div id="teste"></div>
      <main></main>
      {
        alunos.map((aluno, i) => (
          <p>
            Codigo: <strong> {i} </strong>
            nome: <strong> {aluno} </strong>
          </p>
        ))
      }
    </div>
  );
}

export default App;
