import styles from "./Menu.module.scss";
import MenuItems from "../MenuItems/MenuItems";
import { menuOptions } from "../MenuItems/MenuOptions";

const Menu = () => {
  const depthLevel = 0;

  return (
    <div className={styles.menuDropdownContainer}>
      <ul className={styles.menu}>
        {menuOptions.map((menu, index) => {
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
    </div>
  );
};

export default Menu;
