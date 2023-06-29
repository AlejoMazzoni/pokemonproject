import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./AddPokemon.module.scss";
import NewPokemonList from "../NewPokemonList/NewPokemonList";

const AddPokemon = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [openPokemonsList, setOpenPokemonsList] = useState(false);
  const [error, setError] = useState(null);

  const nameInputRef = useRef();
  const typeSelectedRef = useRef();
  const heightSelectedRef = useRef();
  const weightSelectedRef = useRef();
  const ageSelectedRef = useRef();

  const fetchPokemons = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://pokemonapi-87ce3-default-rtdb.firebaseio.com/pokemon.json"
      );
      if (!response.ok) {
        throw new Error("Somenthing went wrong!");
      }

      const data = await response.json();

      const loadedPokemons = [];

      for (const key in data) {
        loadedPokemons.push({
          id: key,
          name: data[key].name,
          type: data[key].type,
          age: data[key].age,
          height: data[key].height,
          weight: data[key].weight,
        });
      }
      setPokemons(loadedPokemons);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchPokemons();
  }, [fetchPokemons]);

  const addPokemonHandler = async (pokemon) => {
    const response = await fetch(
      "https://pokemonapi-87ce3-default-rtdb.firebaseio.com/pokemon.json",
      {
        method: "POST",
        body: JSON.stringify(pokemon),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };

  const submitHandler = () => {
    const pokemon = {
      name: nameInputRef.current.value,
      type: typeSelectedRef.current.value,
      height: heightSelectedRef.current.value,
      weight: weightSelectedRef.current.value,
      age: ageSelectedRef.current.value,
    };

    addPokemonHandler(pokemon);
  };

  const showPokemonsListHandler = () => {
    setOpenPokemonsList((prevState) => !prevState);
  };

  const onClear = () => {
    nameInputRef.current.value = "";
    typeSelectedRef.current.value = "";
    heightSelectedRef.current.value = "";
    weightSelectedRef.current.value = "";
    ageSelectedRef.current.value = "";
  };

  let content = <p>Found no pokemons!</p>;

  if (pokemons.length > 0) {
    content = <NewPokemonList pokemons={pokemons} />;
    console.log(pokemons, "asdsad");
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <div>
      <form
        className={styles.addPokemonForm}
        onSubmit={(event) => {
          event.preventDefault();
          addPokemonHandler();
          submitHandler();
          onClear();
        }}
      >
        <div className={styles.infoContainer}>
          <label className={styles.newPokemonLabel} htmlFor="name">
            Pokemon name
          </label>
          <input
            className={styles.newPokemonInput}
            ref={nameInputRef}
            type="name"
            name="name"
            id="name"
            placeholder="New name"
          />
        </div>
        <div className={styles.infoContainer}>
          <label className={styles.newPokemonLabel} htmlFor="age">
            Pokemon age
          </label>
          <input
            className={styles.newPokemonInput}
            name="age"
            type="age"
            id="age"
            ref={ageSelectedRef}
            placeholder="New age"
          />
        </div>
        <div className={styles.infoContainer}>
          <label className={styles.newPokemonLabel} htmlFor="type">
            Pokemon type
          </label>
          <select name="type" id="type" ref={typeSelectedRef}>
            <option value="" disabled selected hidden>
              Select type
            </option>
            <option value="Water">Water</option>
            <option value="Fire">Fire</option>
            <option value="Earth">Earth</option>
            <option value="Wind">Wind</option>
            <option value="Rock">Rock</option>
            <option value="Electric">Electric</option>
            <option value="Plant">Plant</option>
          </select>
        </div>
        <div className={styles.infoContainer}>
          <label className={styles.newPokemonLabel} htmlFor="height">
            Pokemon height
          </label>
          <select name="height" id="height" ref={heightSelectedRef}>
            <option value="" disabled selected>
              Select height
            </option>
            <option value="XS">25-50 cm</option>
            <option value="S">50 to 100 cm</option>
            <option value="M">1 to 2 mts</option>
            <option value="L">3 to 4 mts</option>
            <option value="XL">5 to 6 mts</option>
          </select>
        </div>
        <div className={styles.infoContainer}>
          <label className={styles.newPokemonLabel} htmlFor="weight">
            Pokemon weight
          </label>
          <select name="weight" id="weight" ref={weightSelectedRef}>
            <option value="" disabled selected>
              Select weight
            </option>
            <option value="XXS">500 to 1000 gr</option>
            <option value="XS">1 to 2 KL</option>
            <option value="S">3 to 5 KL</option>
            <option value="M">6 to 10 KL</option>
            <option value="L">11 to 30 KL</option>
            <option value="XL">31+ KL</option>
          </select>
        </div>
        <button className={styles.submitButton} type="submit">
          Create
        </button>
      </form>
      {!openPokemonsList && (
        <button className={styles.openButton} onClick={showPokemonsListHandler}>
          Open pokemon list
        </button>
      )}
      {openPokemonsList && (
        <div className={styles.contentContainer}>
          <button
            className={styles.closeButton}
            onClick={showPokemonsListHandler}
          >
            X
          </button>
          {content}
          <div className={styles.fetchButtonContainer}>
            <button className={styles.fetchButton} onClick={fetchPokemons}>
              Refresh
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddPokemon;
