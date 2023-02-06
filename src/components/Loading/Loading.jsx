import React from "react";
import styles from "../Loading/Loading.module.css";
import loading_img from "../../images/loading2_img.gif";

const Loading = () => {
  return (
    <div className={styles.container}>
      <img src={loading_img} alt="loading_img" width={150} />
    </div>
  );
};

export default Loading;
