import Home from "../../assets/Header/botão - Home.png";
import Seta from "../../assets/Header/botão - Sair.png";
import Styles from "./Reembolsos.module.scss";
import Solicitar from "../../assets/Dashboard/Solicitar - Reembolso.png";
import Analise from "../../assets/Dashboard/Análises.png";
import Historico from "../../assets/Dashboard/Solicitar - Histórico.png";
import NumeroAnalises from "../../assets/Dashboard/N-Análises.png";
import NumeroSolicitados from "../../assets/Dashboard/N-Solicitados.png";
import NumeroAprovados from "../../assets/Dashboard/N-Aprovados.png";
import NumeroReprovados from "../../assets/Dashboard/N-Rejeitados.png";
import NavBar from "../navbar/NavBar.jsx";


function Reembolsos(){
    return(
        <>
        <div className={Styles.containerNavbar}>
            <NavBar/>
            <header>
                <img src={Home} alt="Casinha da Header" />
                <img src={Seta} alt="Setinha da Header" />
                <p>Reembolsos</p>
            </header>
            <main className={Styles.mainReembolsos}>
                <h1>Sistema de Reembolsos</h1>
                <p>Solicite novos pedidos de reembolsos, visualize solicitações em análise e todo o histórico.</p>
                <section className={Styles.containerCards}>

                   <article>
                    <img src={Solicitar} alt="Ícone do reembolso" />
                    <h3>Solicitar reembolso</h3>
                   </article>

                   <article>
                    <img src={Analise} alt="Ícone da análise" />
                    <h3>Verificar análise</h3>
                   </article>

                   <article>
                    <img src={Historico} alt="Ícone do histórico" />
                    <h3>Histórico</h3>
                   </article>

                </section>

                <section className={Styles.containerStatus}>
                    <div>
                        <img className={Styles.NumeroSolicitados} src={NumeroSolicitados} alt="numero de solicitações" />
                        <h4>182</h4>
                        <p>Solicitados</p>
                    </div>
                    <div>
                        <img src={NumeroAnalises} alt="" />
                        <h4>74</h4>
                        <p>Análises</p>
                    </div>
                    <div>
                        <img src={NumeroAprovados} alt="" />
                        <h4>195</h4>
                        <p>Aprovados</p>
                    </div>
                    <div>
                        <img src={NumeroReprovados} alt="" />
                        <h4>41</h4>
                        <p>Rejeitados</p>
                    </div>
                </section>


            </main>
        </div>
        </>
    )
}

export default Reembolsos