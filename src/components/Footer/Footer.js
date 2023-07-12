import { Link } from "react-router-dom";

import styles from "./Footer.module.scss";
import pokeapiImage from "../../assets/images/pokeapiFooter.png";
import pokeball from "../../assets/images/pokeball.png";
import facebookIcon from "../../assets/images/facebookIcon.png";
import linkedinIcon from "../../assets/images/linkedinIcon.png";
import twitterIcon from "../../assets/images/twitterIcon.png";
import githubIcon from "../../assets/images/githubIcon.png";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.linksContainer}>
        <div className={styles.pageLinks}>
          <ul>
            <li>Contact</li>
            <li>About Me</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className={styles.socialMedia}>
          <Link target="_blank" to="https://www.facebook.com/alee.mazzoni">
            <img src={facebookIcon} className={styles.icons} />
          </Link>
          <Link target="_blank" to="https://twitter.com/AleeMazzoni">
            <img src={twitterIcon} className={styles.icons} />
          </Link>
          <Link
            target="_blank"
            to="https://www.linkedin.com/in/alejo-mazzoni-9a1ab7191/"
          >
            <img src={linkedinIcon} className={styles.icons} />
          </Link>
          <Link target="_blank" to="https://github.com/AlejoMazzoni">
            <img src={githubIcon} className={styles.icons} />
          </Link>
        </div>
      </div>
      <div className={styles.poweredByContainer}>
        <h1>Powered By</h1>
        <img src={pokeapiImage} className={styles.pokeapiImage} />
        <img src={pokeball} className={styles.pokeball} />
      </div>
    </div>
  );
};

export default Footer;