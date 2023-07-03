import { useContext } from "react";
import { Link } from "react-router-dom";

import styles from "./Home.module.scss";
import pokemonsHome from "../../assets/images/homeImage.jpg";
import AuthContext from "../../context/AuthContext";
import play from "../../assets/images/playButton.png";
import myPokemons from "../../assets/images/myPokemonsButton.png";
import loginButton from "../../assets/images/loginButton.png";

const Home = () => {
  const ctx = useContext(AuthContext);

  return (
    <section>
      <aside>
        <div className={styles.textContainer}>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
            <br />
            <br />
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
        <div className={styles.buttonsContainer}>
          <button className={styles.buttons}>
            <img src={play} className={styles.playImage} />
          </button>
          {!ctx.isLoggedIn && (
            <button className={styles.buttons} onClick={ctx.onFormHandler}>
              <img src={loginButton} className={styles.loginButton} />
            </button>
          )}
          {ctx.isLoggedIn && (
            <Link to="/my-pokemons">
              <button className={styles.buttons}>
                <img src={myPokemons} className={styles.myPokemonsImage} />
              </button>
            </Link>
          )}
        </div>
      </aside>
      <div className={styles.imageContainer}>
        <img src={pokemonsHome} alt="pokemons" />
      </div>
    </section>
  );
};

export default Home;
