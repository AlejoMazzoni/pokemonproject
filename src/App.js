import styles from "./App.module.scss";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import MyPokemons from "./components/MyPokemons/MyPokemons";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import CreatePokemon from "./components/CreatePokemon/CreatePokemon";
import BuyPokemons from "./components/BuyPokemons/BuyPokemons";
import video from "./assets/videos/pokeballBG.mp4";

function App() {
  const [formIsVisible, setFormIsVisible] = useState(false);

  const formIsVisibleHandler = () => {
    setFormIsVisible((prevState) => !prevState);
  };

  return (
    <div className={styles.app}>
      <video autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <div className={styles.content}>
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
    </div>
  );
}

export default App;
