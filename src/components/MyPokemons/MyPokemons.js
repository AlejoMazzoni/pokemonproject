import PokemonsList from "../PokemonsList/PokemonsList";
import styles from "./MyPokemons.module.scss";

const MyPokemons = () => {
  return (
    <div className={styles.myPokemonsPageContainer}>
      <PokemonsList />
    </div>
  );
};

export default MyPokemons;
