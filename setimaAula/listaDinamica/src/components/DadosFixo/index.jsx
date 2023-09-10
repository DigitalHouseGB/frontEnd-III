import styles from "../DadosFixo/DadosFixo.module.css";
import Input from "./components/Input";

let DadosFixo = ({ handleSubmit }) => {
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <div className={styles.insercaoDadosUsuario}>
          <p>Nome</p>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Digite um novo item para a lista"
          />
          <p>Cor</p>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Digite um novo item para a lista"
          />
        </div>
        <button>Adicionar</button>
      </form>
      <h1>CORES FAVORITAS</h1>
    </main>
  );
};

export default DadosFixo;
