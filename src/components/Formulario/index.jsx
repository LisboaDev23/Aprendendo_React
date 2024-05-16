import { useState, useEffect } from "react"

const Formulario = (props) => {//o react tbm trabalha com propriedades
    //para adicionarmos um evento ao estado em react, utilizamos o método useState
    const [materiaA,setMateriaA] = useState(0)//primeiro parametro valorInicial, ele nos retorna o valor e uma função que altera o valor
    const [materiaB,setMateriaB] = useState(0)//utilizamos a desestruturação de arrays, onde o primeiro elemento é o próprio valor, e o segundo é a função
    const [materiaC,setMateriaC] = useState(0)
    const [nome, setNome] = useState("") //toda vez que criamos uma nova variável utilizando o useState, é como se estivéssemos sempre criando um novo estado

    const alteraNome = (evento) =>{//podemos alterar os valores atraves de funções
        setNome(()=>{
            return evento.target.value;
        })
    }
    useEffect( () => {
        //podemos ter um useEffect apenas quando o componente for inicializado
        console.log('O compontente iniciou');
        return () =>{
            console.log("O componente finalizou");
        }
    }, [] ) 
    useEffect( () => {
        console.log("O estado nome mudou");
    }, [nome] ) 
//nessa função, temos o escopo da arrow fuction onde esse escopo só será realizado quando o item do array seguinte 
//do paramâtro for alterado, nesse caso o nome, quando o nome for alterado, ele executará o console.log
    useEffect( () => {
        console.log("Matéria A mudou")
    }, [ props.materiaA ] ) //quando trabalhamos com propriedades utilizamos o parametro do elemento(props) e seu atributo .materiaA

    const renderizaResultado = () =>{
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;
        if(media >=7){
            return(
                <p>{nome} foi aprovado!</p> //podemos retornar elementos html numa função quando trabalhamos com REACT
            )
        } else{
            return(
                <p>{nome} foi reprovado!</p>
            )
        }
    }

    return(
        <form>
            <ul>
                {[1,2,3,4,5].map(item => (
                    <li key={item}>{item}</li>//quando renderizamos listas, cada item da lista deve ter uma key especifica, caso ela seja igual o react reclama tbm
                //por isso é super importante tbm colocar o proprio valor do item no percorrimento para que não fique igual 
            ))}
            </ul>

            <input type="text" placeholder="Seu nome" onChange={alteraNome}/>
            <input type="number" placeholder="Nota A" onChange={evento => setMateriaA(parseFloat(evento.target.value))}/>{/*Dps de utilizado o useState, utilizamos o atributo onChange em CameoCame*/}
            <input type="number" placeholder="Nota B" onChange={evento => setMateriaB(parseFloat(evento.target.value))}/>{/*Dentro das chaves do onChange, passamos a function aonde iremos manipular o evento*/}
            <input type="number" placeholder="Nota C" onChange={evento => setMateriaC(parseFloat(evento.target.value))}/>{/*A função que iremos alterar é o set aonde foi definido na desestruturação do array, o useState irá fazer automaticamente a mudança*/}
            {renderizaResultado()}
        </form>
    )
}

export default Formulario