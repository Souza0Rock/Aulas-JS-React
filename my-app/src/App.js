import './App.css';
import { Instrumentos, PaisesFabricantesCarro } from './utils'

function App() {


// Fazer uma condição que se o valor digitado num input for: 
  //--Guitarra--, console retorna --tem cordas;
  //--Bateria--, console retorna --tem pedal;
  //--Microfone--, console retorna --tem fios;
  // Qualque outra coisa, retorna --não existe esse intrumentos;

// Fazer um console com switch case que faça algo com 3 opções, e quando não atender uma das opções tenha um retorno no console.



  return (
    <div className="App">
      <form>
        <div>
          <div><h2>If Else</h2></div>
          <input onChange={(e) => {Instrumentos(e.target.value) }} />
        </div>
        <div>
          <div><h2>Switch Case</h2></div>
          <input onChange={(e) => {PaisesFabricantesCarro(e.target.value) }} />
        </div>
      </form>
    </div>
  );
}

export default App;