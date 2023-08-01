import { useContext, useEffect, useReducer, useRef, useState } from "react";

import Button from "../UI/Button/Button";
import styles from "./Login.module.scss";
import AuthContext from "../../context/AuthContext";
import Backdrop from "../UI/Backdrop/Backdrop";
import pokedexImage from "../../assets/images/pokedexImage.png";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: state.val, isValid: action.val.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

const Login = (props) => {
  const ctx = useContext(AuthContext);

  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      ctx.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

  return (
    <Backdrop>
      <div
        className={styles.formContainer}
        onClick={(e) => e.stopPropagation()}
      >
        {!ctx.isLoggedIn && (
          <form onSubmit={submitHandler}>
            <div className={styles.emailContainer}>
              <label htmlFor="email">E-mail</label>
              <input
                ref={emailInputRef}
                type="email"
                name="email"
                id="email"
                value={emailState.value}
                onChange={emailChangeHandler}
              />
            </div>
            <div className={styles.passwordContainer}>
              <label htmlFor="password">Password</label>
              <input
                ref={passwordInputRef}
                type="password"
                name="password"
                id="password"
                onChange={passwordChangeHandler}
              />
            </div>
            <div className={styles.buttonsContainer}>
              <Button type="submit">Login</Button>
              <Button onClick={ctx.cancelForm}>Cancel</Button>
            </div>
          </form>
        )}
      </div>
      <div className={styles.pokedexBackground}>
        <img src={pokedexImage} alt="Pokedex Login" />
      </div>
    </Backdrop>
  );
};

export default Login;
