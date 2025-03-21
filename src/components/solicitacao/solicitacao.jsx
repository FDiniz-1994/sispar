import NavBar from "../navbar/navbar.jsx";
import styles from "./solicitacao.module.scss"
import Home from "../../assets/homeHeader.png";
import Seta from "../../assets/vector.png";
import Lixeira from "../../assets/solicitacao/lixeira.png"
import Motivo from "../../assets/solicitacao/motivo.png"

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
                        <option value="">1100109002 - FIN CONTROLES INTERNOS MTZ</option>
                        <option value="">1100110002 - FIN VICE-PRESIDENCIA FINANCAS MTZ</option>
                        <option value="">1100110101 - FIN CONTABILIDADE MTZ</option>
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
                    <select name="" id="">
                  <option value=""></option>
                  <option value="">BRL</option>
                  <option value="">ARS</option>
                  <option value="">USD</option>
                </select>

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
                    <div className={styles.botoes}>
                        <button className={styles.botaoSalvar}>Salvar</button>
                        <button className={styles.botaoDeletar}>Del</button>
                    </div>
                </div>
            </form>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Colaborador</th>
                        <th>Empresa</th>
                        <th>Nº Prest.</th>
                        <th>Data</th>
                        <th>Motivo</th>
                        <th>Tipo de Despesa</th>
                        <th>Ctr. Custo</th>
                        <th>Ord. Int.</th>
                        <th>Div.</th>
                        <th>PEP</th>
                        <th>Moeda</th>
                        <th>Dist/Km</th>
                        <th>Val. Km</th>
                        <th>Val. Faturado</th>
                        <th>Despesa</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src={Lixeira} alt="" /></td>
                        <td>Fulano da Silva</td>
                        <td>Mototaxi</td>
                        <td>12345</td>
                        <td>21-02-2025</td>
                        <td><img src={Motivo} alt="" /></td>
                        <td>Alimentação</td>
                        <td>200.00</td>
                        <td>1</td>
                        <td>0</td>
                        <td>nada</td>
                        <td>BRL</td>
                        <td>20km</td>
                        <td>8.50</td>
                        <td>600</td>
                        <td>1500</td>
                    </tr>
                </tbody>
            </table>


        </main>
        </div>
        </div>  
    )
}

export default Solicitacao