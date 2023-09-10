import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import User from "./User";

const listaDeUsuario = [
  {
    userName: "Renan",
    image: "http://github.com/lmaoclost.png",
  },
  {
    userName: "Deyse",
    image: "http://github.com/deysebonisegnia.png",
  },
  {
    UserName: "Mauricio",
    image: " http://githUb.com/mauricior38.png ",
  },
];

function App() {
  return (
    <>
      <main>
        <User user={listaDeUsuario[0]} />
      </main>
    </>
  );
}

export default App;
