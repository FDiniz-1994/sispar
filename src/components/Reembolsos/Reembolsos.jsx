import Home from "../../assets/Header/botão - Home.png"
import Seta from "../../assets/Header/botão - Sair.png"
import Styles from "./Reembolsos.module.scss"

function Reembolsos(){
    return(
        <>
        <h2>Sou o componente reembolso</h2>
        <div>
            <header>
                <img src={Home} alt="Casinha da Header" />
                <img src={Seta} alt="Setinha da Header" />
                <p>Reembolsos</p>
            </header>
            <main>
                <h1>Sistema de Reembolsos</h1>
                <p>Solicite novos pedidos de reembolsos, visualize solicitações em análise e todo o histórico.</p>
                <section>
                    <article></article>
                </section>


            </main>
        </div>
        </>
    )
}

export default Reembolsos