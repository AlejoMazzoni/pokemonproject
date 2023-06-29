import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import Login from "../Authentication/Login";
import styles from "./MainPage.module.scss";
import Home from "../Home/Home";

const MainPage = (props) => {
  const ctx = useContext(AuthContext);

  return (
    <div className={styles.mainPageContainer}>
      {ctx.onFormIsVisible && !ctx.isLoggedIn && <Login />}
      <Home />
    </div>
  );
};

export default MainPage;
