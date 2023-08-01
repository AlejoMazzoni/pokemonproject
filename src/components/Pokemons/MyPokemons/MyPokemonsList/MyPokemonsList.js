import CustomPokemon from "../CustomPokemon/CustomPokemon";
import styles from "./MyPokemonsList.module.scss";

const MyPokemonsList = (props) => {
  return (
    <ul className={styles.newPokemonListContainer}>
      {props.pokemons.map((pokemon) => {
        return (
          <CustomPokemon
            key={pokemon.id}
            name={pokemon.name}
            type={pokemon.type}
            age={pokemon.age}
            weight={pokemon.weight}
            height={pokemon.height}
          />
        );
      })}
    </ul>
  );
};

export default MyPokemonsList;
