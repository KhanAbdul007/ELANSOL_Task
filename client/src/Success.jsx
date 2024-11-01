import { useEffect, useState } from "react";

const Success = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Retrieve the user's name from local storage
    const name = localStorage.getItem("userName");
    if (name) {
      setUserName(name);
    }
  }, []);
  return (
    <div>
      <h3>{userName ? `Hello, ${userName}!` : "Welcome!"}</h3>
      <h1>Successfully Logged In</h1>
      <p>Welcome to your dashboard!</p>
    </div>
  );
};

export default Success;
