import './App.css';
import Card from './components/Card';
// import Link from './components/Link';


function App() {

// fazer 4 cards que usem o mesmo componente porém mostre textos diferentes.
// mostrar 2 links que consomem o mesmo componente que vai ser passado um boleano por props. Se eu passar true exibe o link, se passar false ou nada, não exibe o link.

const mostrar = true

  return (
    <div className="App">
      <Card mostrar={mostrar} texto={'São Paulo'} textoLink={'https://www.youtube.com/watch?v=QSczc8FpxQo&list=PLn6DtETZdPVbe9BHb_CyHx30XKrIpBJYH&index=4'}/>
      <Card mostrar={mostrar} texto={'Rio de Janeiro'} textoLink={'https://www.youtube.com/watch?v=QSczc8FpxQo&list=PLn6DtETZdPVbe9BHb_CyHx30XKrIpBJYH&index=4'}/>
      <Card texto={'Santa Catarina'} />
      <Card texto={'Amazonas'} />
    </div>
  );
}

export default App