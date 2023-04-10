import styles from "./SideFeature.module.css";
import { useEffect, useState } from "react";
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
  return (
    <div
      className={styles.container}
      style={{ backgroundColor: `${props.backgroundColor}` }}
    >
      <button className={`${styles.buttonDetails}`} style={side}>
        show details
      </button>
    </div>
  );
}
