import styles from "./MenuItems.module.scss";
import MenuDropdown from "../MenuDropdown/MenuDropdown";
import { Link } from "react-router-dom";

const MenuItems = ({ items }) => {
  return (
    <li className={styles.menuItems}>
      {items.submenu ? (
        <>
          <button type="button" aria-haspopup="menu">
            {items.title}{" "}
          </button>
          <MenuDropdown submenus={items.submenus} />
        </>
      ) : (
        <Link to={items.url}>{items.title}</Link>
      )}
    </li>
  );
};

export default MenuItems;
