import React from "react";
import EditModal from "../modals/EditModal";
import useToggleModal from "../../hooks/useToggleModal";
import useUpdateAccount from "../../hooks/useUpdateAccount";
import useDeleteAccount from "../../hooks/useDeleteAccount";

const AccountCard = ({ accounts = [], onUpdateAccount, onDeleteAccount }) => {
  const {
    isModalOpen: isEditModalOpen,
    openModal: openEditModal,
    closeModal: closeEditModal,
  } = useToggleModal();

  const { selectedAccount, selectAccountAndOpenModal, handleUpdateAccount } =
    useUpdateAccount(onUpdateAccount);

  const [deleteAccount, deleteAccounts] = useDeleteAccount(onDeleteAccount);

  return (
    <div className="flex justify-center accounts-center my-10">
      {accounts.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-4 p-4">
          {accounts.map((account, index) => (
            <div
              key={index}
              className="card bg-transparent w-85 backdrop-blur-sm shadow-xl border border-base-300"
            >
              <figure className="h-full">
                <img src={account.image} alt="Account" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{account.ign || "No Ign"}</h2>
                <p>
                  <strong>User Name:</strong>{" "}
                  {account.userName || "No User Name provided"}
                </p>
                <p>
                  <strong>User Password:</strong>{" "}
                  {account.password || "No Password provided"}
                </p>
                <p>
                  <strong>Rank:</strong> {account.rank || "No rank provided"}
                </p>
                <div className="card-actions">
                  <button
                    className="btn btn-blue"
                    onClick={() =>
                      selectAccountAndOpenModal(account, openEditModal)
                    }
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-red"
                    onClick={() => deleteAccounts(account)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-8 text-center text-gray-500">
          No accounts to display.
        </div>
      )}

      {isEditModalOpen && (
        <EditModal
          closeModal={closeEditModal}
          onUpdateItem={(updatedAccount) => {
            handleUpdateAccount(updatedAccount);
            closeEditModal();
          }}
          editModalTitle="Add your account"
          editModalDescription="A:"
          account={selectedAccount}
        />
      )}
    </div>
  );
};

export default AccountCard;
