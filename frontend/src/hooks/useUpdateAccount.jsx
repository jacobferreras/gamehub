import { useState } from "react";
import axios from "axios";

const useUpdateAccount = (onUpdateItem = () => {}) => {
  const [selectedAccount, setSelectedAccount] = useState([]);

  const updateAccount = async (id, account) => {
    try {
      await axios.patch(`http://localhost:5000/valorantAccount/${id}`, account);
    } catch (error) {
      console.error("Error updating account:", error);
    }
  };

  const selectAccountAndOpenModal = (account, openModal) => {
    setSelectedAccount(account);
    openModal();
  };

  const handleUpdateAccount = async (updatedAccount, closeModal) => {
    const accountId = selectedAccount.id;
    const updatedAccountData = {
      ...selectedAccount,
      ...updatedAccount,
    };
    await updateAccount(accountId, updatedAccountData);
    onUpdateItem(accountId, updatedAccountData);
    closeModal();
  };

  return {
    selectedAccount,
    setSelectedAccount,
    selectAccountAndOpenModal,
    handleUpdateAccount,
  };
};

export default useUpdateAccount;
