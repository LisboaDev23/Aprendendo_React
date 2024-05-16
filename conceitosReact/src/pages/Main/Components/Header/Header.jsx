import { useState } from "react"
//no parâmetro do nosso componente, utilizamos a desestruturação e passando o atributo que queremos manipular
function Header ({ nome, paragrafo, color }){
    
    const [estado, setEstado]  = useState("ESTADO INICIAL");// const [variavel, funcaoMudarVariavel] = useState(valorInicialVariavel)
    const [valorInput, setValorInput] = useState('');
    const [nomeVazio, setNomeVazio] = useState('');

    function clicou(){//função para quando for clicado o botão
        setNomeVazio(valorInput); //mude o valor do nome para o valor do input
        setValorInput(""); //limpando o campo nome
    }

    return (
    <>       {/*Lembrar de que propriedade em css devemos passar como objeto*/}
        <br/>
        <input placeholder="Digite seu nome completo" type="text" value={valorInput} onChange={ (evento) => { setValorInput(evento.target.value) } } />
        <button onClick={clicou}>Mostrar nome</button>
        <p>Seu nome completo é : {nomeVazio} </p>

        <h1 style={{color:color}}>Olá {nome ? nome : "Unknown"}</h1>{/*Condicional, caso tenha nome ? exiba nome, : senão exiba Unknown */}
        {paragrafo ? 
            <p>Lorem</p>
        : <p>Nada</p>
        }
        <h3>Clique no botão para alterar o estado do botão</h3>
        <button style={{marginBottom:40}} onClick={() =>{setEstado("Botão foi clicado!")}}>{estado}</button>
    </>
    )
}



export default Header