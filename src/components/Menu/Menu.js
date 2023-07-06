import styles from "./Menu.module.scss";
import MenuItems from "../MenuItems/MenuItems";
import { menuOptions } from "../MenuItems/MenuOptions";

const Menu = () => {
  return (
    <div className={styles.menuDropdownContainer}>
      <ul className={styles.menu}>
        {menuOptions.map((menu, index) => {
          return <MenuItems items={menu} key={index} />;
        })}
      </ul>
    </div>
  );
};

export default Menu;