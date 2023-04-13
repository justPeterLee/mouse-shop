import styles from "./ProductReviewItem.module.css";
import ReviewRate from "./ReviewRate/ReviewRate";
import { useEffect, useRef, useState } from "react";
export default function ProductReviewItem({ title, rate, name, date, desc }) {
  const rateDesc = useRef();

  const [showText, setShowText] = useState(false);
  const toggleTextState = ()=>{
    setShowText(!showText);
  }
  useEffect(() => {
    
  }, []);

  return (
    <div className={styles.body}>
      <div className={styles.title}>{title}</div>
      <div className={styles.info}>
        <div className={styles.rate}>
          <ReviewRate rate={rate}/>
        </div>
        <div className={styles.name}>{name}</div>
        <div className={styles.date}>{date}</div>
      </div>
      <div className={styles.text}>
        <p ref={rateDesc} className={showText ? styles.show :styles.hide }>
          {desc} <span className={styles.dots} style={showText ? {display: 'none'} : {}}>...</span>
        </p>
        <span>
          <button className={styles.showComment} onClick={toggleTextState}>
            {showText ? <p>Less</p> : <p>More</p>}
          </button>
        </span>
      </div>
    </div>
  );
}
