import { useState } from 'react'
import './App.css'
import Perfil from './components/Perfil'
import Formulario from './components/Formulario'
import ReposList from './components/ReposList';

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');
  return(
    <>
    <h5>Digite o nome do usuário GitHub, saia do input para renderização</h5>
    <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />
    {nomeUsuario.length > 4 && (
      <>
        <Perfil nomeUsuario={nomeUsuario} />
        <ReposList nomeUsuario={nomeUsuario}/>
      </>
    )}
    {formularioEstaVisivel && (
      <Formulario/>
    )}

    <button onClick={() => {setFormularioEstaVisivel(!formularioEstaVisivel)}} type='button'>toggle form</button>
    </>
  )
}

export default App
