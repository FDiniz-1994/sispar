import Logo from "../../assets/Tela Login/logo-ws.png"
import Styles from "./Login.module.scss"


function login(){
    return(
        <>
        <main>
        <section className={Styles.containerImagem}>
        </section>

        <section className={Styles.containerForm}>
            <img src={Logo} alt="logo da Wilson Sons" />
            <h1>Boas vindas ao novo portal SISPAR</h1>
            <p>Sistema de Emissão de Boletos e Parcelamento</p>

            <form action="">
            <input type="email" name="Email" id="Email" placeholder="Email" />
            <input type="password" name="Senha" id="senha" placeholder="Senha" />
            <a href="">Esqueci minha senha</a>
            <div>
            <button className={Styles.buttonEntrar}>Entrar</button>
            <button className={Styles.buttonCriar}>Criar Conta</button>
            </div>
            </form>

        </section>
        </main>

        </>
    )
}
export default login