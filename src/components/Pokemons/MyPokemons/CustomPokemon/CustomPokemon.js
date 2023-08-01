import styles from "./CustomPokemon.module.scss";

const CustomPokemon = (props) => {
  return (
    <div className={styles.pokemonContainer}>
      <h3>Name: {props.name}</h3>
      <h3>Type: {props.type}</h3>
      <h3>Age: {props.age}</h3>
      <h3>Height: {props.height}</h3>
      <h3>Weight: {props.weight}</h3>
    </div>
  );
};

export default CustomPokemon;
