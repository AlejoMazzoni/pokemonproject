import styles from "./Home.module.scss";
import pokemonsHome from "../../assets/images/homeImage.jpg";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { Link } from "react-router-dom";

const Home = () => {
  const ctx = useContext(AuthContext);

  return (
    <section>
      <aside className={styles.textContainer}>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
          <br />
          <br />
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <button className={styles.playButton}>Play!</button>
        {!ctx.isLoggedIn && (
          <button className={styles.playButton} onClick={ctx.onFormHandler}>
            Login
          </button>
        )}
        {ctx.isLoggedIn && (
          <Link to="/my-pokemons">
            <button className={styles.playButton}>My Pokemons</button>
          </Link>
        )}
      </aside>
      <div className={styles.imageContainer}>
        <img src={pokemonsHome} alt="pokemons" />
      </div>
    </section>
  );
};

export default Home;
