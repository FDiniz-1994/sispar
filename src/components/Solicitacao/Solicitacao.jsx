import NavBar from "../navbar/NavBar.jsx";
import styles from "./Solicitacao.module.scss"
import Home from "../../assets/homeHeader.png";
import Seta from "../../assets/vector.png";

function Solicitacao(){
    return(
        <div className={styles.layoutSolicitacao}>
        <NavBar/>
        <div className={styles.containerPrincipalSolicitacao}>
        <header className={styles.headerSolicitacao}>
            <img src={Home} alt="icone da home" />
            <img src={Seta} alt="ícone da seta" />
            <p>Reembolsos</p>
            <img src={Seta} alt="ícone da seta" />
            <p>Solicitações</p>

        </header>
        <main className={styles.mainSolitacao}>
            <form className={styles.formSolicitacao}>
                <div className={styles.grupo1}>
                <div className={styles.inputNome}>
                    <label htmlFor="">Nome Completo</label>
                    <input type="text" />
                </div>
                <div className={styles.inputEmpresa}>
                    <label htmlFor="">Empresa</label>
                    <input type="text" />
                </div>
                <div className={styles.inputPrestacao}>
                    <label htmlFor="">Nº Prest. Contas</label>
                    <input type="number" />
                </div>
                <div className={styles.inputMotivo}>
                    <label htmlFor="">Descrição/Motivo do Reembolso</label>
                    <textarea name="" id=""></textarea>
                </div>
                </div>

                <div className={styles.barraVertical}>   
                </div>

                <div className={styles.grupo2}>
                    <div className={styles.inputData}>
                        <label htmlFor="">Data</label>
                        <input type="date" name="" id="" />
                    </div>
                    <div className={styles.inputDespesas}>
                        <label htmlFor="">Tipos de Despesa</label>
                        <select name="" id="">
                        <option value="">Selecionar</option>
                        <option value="">Alimentação</option>
                        <option value="">Combustível</option>
                        <option value="">Condução</option>
                        <option value="">Estacionamento</option>
                        <option value="">Viagem admin.</option>
                        <option value="">Viagem operacional</option>
                        <option value="">Eventos de Representação</option>
                        </select>
                    </div>
                    <div className={styles.inputCusto}>
                        <label htmlFor="">Centro de Custo</label>
                        <select name="" id="">
                        <option value="">Selecionar</option>
                        <option value="">FIN CONTROLES INTERNOS MTZ</option>
                        <option value="">FIN VICE-PRESIDENCIA FINANCIAS MTZ</option>
                        <option value="">FIN CONTABILIDADE MTZ</option>
                        </select>
                    </div>
                    <div className={styles.inputOrdem}>
                    <label htmlFor="">Ord. Int.</label>
                    <input type="text" />
                    </div>
                    <div className={styles.inputDiv}>
                    <label htmlFor="">Div</label>
                    <input type="text" />
                    </div>
                    <div className={styles.inputPep}>
                    <label htmlFor="">PEP</label>
                    <input type="text" />
                    </div>
                    <div className={styles.inputMoeda}>
                    <label htmlFor="">Moeda</label>
                    <input type="number" />
                    </div>
                    <div className={styles.inputDist}>
                    <label htmlFor="">Dist/Km</label>
                    <input type="number" />
                    </div>
                    <div className={styles.inputValor}>
                    <label htmlFor="">Valor/Km</label>
                    <input type="number" />
                    </div>
                    <div className={styles.inputFaturado}>
                    <label htmlFor="">Val. Faturado</label>
                    <input type="number" />
                    </div>
                    <div className={styles.inputDespesa}>
                    <label htmlFor="">Despesa</label>
                    <input type="number" />
                    </div>
                </div>
            </form>

        </main>
        </div>
        </div>  
    )
}

export default Solicitacao