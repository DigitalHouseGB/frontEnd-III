import styles from './PokemonCards.module.css';
let PokemonCards = ({user}) => {
    return(
        <>
            <div >
                <img className={styles.card} src={user} alt={`Imagem de um Pokemon aqui`} />
            </div>
        </>
    )
}

export default PokemonCards;