import { useState } from 'react';
import './App.css';

function App() {
  const [verbo, setVerbo] = useState('')
  const [preposicao, setPreposicao] = useState('')
  const [number, setCalcular] = useState(1)

  function AlterarString() {
    setVerbo("Vamos")
    setPreposicao("para")
  }

  return (
    <div className="App">
      <div className='div-cards'>
        <p>{verbo} {preposicao} a praia</p>
        <button onClick={() => AlterarString()}>teste</button>
      </div>
      <div className='div-cards'>
        <p>{number} x 4</p>
        <button onClick={() => setCalcular(number * 4)}>clique para multiplicar</button>
      </div>
    </div>
  );
}

export default App;

  // Fazer uma função que muda dois states que exibe na tela numa mesma frase.
  // Fazer um state como contador *4