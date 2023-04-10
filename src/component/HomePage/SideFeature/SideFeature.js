import styles from "./SideFeature.module.css";
import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
export default function SideFeature(props) {
  const [side, setSide] = useState({});

  useEffect(() => {
    if (props.right) {
      setSide({
        marginTop: "20rem",
        marginLeft: "70%",
      });
    } else {
      setSide({
        marginTop: "20rem",
        marginLeft: "15%",
      });
    }
  }, []);

  const dispatch = useDispatch();
  const getAll = () => {
    dispatch({ type: "FETCH_MAIN_PRODUCTS" });
  };
  return (
    <div
      className={styles.container}
      style={{ backgroundColor: `${props.backgroundColor}` }}
    >
      <button className={`${styles.buttonDetails}`} style={side} onClick={getAll}>
        show details
      </button>
    </div>
  );
}
