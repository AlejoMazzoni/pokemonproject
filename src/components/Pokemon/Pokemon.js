import styles from "./Pokemon.module.scss";

const Pokemon = (props) => {
  const pokemonTypeColorMap = new Map([
    ["grass", "#18C723"],
    ["poison", "#B556F5"],
    ["water", "#3FC7B3"],
    ["fire", "#E03A3A"],
    ["electric", "#F3FA23"],
    ["bug", "#A6D7A8"],
    ["normal", "#C7840D"],
    ["fairy", "#F4CAFA"],
    ["ground", "#EAA82C"],
  ]);

  return (
    <div
      className={styles.infoContainer}
      style={{ backgroundColor: pokemonTypeColorMap.get(props.type) }}
    >
      <div className={styles.nameContainer}>
        <h4>{props.name}</h4>
      </div>
      <img src={props.image} />
      <h4>{props.type}</h4>
    </div>
  );
};

export default Pokemon;
