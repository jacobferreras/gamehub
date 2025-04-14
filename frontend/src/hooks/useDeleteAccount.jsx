import { useCallback } from "react";
import axios from "axios";

const useDeleteAccount = (onDeleteAccount) => {
  const deleteAccount = useCallback(
    async (accountId) => {
      try {
        await axios.delete(
          `http://localhost:5000/valorantAccount/${accountId}`
        );
        if (onDeleteAccount) {
          onDeleteAccount(accountId);
        }
      } catch (error) {
        console.error("Error deleting account:", error);
      }
    },
    [onDeleteAccount]
  );

  const deleteAccounts = useCallback(
    (account) => {
      if (account && account.id) {
        deleteAccount(account.id);
      }
    },
    [deleteAccount]
  );

  return [deleteAccount, deleteAccounts];
};

export default useDeleteAccount;
