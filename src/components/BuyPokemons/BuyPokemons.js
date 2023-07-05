import { useEffect, useState } from "react";
import Pokemon from "../Pokemon/Pokemon";
import styles from "./BuyPokemons.module.scss";
import getPokemons from "../../services/pokemons";
import axios from "axios";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BuyPokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();

  const nextPage = async () => {
    setPrevUrl(url);
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results);
  };

  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url);
      setPokemons((state) => [...state, result.data]);
    });
  };

  useEffect(() => {
    nextPage();
  }, [url]);

  // const getPokemonsTransformed = async () => {
  //   setPokemons(await getPokemons());
  // };

  // useEffect(() => {
  //   getPokemonsTransformed();
  // }, []);

  return (
    <>
      <div className={styles.buyPokemonsContainer}>
        <button
          className={styles.fetchButton}
          onClick={() => {
            setPokemons([]);
            setUrl(prevUrl);
          }}
          disabled={!prevUrl}
        >
          <FontAwesomeIcon icon={faArrowLeft} size="m" />
        </button>
        <div className={styles.pokemonsContainer}>
          {pokemons.map((pokemon) => {
            console.log(pokemon);
            return (
              <Pokemon
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                image={pokemon.sprites.front_default}
                type={pokemon.types[0].type.name}
              />
            );
          })}
        </div>

        <button
          className={styles.fetchButton}
          onClick={() => {
            setPokemons([]);
            setUrl(nextUrl);
          }}
        >
          <FontAwesomeIcon icon={faArrowRight} size="m" />
        </button>
      </div>
    </>
  );
};

export default BuyPokemons;
