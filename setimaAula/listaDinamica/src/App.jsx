import "./App.css";
import Dados from "./components/Dados";
import DadosFixo from "./components/DadosFixo";
import { useState } from "react";

function Card() {
  const [produtosLista, setProdutosLista] = useState([]);
  let adicionarDadosLista = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const user = Object.fromEntries(formData);
    setProdutosLista([...produtosLista, user]);
  };

  let removerItemLista = (user) => {
    const newList = produtosLista.filter((itemRemoved) => {
      return user !== itemRemoved;
    });
    setProdutosLista(newList);
  };
  return (
    <main>
      <h1>ADICIONAR NOVA COR</h1>
      <DadosFixo handleSubmit={adicionarDadosLista} />
      <div className="lista">
        {produtosLista &&
          produtosLista.map((item, index) => {
            return (
              <Dados
                key={index}
                user={item}
                removerItemLista={removerItemLista}
              />
            );
          })}
      </div>
    </main>
  );
}

export default Card;
