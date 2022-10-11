import './App.css';
import { Mensagem, Click } from './utils'

function App() {

  // Criar uma função externa que chame o número digitado no input no console log acrescentando a mensagem --é muito louco--
  // Passar duas variáveis para uma segunda função onde elas retornem dentro de um alert depois do click

  const parte1 = 'Jesus é bom '
  const parte2 = 'e o diabo é vacilão'

  return (
    <div className="App">
      <form>
        <input onChange={(e) => { Mensagem(e.target.value + ' é muito louco') }} />
        <button onClick={(e) => { Click(parte1 + parte2) }}>Clique para receber</button>
      </form>
    </div>
  );
}

export default App;