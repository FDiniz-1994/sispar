import Styles from "./navbar.module.scss";
import Historico from "../../assets/Header/Botão - Histórico.png";
import Home from "../../assets/Header/Botão - Home.png";
import Pesquisa from "../../assets/Header/Botão - Pesquisa.png";
import Reembolso from "../../assets/Header/Botão - Reembolso.png";
import Sair from "../../assets/Header/Botão - Sair.png";
import Perfil from "../../assets/Header/image.png";
import Fechar from "../../assets/Header/imagem-fechar-header.png";
import { useNavigate } from "react-router-dom";

function navbar() {
  const navigate = useNavigate();

  return (
    <nav className={Styles.navbarEstilo}>
      <button>
        <img src={Fechar} alt="botão de fechar" />
      </button>

      <section>
        <img src={Perfil} alt="imagem de perfil" />
        <div className={Styles.boxButton}>
          <button
            onClick={() => {
              navigate("/reembolsos");
            }}
          >
            <img src={Home} alt="botão para home" />
          </button>
          <button
            onClick={() => {
              navigate("/solicitacao");
            }}
          >
            <img src={Reembolso} alt="botão de reembolso" />
          </button>
          <button
            onClick={() => {
              navigate("/reembolsos");
            }}
          >
            <img src={Pesquisa} alt="botão de pesquisa" />
          </button>
          <button
            onClick={() => {
              navigate("/reembolsos");
            }}
          >
            <img src={Historico} alt="botão de histórico" />
          </button>
        </div>
      </section>

      <button
        className={Styles.buttonSair}
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={Sair} alt="botao de sair" />
      </button>
    </nav>
  );
}

export default navbar;