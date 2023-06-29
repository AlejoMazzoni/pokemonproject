import styles from "./App.module.css";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import MyPokemons from "./components/MyPokemons/MyPokemons";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import CreatePokemon from "./components/CreatePokemon/CreatePokemon";
import BuyPokemons from "./components/BuyPokemons/BuyPokemons";

function App() {
  const [formIsVisible, setFormIsVisible] = useState(false);

  const formIsVisibleHandler = () => {
    setFormIsVisible((prevState) => !prevState);
  };

  return (
    <div className={styles.app}>
      <Header onClick={formIsVisibleHandler} />
      <Routes>
        <Route
          path="/"
          element={<MainPage onFormIsVisible={formIsVisible} />}
        />
        <Route path="/my-pokemons" element={<MyPokemons />} />
        <Route path="/create-pokemon" element={<CreatePokemon />} />
        <Route path="/buy-pokemons" element={<BuyPokemons />} />
      </Routes>
    </div>
  );
}

export default App;
