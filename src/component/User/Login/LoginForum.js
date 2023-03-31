import styles from "./LoginForum.module.css";

import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";

export default function LoginForum() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { data: session, stauts } = useSession();


  const handleSignIn = async () => {
    try {
        console.log('running')
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
      <div>
        <label className="loginForum">email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>

      <div>
        <label>password</label>
        <input
          type="text"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
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
