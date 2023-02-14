import styles from "./ContactForm.module.css";
export default function ContactForm() {
  return (
    <div className={styles.container}>
      <h1> contact us</h1>
      <div className={styles.formContainer}>
        <form className={styles.formContainer}>
          <div>
            <input className={styles.name} placeholder="name"/>
            <input  className={styles.email} placeholder="email"/>
          </div>
          <input  className={styles.subject} placeholder="subject"/>
          <textarea  className={styles.comment} placeholder="comment" rows={10} cols={65}/>
          <button  className={styles.formButton}>submit</button>
        </form>
      </div>
    </div>
  );
}
