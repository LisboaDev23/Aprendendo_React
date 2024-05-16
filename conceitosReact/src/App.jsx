import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import './pages/Main/Components/Header/Header.jsx'
import Header from './pages/Main/Components/Header/Header.jsx'
import Formulario from './pages/Main/Components/Formulario/Formulario.jsx'
import Resultado from './pages/Main/Components/Resultado/Resultado.jsx'
import HeaderAnotherPage from './pages/OutraPagina/Components/HeaderAnotherPage/HeaderAnotherPage.jsx'

function App(){ //nome do componente deve ser o mesmo nome do arquivo
  //oque queremos que aconteça
  const gabriel = "Gabriel Lisboa";
  const corTextoCabecalho = "red";

  return (
    <>
      <Header color={corTextoCabecalho} nome={gabriel} paragrafo={false}/>
      <Header /*percebe-se que por padrão a propriedade paragrafo vem com false olhando para a pagina esta como nada*//>
      {/*Como nessa mesma tag não passei atributo, vai mostrar de outra forma*/}
      <Formulario/>
      <Resultado/>

      <div>
        {/*O sistema de roteamento de páginas segue dessa maneira BrowserRouter>Routes>Route(path="caminho", elemento{<Pagina/>})*/}
        <BrowserRouter>
          <Routes>
            <Route path='./Main/Components/Formulario/Formulario.jsx' element={<Formulario/>} />
            <Route path='./OutraPagina/Components/HeaderAnotherPage/HeaderAnotherPage.jsx' element={<HeaderAnotherPage/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
)
}

//precisamos sempre exportar esse componente para ser utilizado pelo Main
export default App
