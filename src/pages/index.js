import AboutModule from "@/component/HomePage/AboutModule/AboutModule";
import MainFeatureModule from "@/component/HomePage/MainFeature/MainFeature";
import SideFeature from "@/component/HomePage/SideFeature/SideFeature";
import SlideShow from "@/component/HomePage/SlideShow/SlideShow";
import styles from "../styles/Home.module.css";

import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";

const createUser = async (username, password) => {
  console.log(JSON.stringify({ username, password }));

  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
};

export default function HomePage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameIn, setUsernameIn] = useState("");
  const [passwordIn, setPasswordIn] = useState("");
  const { data: session, stauts } = useSession();

  const handleSignUp = async () => {
    try {
      if (username.length && password.length) {
        console.log(`username: ${username} \npassowrd: ${password}`);
        await createUser(username, password)
          .then((resolve) => {
            console.log(resolve, " asdfasdfasdf");
            setUsername("");
            setPassword("");
          })
          .catch((reject) => {
            console.log("Error with making new user: ", reject);
          });
      } else {
        alert("invalid");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSignIn = async () => {
    try {
      const result = await signIn("credentials", {
        redirect: false,
        username: usernameIn,
        password: passwordIn,
      });
      console.log(result)
    } catch (err) {
      console.log('Error with signing in: ', err)
    }
  };

  return (
    <div className={styles.container}>
      <MainFeatureModule />
      <SlideShow />
      <SideFeature backgroundColor={"rgb(150, 150, 150)"} right={true} />
      <SideFeature backgroundColor={"rgb(220, 230, 245)"} right={false} />
      <AboutModule />

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
      <button onClick={()=>{signOut()}}>signOut</button>
      {session ? <p>signed in</p> : <p>signed out</p>}
      {/* sign up */}
      <div>
        <label>username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
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
      <button onClick={handleSignUp}> sign up</button>
    </div>
  );
}
