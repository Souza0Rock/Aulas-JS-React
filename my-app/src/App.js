import './App.css';
import platformVideoGame from './pages/Consoles-videogame';

function App() {

  // SPLIT
  // Montar um link que tenha 3 opções de parâmetro, será exibido um conteúdo diferente para cada caso

  // QUERRY STRING
  // Montar outro link que tenha 5 opções de parâmetro, será exibido um conteúdo próprio condizente com os 5 parâmetros



  return (
    <div className='App'>
      <menu>
        <ul>
          <li><button href='/'>Voltar</button></li>
          <li><button onClick={platformVideogame} href='http://localhost:3000/platform-video-game?platform=Playstation&firstConsole=PSOne&lastGeneration=PS5'>Clique para acionar o Split</button></li>
          {/* <li><button href= 'http://localhost:3000/mixBandas?vocal=Mauro-Henrique&guitarrista=Juninho-Afram&Baixista=Duca-Tambasco&Tecladista=Jean&baterista=Walter-Lopes'>Clique para acionar o Querry String</button></li> */}
        </ul>
      </menu>
    </div>
  );
}

export default App;