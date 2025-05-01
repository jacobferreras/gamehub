import React, { useEffect } from "react";
import CustomInputField from "../ui/CustomInputField";
import useCredentialsInput from "../../hooks/useCredentialsInput";

const EditModal = ({ closeModal, onUpdateItem, account }) => {
  const {
    ign,
    setAccountIgn,
    userName,
    setUserName,
    password,
    setPassword,
    rank,
    setRank,
    resetInputs,
  } = useCredentialsInput();

  useEffect(() => {
    setAccountIgn(account.ign);
    setUserName(account.userName);
    setPassword(account.password);
    setRank(account.rank);
  }, []);

  const handleUpdteItem = async () => {
    if (ign.trim() && userName.trim() && password.trim() && rank) {
      onUpdateItem({ ign, userName, password, rank });
      resetInputs();
      closeModal();
    }
  };
  return (
    <div className="modal modal-open modal-bottom sm:modal-middle">
      <div className="modal-box flex flex-col justify-center items-center">
        <h3 className="font-bold text-lg">Edit Task</h3>
        <p className="py-4">Edit the details of your task below:</p>
        <div className="flex flex-col gap-2 w-full justify-center items-center">
          <div className="text-sm font-semibold flex justify-start w-full pl-20">
            Ign:
          </div>
          <CustomInputField
            type="text"
            placeholder={account.ign}
            value={ign}
            onChange={(e) => setAccountIgn(e.target.value)}
          />
          <div className="text-sm font-semibold flex justify-start w-full pl-20 ">
            User Name:
          </div>
          <CustomInputField
            type="text"
            value={userName}
            placeholder={account.userName}
            onChange={(e) => setUserName(e.target.value)}
          />

          <div className="text-sm font-semibold flex justify-start w-full pl-20 ">
            Password:
          </div>
          <CustomInputField
            type="text"
            value={password}
            placeholder={account.password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="text-sm font-semibold flex justify-start w-full pl-20 ">
            Password:
          </div>
          <select
            className="select select-bordered w-full max-w-xs"
            defaultValue={account.rank}
            onChange={(e) => setRank(e.target.value)}
          >
            <option value="" disabled></option>
            <option value="Iron 1">Iron 1</option>
            <option value="Iron 2">Iron 2</option>
            <option value="Iron 3">Iron 3</option>
            <option value="Bronze 1">Bronze 1</option>
            <option value="Bronze 2">Bronze 2</option>
            <option value="Bronze 3">Bronze 3</option>
            <option value="Silver 1">Silver 1</option>
            <option value="Silver 2">Silver 2</option>
            <option value="Silver 3">Silver 3</option>
            <option value="Gold 1">Gold 1</option>
            <option value="Gold 2">Gold 2</option>
            <option value="Gold 3">Gold 3</option>
            <option value="Platinum 1">Platinum 1</option>
            <option value="Platinum 2">Platinum 2</option>
            <option value="Platinum 3">Platinum 3</option>
            <option value="Diamond 1">Diamond 1</option>
            <option value="Diamond 2">Diamond 2</option>
            <option value="Diamond 3">Diamond 3</option>
            <option value="Ascendant 1">Ascendant 1</option>
            <option value="Ascendant 2">Ascendant 2</option>
            <option value="Ascendant 3">Ascendant 3</option>
            <option value="Immortal 1">Immortal 1</option>
            <option value="Immortal 2">Immortal 2</option>
            <option value="Immortal 3">Immortal 3</option>
            <option value="Radiant">Radiant</option>
          </select>
        </div>
        <div className="modal-action">
          <button className="btn" onClick={closeModal}>
            Close
          </button>
          <button className="btn" onClick={handleUpdateItem}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
