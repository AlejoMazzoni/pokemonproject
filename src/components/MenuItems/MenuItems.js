import styles from "./MenuItems.module.scss";
import MenuDropdown from "../MenuDropdown/MenuDropdown";
import { Link } from "react-router-dom";

const MenuItems = ({ items }) => {
  return (
    <li className={styles.menuItems}>
      {items.submenu ? (
        <div>
          <Link
            className={styles.optionDropdown}
            role="button"
            aria-haspopup="menu"
          >
            {items.title}
          </Link>
          <MenuDropdown submenus={items.submenu} />
        </div>
      ) : (
        <Link to={items.url}>{items.title}</Link>
      )}
    </li>
  );
};

export default MenuItems;
