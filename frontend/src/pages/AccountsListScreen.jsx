import React, { useState, useEffect } from "react";

import CustomInputField from "../components/ui/CustomInputField";
import AccountCard from "../components/common/AccountCard";
import AddModal from "../components/modals/AddModal";
import useToggleModal from "../hooks/useToggleModal";
import useCreateAccount from "../hooks/useCreateAccount";
import backgroundImage from "../assets/reyna.jpeg";
import Footer from "../components/common/Footer";
import Pagination from "../components/common/Pagination";
import DropdownInputField from "../components/ui/DropdownInputField";
import Navbar from "../components/common/Navbar";

const AccountsListScreen = () => {
  const { isModalOpen, openModal, closeModal } = useToggleModal();
  const { items, addItem, updateAccount, deleteAccount } = useCreateAccount();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRank, setSelectedRank] = useState("");

  const [filteredAccounts, setFilteredAccounts] = useState(items);
  useEffect(() => {
    let filtered = items;

    if (searchTerm) {
      filtered = filtered.filter(
        (account) =>
          account.ign.toLowerCase().includes(searchTerm.toLowerCase()) ||
          account.userName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedRank) {
      filtered = filtered.filter((account) =>
        account.rank.toLowerCase().includes(selectedRank.toLowerCase())
      );
    }

    setFilteredAccounts(filtered);
  }, [searchTerm, selectedRank, items]);

  return (
    <>
      <div
        className="hero min-h-screen relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center">
          <Navbar />
          <div className="flex justify-center items-center my-20">
            <h1 className="font-bold text-6xl text-white">Valorant Account</h1>
          </div>
          <div className="flex justify-center items-center gap-3 pb-10">
            <CustomInputField
              type="search"
              placeholder="Search"
              showIcon={true}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <DropdownInputField
              value={selectedRank}
              onChange={(e) => setSelectedRank(e.target.value)}
            />

            <button
              className={`btn btn-active  bg-blue-600`}
              onClick={openModal}
            >
              Add Account
            </button>
          </div>
          <div>
            <AccountCard
              accounts={filteredAccounts}
              onUpdateAccount={updateAccount}
              onDeleteAccount={deleteAccount}
            />
          </div>
          <div className="flex justify-center items-center my-10">
            <Pagination />
          </div>
        </div>
      </div>
      <Footer />

      {isModalOpen && (
        <AddModal
          closeModal={closeModal}
          onAddItem={addItem}
          modalTitle="Add Your Valorant Account"
          modalDescription="Enter the details of your account below:"
        />
      )}
    </>
  );
};

export default AccountsListScreen;
