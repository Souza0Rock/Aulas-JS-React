import React, { useEffect, useState } from 'react';
import axios from 'axios';

// import api from './services/api';
import './App.css';


function App() {

  const baseURL = "https://workspace-d846a-default-rtdb.firebaseio.com/formacaoOficinaG3.json"
  
  const [resposta, setResposta] = useState()


  useEffect(() => {
    axios.get(baseURL) .then((response) => {
      setResposta(response.data);
    })
  }, [])

  console.log(resposta)

  
  return (
    <>
      {/* <div>
        <h1>Ex membros do Oficina G3</h1>
        <p>{resposta?.exMembros?.guitarrista}</p>
      </div> */}
      {resposta &&
        Object.values(resposta).map((formacaoOficinaG3 ,index)=>{
              return(
                <div key={index}>
                  <p>{formacaoOficinaG3.guitarrista}</p>
                  <p>{formacaoOficinaG3.baterista}</p>
                </div>
              )           
            })}
    </>
  );
}

export default App;