import { useCallback, useEffect, useState } from "react";
import styles from "./PokemonInspector.module.scss";
import getFromPokeapi from "../../../../services/pokemons";
import Pokemon from "../Pokemon/Pokemon";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PokemonInspector = () => {
  const [pokemons, setPokemons] = useState([]);
  const [url, setUrl] = useState("pokemon");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();

  const nextPage = useCallback(async () => {
    setPrevUrl(url);
    const res = await getFromPokeapi(url);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results);
  }, [url]);

  const getPokemon = async (res) => {
    const result = await Promise.all(
      res.map(async (item) => {
        return (await getFromPokeapi(item.url)).data;
      })
    );
    setPokemons(result);
  };

  useEffect(() => {
    nextPage();
  }, [url, nextPage]);

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
          <FontAwesomeIcon icon={faArrowLeft} size="sm" />
        </button>
        <div className={styles.pokemonsContainer}>
          {pokemons.map((pokemon) => {
            return (
              <Pokemon
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                image={pokemon.sprites?.front_default}
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
          <FontAwesomeIcon icon={faArrowRight} size="sm" />
        </button>
      </div>
    </>
  );
};

export default PokemonInspector;
