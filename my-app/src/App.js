import { useEffect, useState } from 'react';
import './App.css';

// Criar uma lista com os jogadores da seleção brasileiro, só que terá 3 botões para trocar os nomes dos jogadores da seleção brasilera pelos nomes do corinthians, são paulo e palmeiras (lembrando que são 11 jogadores).

// Montar uma função que mude na tela 10 nomes diferentes ao clicar em um botão, mudar 2 vezes.


function App() {
  
  const [elenco, setElenco] = useState('Alisson; Éder Militão, Marquinhos, Thiago Silva e Alex Telles; Casemiro, Lucas Paquetá e Neymar; Raphinha, Vini Jr. e Richarlison.')
  const [nomeTime, setNomeTime] = useState('Seleção Brasileira')
  const [acionador, setAdicionar] = useState('selecao')
  const [nomes, setNomes] = useState('Juninho Afram, Deleo, Rodrigo Rocha, Steve Vai, Victor Pradella, SRV, Tin Henson, Cacau Santos, Juliana Vieira, Mateus Asato.')
  const [trocaNomes, setTrocaNomes] = useState(0)

  useEffect(() => {
    if (acionador === 'selecao') {
      setNomeTime('Seleção Brasileira')
      setElenco('Alisson; Éder Militão, Marquinhos, Thiago Silva e Alex Telles; Casemiro, Lucas Paquetá e Neymar; Raphinha, Vini Jr. e Richarlison.')
    }
    else if (acionador === 'corinthians') {
      setNomeTime('Corinthians')
      setElenco('Cássio; Fagner, Gil, Balbuena e Fábio Santos; Fausto Vera, Du Queiroz e Giuliano; Gustavo Mosquito, Róger Guedes e Yuri Alberto.')
    }
    else if (acionador === 'sao paulo') {
      setNomeTime('São Paulo')
      setElenco('Felipe Alves, Rafinha, Miranda, Ferraresi e Reinaldo; Pablo Maia, Talles Costa, Igor Gomes e Galoppo; Luciano e Calleri.')
    }
    else if (acionador === 'palmeiras') {
      setNomeTime('Palmeiras')
      setElenco('Weverton; Marcos Rocha, Gustavo Gómez, Murilo e Piquerez; Gabriel Menino, Zé Rafael e Bruno Tabata; Gustavo Scarpa; Dudu e Rony.')
    }
  }, [acionador]);

  useEffect(() => {
    if (trocaNomes === 1) {
      setNomes('Oficina G3, Dream Theater, Metal Nobre, Fruto Sagrado, Resgate, Djavan, Alessandro Vilas Boas, Morada, Poliphya, ONE-Sounds.')
    }
    else if (trocaNomes === 2) {
      setNomes('Gibson, Duesenberg, Tagima, Aslan, Line 6, VTR Effects, Custon Pickups, KZ, Boss, Ibanez.')
    }
  }, [trocaNomes])


  return (
    <div className='App'>
      <h1>useEffect</h1>
      <div>
        <div className='content'>
          <div>
            <h2>{nomeTime}</h2>
            <p>{elenco}</p>
          </div>
          <div>
            <button onClick={() => setAdicionar('selecao')}>seleção brasilera</button>
            <button onClick={() => setAdicionar('corinthians')}>corinthians</button>
            <button onClick={() => setAdicionar('sao paulo')}>são paulo</button>
            <button onClick={() => setAdicionar('palmeiras')}>palmeiras</button>
          </div>
        </div>
        <div className='content'>
          <div>
            <h2>Influências musicais e equipamentos</h2>
            <p>{nomes}</p>
          </div>
          <div>
            <button onClick={() => setTrocaNomes(trocaNomes + 1)}>mudar nomes</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;