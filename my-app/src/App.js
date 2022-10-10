import './App.css';

function App() {

  //MAP SEMPRE USADO PARA TRAZER DADOS DE UM ARRAY [] (NUNCA DE UM OBJETO)
  const pessoas = [
    {
        nome: 'Mateus',
        idade: 18,
        data_de_nascimento: '15/04/2004',
        nome_da_mãe: 'Patricia',
        nome_do_pai: 'Fernando'
    },
    {
      nome: 'Mateus',
      idade: 18,
      data_de_nascimento: '15/04/2004',
      nome_da_mãe: 'Patricia',
      nome_do_pai: 'Fernando'
    },
    {
      nome: 'Mateus',
      idade: 18,
      data_de_nascimento: '15/04/2004',
      nome_da_mãe: 'Patricia',
      nome_do_pai: 'Fernando'
    },
    {
      nome: 'Mateus',
      idade: 18,
      data_de_nascimento: '15/04/2004',
      nome_da_mãe: 'Patricia',
      nome_do_pai: 'Fernando'
    },
    {
      nome: 'Mateus',
      idade: 18,
      data_de_nascimento: '15/04/2004',
      nome_da_mãe: 'Patricia',
      nome_do_pai: 'Fernando'
    },
]


// fazer uma lista com 5 pessoas com nome, idade, data de nascimento ne nome da mãe. 3 pessoas terão o nome do pai, mas as duas que não tiverem não será exibido o título de pai.

  return (
    <div className="App">
      {
        pessoas.map(item => {

          return (
            <section className='box'>
              <ul>
                <li>
                  <div className='container'>
                    <ul>  
                      <li>
                        <div className='container'>
                          <div className='div-h2'><h2>nome:</h2></div>
                          <div className='div-p'><p>{item.nome}</p></div>
                        </div>
                      </li>
                      <li>
                        <div className='container'>
                          <div className='div-h2'><h2>idade:</h2></div>
                          <div className='div-p'><p>{item.idade}</p></div>
                        </div>
                      </li>
                      <li>
                        <div className='container'>
                          <div className='div-h2'><h2>data de nascimento:</h2></div>
                          <div className='div-p'><p>{item.data_de_nascimento}</p></div>
                        </div>
                      </li>
                      <li>
                        <div className='container'>
                          <div className='div-h2'><h2>nome da mãe:</h2></div>
                          <div className='div-p'><p>{item.nome_da_mãe}</p></div>
                        </div>
                      </li>
                      {item.nome_do_pai ? <li>
                        <div className='container'>
                          <div className='div-h2'><h2>nome do pai:</h2></div>
                          <div className='div-p'><p>{item.nome_do_pai}</p></div>
                        </div>
                      </li>: ''}
                    </ul>
                  </div>
                </li>
              </ul>
            </section>
          )
        })
      }
    </div>
  );
}

export default App;