import { useNavigate } from "react-router-dom"
import Logo from "../../assets/Tela Login/logo-ws.png"
import styles from "./login.module.scss"


function login(){
    const navigate = useNavigate() 

    const paraReembolsos =()=>{
        navigate("/reembolsos")
    }

    return(
        <>
        <main className={styles.mainInicio}>
       
        <section className={styles.containerImagem}>
        </section>

        <section className={styles.containerForm}>
            <img src={Logo} alt="logo da Wilson Sons" />
            <h1>Boas vindas ao novo portal SISPAR</h1>
            <p>Sistema de Emissão de Boletos e Parcelamento</p>

            <form className={styles.formLogin}>
            <input type="email" name="Email" id="Email" placeholder="Email" />
            <input type="password" name="Senha" id="senha" placeholder="Senha" />
            <a href="">Esqueci minha senha</a>

            <div className={styles.boxButtonLogin}>
            <button onClick={paraReembolsos} className={styles.buttonEntrar}>Entrar</button>
            <button className={styles.buttonCriar}>Criar Conta</button>
            </div>
            
            </form>

        </section>
        </main>

        </>
    )
}
export default login