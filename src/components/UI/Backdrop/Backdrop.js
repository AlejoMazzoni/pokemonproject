import React, { useContext } from "react";
import ReactDOM from "react-dom";
import styles from "./Backdrop.module.scss";
import AuthContext from "../../../context/AuthContext";

const Backdrop = (props) => {
  const ctx = useContext(AuthContext);

  return ReactDOM.createPortal(
    <div className={styles.backdrop} onClick={ctx.cancelForm}>
      {props.children}
    </div>,
    document.getElementById("portal")
  );
};

export default Backdrop;
