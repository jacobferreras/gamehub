import React, { useState, useEffect, use } from "react";
import axios from "axios";

import CustomInputField from "../components/ui/CustomInputField";
import AccountCard from "../components/common/AccountCard";
import AddModal from "../components/modals/AddModal";
import useToggleModal from "../hooks/useToggleModal";
import useCreateAccount from "../hooks/useCreateAccount";
import backgroundImage from "../assets/reyna.jpeg";
import Footer from "../components/common/Footer";

const AccountsListScreen = () => {
  const { isModalOpen, openModal, closeModal } = useToggleModal();
  const { items, addItem, updateAccount, deleteAccount } = useCreateAccount();

  return (
    <>
      <div
        className="hero min-h-screen relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center pb-100">
          <div className="flex justify-center items-center my-10">
            <h1 className="font-bold text-6xl text-white">Valorant Account</h1>
          </div>
          <div className="flex justify-center items-center  gap-5">
            <CustomInputField
              type="search"
              placeholder="Search"
              showIcon={true}
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
              accounts={items}
              onUpdateAccount={updateAccount}
              onDeleteAccount={deleteAccount}
            />
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
