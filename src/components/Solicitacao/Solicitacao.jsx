import NavBar from "../navbar/NavBar.jsx";
import styles from "./Solicitacao.module.scss"
function Solicitacao(){
    return(
        <div className={styles.containerSolicitacao}>
        <NavBar/>
        
        <h2>Sou o componente solicitação</h2>
        </div>
    )
}

export default Solicitacao