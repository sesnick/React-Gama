import React, {useStage} from 'react';
import './App.css';

function App(props) {
  
  return (
    <div className="App">
      <h1>{props.title} {props.user}</h1>
      <input name="usuario" id="usuario" className="usuarioInput" placeholder="Usuario"/>
      <button type="button">Pesquisar</button>
    </div>
  );
}

export default App;


//[usuario, setUsuario]
//const [usuario, setUsuario] = useState('Fernanda');
//<p>{usuario}</p>
//Hooks - forma mais simplificada?