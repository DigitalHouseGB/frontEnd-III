import { useEffect } from 'react';
// import  {RenderizaPizza}  from './components/RenderizaPizza';
import { useState } from 'react';
// import { useEffect } from 'react'
import './App.css'

function App() {
  const [mostraPizza, setMostraPizza] = useState(false)
  const [removePizza, setRemovePizza] = useState("")

  let setPizzaFalse = () => {
    alert("Pedido será cancelado !")
    setRemovePizza("Pedido Cancelado")  
  }
  
  let setPizzaTrue = () =>{
    setMostraPizza(true)
  }

  useEffect(()=>{
    setTimeout(() => {
      setPizzaTrue()
    }, 3000);
    console.log("O componente foi atualizado");
  },[])

  return (
    <>
      {!removePizza && <h1>Seu Pedido: {mostraPizza ? 'Pizza' : '...Carregando Pedido'}</h1>}
      <button onClick={() => setPizzaFalse()}>Cancelar pedido</button>
      {removePizza && <h1>{removePizza}</h1>}
    {/* <h1>Seu Pedido:{mostraPizza ? 'Pizza' : '...Carregando Pedido'}{removePizza}</h1>
    <button onClick={() => renderizaPagina()}>Cancelar pedido</button> */}
    </>
  )
}

export default App
