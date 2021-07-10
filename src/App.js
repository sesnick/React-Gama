import React, {useState} from 'react';
import './App.css';
import axios from 'axios';

function App(props) {
  const [usuario, setUsuario] = useState('');
  function handlePesquisa(){
    //console.log(usuario);
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response =>console.log(response.data));
  }
  return (
    <>
      <input className="usuarioInput" placeholder="Usuario" value={usuario} onChange={e => setUsuario(e.target.value)}/>
      <button type="button" onClick={handlePesquisa}>Pesquisar</button>
    </>
  );
}

export default App;


//[usuario, setUsuario]
//const [usuario, setUsuario] = useState('Fernanda');
//<p>{usuario}</p>
//Hooks - forma mais simplificada?