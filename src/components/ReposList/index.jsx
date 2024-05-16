import { useEffect, useState } from "react"

import styles from './ReposList.module.css';

const ReposList  = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);


    useEffect(() => {
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(resposta => resposta.json())
        .then(respostaJson => setRepos(respostaJson))
    }, [nomeUsuario] ) //o conteudo da requisição HTTP deverá ser renderizada quando houver alteração no parâmetro nomeUsuario

    return (
        <div className="container">
        <ul className={styles.list}>
            {repos.map(repositorio => (
                <li className={styles.listItem} key={repositorio.id}>
                    <div className={styles.itemName}>
                        <b>Nome: </b>
                        {repositorio.name}
                    </div>
                    <div className={styles.itemLanguage}>
                        <b>Linguagem: </b>
                        {repositorio.language}
                    </div>
                    <a className={styles.itemLink} href={repositorio.html_url}>Visitar no GitHub</a>
                </li>
            ))}
            <li>Repositorio</li>
        </ul>
        </div>
    )
}

export default ReposList