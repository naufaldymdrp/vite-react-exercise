import React, { FC } from "react";
import styles from "./index.module.css";

const Navbar: FC = (props) => {
  return (
    <header className={styles.header}>
      <div>
        <h1>Logo</h1>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
