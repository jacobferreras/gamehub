import { useState } from "react";

const useCredentialsInput = () => {
  const [ign, setAccountIgn] = useState("");
  const [userName, setUserName] = useState("");
  const [rank, setRank] = useState("");
  const [password, setPassword] = useState("");

  const resetInputs = () => {
    setAccountIgn("");
    setUserName("");
    setRank("");
    setPassword("");
  };

  return {
    ign,
    setAccountIgn,
    userName,
    setUserName,
    rank,
    setRank,
    password,
    setPassword,
    resetInputs,
  };
};

export default useCredentialsInput;
