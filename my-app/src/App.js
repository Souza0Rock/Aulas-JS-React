import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';



function App() {
  
  const [resposta, setResposta] = useState()

  // fetch('https://workspace-d846a-default-rtdb.firebaseio.com/formacaoOficinaG3.json')
  // .then(response => response.json())
  // .then(data => setResposta(data, 'data'))

  useEffect(() => {
    axios.get('https://workspace-d846a-default-rtdb.firebaseio.com/formacaoOficinaG3.json')
    .then(function (response){
      setResposta(response.data);
    })
  }, [])

  
  return (
    <>
      {
        Object.values(resposta?.exMembros).map(formacaoOficinaG3 =>{
          return(
            <p>{formacaoOficinaG3.guitarrista}</p>
          )           
        })
      }
    </>
  );
}

export default App;