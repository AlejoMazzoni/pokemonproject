import styles from "./MenuItems.module.scss";
import MenuDropdown from "../MenuDropdown/MenuDropdown";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);
  let clickOutsideRef = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (
        dropdown &&
        clickOutsideRef.current &&
        !clickOutsideRef.current.contains(event.target)
      ) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  return (
    <li className={styles.menuItems} ref={clickOutsideRef}>
      {items.submenu ? (
        <>
          <Link
            className={styles.optionDropdown}
            role="button"
            aria-haspopup={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title}
          </Link>
          <MenuDropdown
            submenus={items.submenu}
            dropdown={dropdown}
            depthLevel={depthLevel}
          />
        </>
      ) : (
        <Link to={items.url}>{items.title}</Link>
      )}
    </li>
  );
};

export default MenuItems;
