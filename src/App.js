import styles from "./App.module.scss";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import PokemonInspector from "./components/Pokemons/PokemonInspector/PokemonInspector";
import Footer from "./components/Footer/Footer";
import CreatePokemon from "./components/Pokemons/MyPokemons/CreatePokemon/CreatePokemon";

function App() {
  const [formIsVisible, setFormIsVisible] = useState(false);

  const formIsVisibleHandler = () => {
    setFormIsVisible((prevState) => !prevState);
  };

  return (
    <div className={styles.app}>
      <div className={styles.headerContainer}>
        <Header onClick={formIsVisibleHandler} />
      </div>
      <div className={styles.contentContainer}>
        <Routes>
          <Route
            path="/"
            element={<MainPage onFormIsVisible={formIsVisible} />}
          />
          <Route path="/create-pokemon" element={<CreatePokemon />} />
          <Route path="/pokemon-inspector" element={<PokemonInspector />} />
        </Routes>
      </div>
      <div className={styles.footerContainer}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
