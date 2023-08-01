import { useState } from "react";
import AddPokemon from "../AddPokemon/AddPokemon";
import styles from "./CreatePokemon.module.scss";

const CreatePokemon = () => {
  const [showCreatePokemon, setShowCreatePokemon] = useState(false);

  const toggleCreatePokemonHandler = () => {
    setShowCreatePokemon((prevState) => !prevState);
  };

  return (
    <div className={styles.createPokemonContainer}>
      <div className={styles.textContainer}>
        <h1>Create your own pokemon!</h1>
        <h3>
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
          <br />
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
          enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
          autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
          nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
          voluptas nulla pariatur?"
        </h3>
      </div>
      <div className={styles.newPokemonContainer}>
        {showCreatePokemon && (
          <button
            className={styles.closeCreatePokemon}
            onClick={toggleCreatePokemonHandler}
          >
            X
          </button>
        )}
        {!showCreatePokemon && (
          <button
            className={styles.openCreatePokemon}
            onClick={toggleCreatePokemonHandler}
          >
            Create your Pokemon!
          </button>
        )}
        {showCreatePokemon && <AddPokemon />}
      </div>
    </div>
  );
};

export default CreatePokemon;
