import { useState, useEffect } from 'react'
import styles from './App.module.css';
import PokemonCards from "./components/PokemonCards"


function App() {
  const [pokeList, setPokeList] = useState([])
  
  useEffect(() => {
      let getPokemonFromApi = async () => {
        let imagesPokemons = [];
        for (let index = 1; index <= 21; index++) {
        try {
          let responsePokeApi = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}/`)
          if (responsePokeApi.status === 200){
              let pokeListResponse = await responsePokeApi.json()
              imagesPokemons.push(pokeListResponse.sprites.back_default); 
          }
        } catch (error) {
          console.log(error.message); 
        }
      }
      setPokeList(imagesPokemons)
    }
      getPokemonFromApi();
    },[])
  return (
    <main>
    <h1>Pokemon API</h1>
    <div className={styles.cards}>
    {pokeList && (
      pokeList.map((pokemon, index) =>{
        return(
        <PokemonCards key={index} user={pokemon}/>
        )
      })
    )}
    </div>
    {/* <img src={pokeList[0]} alt='Imgs Pokemons'/> */}
    </main>
  )
}
/*           {listaDeUsuarios && (
            listaDeUsuarios.map((usuario, index) => {
              return (
                <User key={index} user={usuario} />
              )
            })
          )} */
export default App
