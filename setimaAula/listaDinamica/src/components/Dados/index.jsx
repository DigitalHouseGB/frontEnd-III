import styles from "../Dados/Dados.module.css";
import baldeLixo from "../../assets/lata-de-lixo.png";

export default function Dados({ user, removerItemLista }) {
  return (
    <>
      <div className={styles.lista}>
        <ul>
          <li>
            <h2>{user.name}</h2>
          </li>
        </ul>
        <div
          className={styles.iconeExclusao}
          onClick={() => removerItemLista(user)}
        >
          <img src={baldeLixo} alt="Logo do balde de lixo" />
        </div>
      </div>
    </>
  );
}
