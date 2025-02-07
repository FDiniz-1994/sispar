import Capa from "../../assets/Tela Login/imagem tela de login.png"
import Logo from "../../assets/Tela Login/logo-ws.png"

function login(){
    return(
        <>
        <img src={Capa} alt="capa" />
        <section>
           <p>reservado para a img</p>
        </section>

        <section>
            <img src={Logo} alt="logo da Wilson Sons" />
            <h1>Boas vindas ao novo portal SISPAR</h1>
            <p>Sistema de Emissão de Boletos e Parcelamento</p>

            <form action=""></form>
            <input type="email" name="Email" id="Email" placeholder="Email" />
            <input type="password" name="Senha" id="senha" placeholder="Senha" />
            <a href="">Esqueci minha senha</a>
            <button>Entrar</button>
            <button>Criar Conta</button>

        </section>

        </>
    )
}
export default login