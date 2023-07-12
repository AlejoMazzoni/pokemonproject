import { Link } from "react-router-dom";
import styles from "./MenuDropdown.module.scss";
import MenuItems from "../MenuItems/MenuItems";

const MenuDropdown = ({ submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;

  const dropdownClass = depthLevel > 1 ? styles.dropdownSubMenu : "";

  return (
    <ul
      className={`${styles.dropdown} ${dropdownClass} ${
        dropdown ? styles.show : ""
      }`}
    >
      {submenus?.map((submenu, index) => {
        return (
          <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
        );
      })}
    </ul>
  );
};

export default MenuDropdown;
