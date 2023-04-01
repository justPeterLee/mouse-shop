import styles from "./RegisterForum.module.css";
import { BiFirstPage, BiLastPage } from "react-icons/bi";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";

import { useState } from "react";
import Link from "next/link";

const createUser = async (first, last, email, password) => {
  console.log(JSON.stringify({ first, last, email, password }));

  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ first, last, email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
};

export default function RegisterForum() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [iconStyleOne, setIconStyleOne] = useState({});
  const [iconStyleTwo, setIconStyleTwo] = useState({});
  const [iconStyleThree, setIconStyleThree] = useState({});
  const [iconStyleFour, setIconStyleFour] = useState({});

  const handleSignUp = async () => {
    try {
      if (email.length && password.length) {
        // console.log(`username: ${username} \npassowrd: ${password}`);
        await createUser(first, last, email, password);
      } else {
        alert("invalid");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={styles.register_body}>
      <div className={styles.register_forum_container}>
        <div className={"login-title-container"}>
          <p className={`${styles.title_p} login-title-p`}>Create Account</p>
        </div>
        <div className={`${styles.email_container} login-input-container`}>
          {/* <label>First Name</label> */}
          <label
            className={`${styles.login_label_icon} login-label-icon`}
            style={iconStyleOne}
          >
            <BiFirstPage size={30} />
          </label>
          <input
            className="login-forum"
            type="text"
            value={first}
            onChange={(e) => {
              setFirst(e.target.value);
            }}
            onFocus={()=>{
              setIconStyleOne({backgroundColor: 'rgb(220,220,255)'})
            }}
            onBlur={()=>{
              setIconStyleOne({})
            }}
            placeholder="first name"
          />
        </div>
        <div className={`${styles.email_container} login-input-container`}>
          {/* <label>Last Name</label> */}
          <label
            className={`${styles.login_label_icon} login-label-icon`}
            style={iconStyleTwo}
          >
            <BiLastPage size={30} />
          </label>
          <input
            className="login-forum"
            type="text"
            value={last}
            onChange={(e) => {
              setLast(e.target.value);
            }}
            onFocus={()=>{
              setIconStyleTwo({backgroundColor: 'rgb(220,220,255)'})
            }}
            onBlur={()=>{
              setIconStyleTwo({})
            }}
            placeholder="last name"
          />
        </div>
        <div className={`${styles.email_container} login-input-container`}>
          {/* <label>email</label> */}
          <label
            className={`${styles.login_label_icon} login-label-icon`}
            style={iconStyleThree}
          >
            <AiOutlineMail size={30} />
          </label>
          <input
            className="login-forum"
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            onFocus={()=>{
              setIconStyleThree({backgroundColor: 'rgb(220,220,255)'})
            }}
            onBlur={()=>{
              setIconStyleThree({})
            }}
            placeholder="email"
          />
        </div>
        <div className={`${styles.email_container} login-input-container`}>
          {/* <label>password</label> */}
          <label
            className={`${styles.login_label_icon} login-label-icon`}
            style={iconStyleFour}
          >
            <AiOutlineLock size={30} />
          </label>
          <input
            className="login-forum"
            type="text"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            onFocus={()=>{
              setIconStyleFour({backgroundColor: 'rgb(220,220,255)'})
            }}
            onBlur={()=>{
              setIconStyleFour({})
            }}
            placeholder="password"
          />
        </div>
        <button onClick={handleSignUp} className="login-button">
          {" "}
          sign up
        </button>

        <Link href="/user/login"><p>have an account</p></Link>
      </div>
    </div>
  );
}
