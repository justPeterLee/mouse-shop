import styles from "./LoginForum.module.css";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";

import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";

import Link from "next/link";

export default function LoginForum() {
  // user info state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [iconStyleOne, setIconStyleOne] = useState({});
  const [iconStyleTwo, setIconStyleTwo] = useState({});

  // token session data
  const { data: session, stauts } = useSession();

  // event handler (checks if credientals are crediable or not)
  const handleSignIn = async () => {
    try {
      console.log("running");
      const result = await signIn("credentials", {
        redirect: false,
        email: email,
        password: password,
      });
      console.log(result);
    } catch (err) {
      console.log("Error with signing in: ", err);
    }
  };

  return (
    <div className={styles.login_body}>
      <div className={styles.login_forum_container}>
        {/* title */}
        <div className={"login-title-container"}>
          <p className={`${styles.title_p} login-title-p`}>
            Login Your Account
          </p>
        </div>

        {/* email input */}
        <div className={`${styles.email_container} login-input-container`}>
          {/* <label className="user-forum-label">email</label> */}
          <label
            className={`${styles.login_label_icon} login-label-icon`}
            style={iconStyleOne}
          >
            <AiOutlineUser size={30} />
          </label>
          <input
            className="login-forum"
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            onFocus={() => {
              setIconStyleOne({ backgroundColor: "rgb(220,220,255)" });
            }}
            onBlur={() => {
              setIconStyleOne({});
            }}
            placeholder={"email"}
          />
        </div>

        {/* password input */}
        <div className={`${styles.password_container} login-input-container`}>
          {/* <label className="user-forum-label">password</label> */}
          <label
            className={`${styles.login_label_icon} login-label-icon`}
            style={iconStyleTwo}
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
            onFocus={() => {
              setIconStyleTwo({ backgroundColor: "rgb(220,220,255)" });
            }}
            onBlur={() => {
              setIconStyleTwo({});
            }}
            placeholder={"password"}
          />
        </div>

        {/* sign in button */}
        <button onClick={handleSignIn} className="login-button">
          sign in
        </button>

        <button
          onClick={() => {
            signOut();
          }}
        >
          signOut
        </button>
        {/* {session ? <p>signed in</p> : <p>signed out</p>} */}
        
        {/* sign up link */}
        <Link href="/user/register">
          <p className="login-button-switch">create account</p>
        </Link>
      </div>
    </div>
  );
}
