import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  const handleSubmit = () => {
    setUser({ userName, password });
  };

  return (
    <>
      <h1>Please Login</h1>
          <input
              className="border-2"
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
        type="text"
      />
          <input
              className="border-2"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="text"
      />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default Login;
