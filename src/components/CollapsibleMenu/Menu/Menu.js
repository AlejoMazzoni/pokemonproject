import styles from "./Menu.module.scss";
import MenuItems from "../MenuItems/MenuItems";
import { menuOptions } from "../MenuItems/MenuOptions";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
  const depthLevel = 0;

  const [openMenu, setOpenMenu] = useState(false);

  const openMenuHandler = () => {
    setOpenMenu(true);
  };

  const closeMenuHandler = () => {
    setOpenMenu(false);
  };

  return (
    <div className={styles.menuDropdownContainer}>
      {openMenu ? (
        <ul className={styles.menu}>
          <button onClick={closeMenuHandler}>
            <FontAwesomeIcon icon={faArrowLeftLong} size="1x" />
          </button>
          {menuOptions.map((menu, index) => {
            return (
              <MenuItems items={menu} key={index} depthLevel={depthLevel} />
            );
          })}
        </ul>
      ) : (
        <FontAwesomeIcon
          icon={faBars}
          size="2x"
          className={styles.menuBars}
          onClick={openMenuHandler}
        />
      )}
    </div>
  );
};

export default Menu;
