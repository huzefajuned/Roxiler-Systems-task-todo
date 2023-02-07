import React from "react";
import styles from "../PopUp/PopUp.module.css";

const PopUp = ({ current, title, isTrue, setOpen }) => {
  const { id, username, email } = current;
  console.log(id, title, username, email);
  return (
    <div className={styles.popup_container}>
      <div className={styles.container}>
        <button onClick={() => setOpen(false)}>X</button>
        {/* <h2>User Details</h2> */}
        <div className={styles.card}>
          <h3>
            Todo ID <span> {id}</span>
          </h3>
          <h3>
            Todo Titile <span>{title} </span>
          </h3>
          <h3>
            User ID <span> 1</span>
          </h3>
          <h3>
            Name <span> {username}</span>
          </h3>
          <h3>
            Email <span> {email}</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
