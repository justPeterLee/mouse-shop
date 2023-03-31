import styles from "./LoginForum.module.css";

import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";

export default function LoginForum() {

  const [usernameIn, setUsernameIn] = useState("");
  const [passwordIn, setPasswordIn] = useState("");
  const { data: session, stauts } = useSession();


  const handleSignIn = async () => {
    try {
        console.log('running')
      const result = await signIn("credentials", {
        redirect: false,
        username: usernameIn,
        password: passwordIn,
      });
      console.log(result);
    } catch (err) {
      console.log("Error with signing in: ", err);
    }
  };

  return (
    <div className={styles.login_body}>
      <div>
        <label>username</label>
        <input
          type="text"
          value={usernameIn}
          onChange={(e) => {
            setUsernameIn(e.target.value);
          }}
        />
      </div>

      <div>
        <label>password</label>
        <input
          type="text"
          value={passwordIn}
          onChange={(e) => {
            setPasswordIn(e.target.value);
          }}
        />
      </div>

      <button onClick={handleSignIn}> sign in</button>
      <button
        onClick={() => {
          signOut();
        }}
      >
        signOut
      </button>
      {session ? <p>signed in</p> : <p>signed out</p>}
      {/* sign up */}
      <Link href="/user/register">Register</Link>
    </div>
  );
}
