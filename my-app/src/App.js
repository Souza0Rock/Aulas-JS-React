import './App.css';

function App() {
  
  // Fazer um input com onChange afim de o que for digitado será somado com uma variável de valor 4, e o resultado será retornado como um alert.
  // Fazer um click numa div com texto qualquer que retorne um alert com a string 'você conseguiu' de uma variável.

  const valorSoma = 4
  const mensagemAlert = 'Você conseguiu!'

  return (
    <div className="App">
      <form>
        <input onChange={(e) => { alert(JSON.parse(e.target.value) + valorSoma ) }} />
      </form>
      <div>
        <p onClick={() => {alert(mensagemAlert)}}>Clique aqui!</p>
      </div>
    </div>
  );
}

export default App;