import React, { useState, useEffect, Children } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "../Todos/Todos.module.css";
import { TiTick } from "react-icons/ti";
import ViewTodo from "../ViewTodo/ViewTodo";
import Loading from "../Loading/Loading";

const Todos = () => {
  //preloader
  const [loading, setLoading] = useState(false);
  setTimeout(() => {
    setLoading(true);
  }, 1900);

  const [current, setCurrent] = useState({});
  const [id, setId] = useState();
  const [title, setTitle] = useState();
  const [isTrue, setIsTrue] = useState(false);
  const onPopup = (id, title) => {
    setId(id);
    setTitle(title);
    setIsTrue(true);
  };
  console.log(title);

  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    data();
  }, []);

  //getting all user todos....
  const data = async () =>
    await axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setApiData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  //grtting  data by user id
  const dataUsingID = async () =>
    await axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        setCurrent(res.data);
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

  useEffect(() => {
    dataUsingID();
  }, [id]);

  return (
    <>
      {loading == true ? (
        <>
          <div className={styles.container}>
            <div className={styles.left_Container}>
              <div className={styles.headings}>
                <p>Todo ID</p>
                <p>Title</p>
                <p>Status</p>
                <p>Action</p>
              </div>
              <div className={styles.main_Card}>
                {apiData?.map((data, i) => {
                  const { id, title, completed } = data;
                  // console.log(data);
                  return (
                    <>
                      <div className={styles.card}>
                        <h3>{id}</h3>
                        <h3>{title}</h3>
                        {/* <TiTick /> */}
                        <h3>
                          {completed == true ? "completd" : "incompleted"}{" "}
                        </h3>
                        <div className={styles.viewBtn}>
                          <button onClick={() => onPopup(id, title)}>
                            View Todo
                          </button>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <div className={styles.right_Container}>
              {isTrue == 1 ? (
                <>
                  <ViewTodo
                    current={current}
                    title={title}
                    isTrue={isTrue}
                    setIsTrue={setIsTrue}
                  />
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
      s
    </>
  );
};

export default Todos;
