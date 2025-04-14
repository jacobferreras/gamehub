import React from "react";
import CustomInputField from "../ui/CustomInputField";
import useCredentialsInput from "../../hooks/useCredentialsInput";
import axios from "axios";

const TodoModal = ({ closeModal, onAddItem, modalTitle, modalDescription }) => {
  const {
    ign,
    setAccountIgn,
    userName,
    setUserName,
    rank,
    setRank,
    password,
    setPassword,
    resetInputs,
  } = useCredentialsInput();

  const handleAddItem = async () => {
    if (ign.trim() && userName.trim() && password.trim() && rank) {
      const newItem = {
        ign,
        userName,
        password,
        rank,
      };

      try {
        const response = await axios.post(
          "http://localhost:5000/valorantAccount",
          newItem
        );

        onAddItem(response.data.data);
        resetInputs();
        closeModal();
      } catch (error) {
        console.error("Error adding item:", error);
      }
    }
  };

  return (
    <div className="modal modal-open modal-bottom sm:modal-middle">
      <div className="modal-box flex flex-col justify-center items-center">
        <h3 className="font-bold text-lg">{modalTitle}</h3>
        <p className="py-4">{modalDescription}</p>
        <div className="flex flex-col gap-2 w-full justify-center items-center">
          <CustomInputField
            type="text"
            placeholder="Ign"
            value={ign}
            onChange={(e) => setAccountIgn(e.target.value)}
          />
          <CustomInputField
            type="text"
            placeholder="User Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <CustomInputField
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <select
            className="select select-bordered w-full max-w-xs"
            value={rank}
            onChange={(e) => setRank(e.target.value)}
          >
            <option value="" disabled>
              Select Rank
            </option>
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
          <button className="btn" onClick={handleAddItem}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoModal;
