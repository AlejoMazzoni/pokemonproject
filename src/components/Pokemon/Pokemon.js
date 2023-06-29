import styles from "./Pokemon.module.scss";

const Pokemon = (props) => {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.pokemonInfo}>
        <h2>{props.name}</h2>
        <img src={props.image} />
      </div>
    </div>
  );
};

export default Pokemon;
