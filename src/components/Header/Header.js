import { useContext, useState } from "react";
import styles from "./Header.module.scss";
import AuthContext from "../../context/AuthContext";
import { Link } from "react-router-dom";

const Header = (props) => {
  const ctx = useContext(AuthContext);

  const [togglePokemonMenu, setTogglePokemonMenu] = useState(false);

  const pokemonMenuToggleHandler = () => {
    setTogglePokemonMenu((prevState) => !prevState);
  };

  return (
    <header className={styles.header}>
      <div className={styles.titleContainer}>
        <h1>Pokemons</h1>
      </div>
      <div className={styles.menuContainer}>
        <div className={styles.loggedInMenu}>
          {ctx.isLoggedIn ? (
            <ul className={styles.loggedInMenu}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li
                className={styles.dropdownMenuContainer}
                onClick={pokemonMenuToggleHandler}
              >
                <h4>Pokemons</h4>
                {togglePokemonMenu && (
                  <ul className={styles.dropdownMenu}>
                    <li>
                      <Link to="/my-pokemons">My Pokemons</Link>
                    </li>
                    <li>
                      <Link to="/create-pokemon">Create Pokemon</Link>
                    </li>
                    <li>
                      <Link to="/buy-pokemons">Buy Pokemons</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link>Account</Link>
              </li>
            </ul>
          ) : (
            <ul className={styles.loggedOutMenu}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          )}
          {ctx.isLoggedIn && (
            <button className={styles.authButton} onClick={ctx.onLogout}>
              Log out
            </button>
          )}
        </div>
        {!ctx.isLoggedIn && (
          <button className={styles.authButton} onClick={ctx.onFormHandler}>
            Log in
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
