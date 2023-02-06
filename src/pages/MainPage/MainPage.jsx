import React from "react";
import Nav from "../../components/Nav/Nav";
import Todos from "../../components/Todos/Todos";
import styles from "../MainPage/MainPage.module.css";

const MainPage = () => {
  return (
    <div className={styles.container}>
      <Nav />
      <Todos />
    </div>
  );
};

export default MainPage;
