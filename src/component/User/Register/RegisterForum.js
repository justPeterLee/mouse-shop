import styles from "./RegisterForum.module.css";
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
    <div>
        <div>
        <label>First Name</label>
        <input
          type="text"
          value={first}
          onChange={(e) => {
            setFirst(e.target.value);
          }}
        />
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          value={last}
          onChange={(e) => {
            setLast(e.target.value);
          }}
        />
      </div>
      <div>
        <label>email</label>
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
      <button onClick={handleSignUp}> sign up</button>

      <Link href="/user/login">Login</Link>
    </div>
  );
}
