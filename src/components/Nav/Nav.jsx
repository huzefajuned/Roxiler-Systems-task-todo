import React from "react";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <h2>
          Rox- <span>Todo</span>
        </h2>
      </div>
      <div className={styles.search}>
        <input type="text" name="" id="" placeholder="Search TodoSs Here.." />
      </div>
    </div>
  );
};

export default Nav;
