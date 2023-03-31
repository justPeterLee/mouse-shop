import styles from "./RegisterForum.module.css";
import { useState } from "react";
import Link from "next/link";

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

export default function RegisterForum() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      if (username.length && password.length) {
        // console.log(`username: ${username} \npassowrd: ${password}`);
        await createUser(username, password)
      } else {
        alert("invalid");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
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

      <Link href="/user/login">Login</Link>

    </div>
  );
}
