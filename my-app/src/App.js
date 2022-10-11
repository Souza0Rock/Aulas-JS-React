import './App.css';

function App() {

// Listagem com 4 objetos, cada objeto contendo 3 itens diversos e um item boolean, sendo dois boolean true e outros dois false. Só será exibido o objeto que possue a condição false.

// Outra lista que tenha 3 objetos com 3 strings, e que só será retornado dois itens que a string seja abacaxi


  const listaNomes = [
    {
      nome: "mateus",
      email: "exemplo1@gmail.com",
      estadoCivil: "solteiro",
      exibir: true
    },
    {
      nome: "murilo",
      email: "exemplo2@gmail.com",
      estadoCivil: "solteiro",
      exibir: true
    },
    {
      nome: "maria",
      email: "exemplo3@gmail.com",
      estadoCivil: "solteiro",
      exibir: false
    },
    {
      nome: "josé",
      email: "exemplo4@gmail.com",
      estadoCivil: "solteiro",
      exibir: false
    }
  ]

  const filterListaNomes = listaNomes.filter(itemLista =>{
    return itemLista.exibir === false
  })

  const listaFrutas = [
    {
      fruta_1: "melancia",
      fruta_2: "banana",
      fruta_3: "abacaxi"
    },
    {
      fruta_1: "laranja",
      fruta_2: "maçã",
      fruta_3: "mamão"
    },
    {
      fruta_1: "uva",
      fruta_2: "limão",
      fruta_3: "abacaxi"
    }
  ]

  const filterListaFrutas = listaFrutas.filter(itemLista =>{
    return itemLista.fruta_3 === 'abacaxi'
  })

  console.log(filterListaNomes, 'filtrando nomes')
  console.log(filterListaFrutas, 'filtrando frutas')

  return (
    <div className="App">
    {
      filterListaNomes.map(itemLista=>{
        return(
          <div className='div-itens-list'>
            <p>{itemLista.nome}</p>
            <p>{itemLista.email}</p>
            <p>{itemLista.estadoCivil}</p>
          </div>
        )
      })
    }
    {
      filterListaFrutas.map(itemLista=>{
        return (
          <div className='div-itens-list'>
            <p>{itemLista.fruta_1}</p>
            <p>{itemLista.fruta_2}</p>
            <p>{itemLista.fruta_3}</p>
          </div>
        )
      })
    }
    </div>
  );
}

export default App;