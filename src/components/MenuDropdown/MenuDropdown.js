import { Link } from "react-router-dom";
import styles from "./MenuDropdown.module.scss";

const MenuDropdown = ({ submenus }) => {
  return (
    <ul className={styles.dropdown}>
      {submenus?.map((submenu, index) => {
        return (
          <li key={index} className={styles.dropdownMenuItems}>
            <Link to={submenu.url}>{submenu.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MenuDropdown;
