import { useState, useEffect } from "react";
import seedrandom from "seedrandom";
import axios from "axios";
import cardImage1 from "../assets/neon.jpg";
import cardImage2 from "../assets/fade.jpg";
import cardImage3 from "../assets/sova.webp";
import cardImage4 from "../assets/vyse.jfif";
import cardImage5 from "../assets/reyna1.avif";

const useCreateAccount = () => {
  const [accounts, setAccounts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 5;

  const updateAccount = (id, account) => {
    setAccounts((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, ...account } : item))
    );
  };

  const deleteAccount = (id) => {
    setAccounts((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/valorantAccount?page=${currentPage}&limit=${limit}`
        );

        setAccounts(
          response.data.data.map((item) => ({
            ...item,
            image: getRandomImage(item.id),
          }))
        );
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error("Error fetching accounts:", error);
      }
    };

    fetchAccounts();
  }, [currentPage]);

  const images = [cardImage1, cardImage2, cardImage3, cardImage4, cardImage5];

  const getRandomImage = (id) => {
    const random = seedrandom(id);
    return images[Math.floor(random() * images.length)];
  };

  const addItem = (newItem) => {
    const itemWithImage = {
      ...newItem,
      image: getRandomImage(newItem.id),
    };
    setAccounts(function (prevItems) {
      if (currentPage !== totalPages) {
        return prevItems;
      }
      if (prevItems.length >= limit) {
        return prevItems;
      }

      return [...prevItems, itemWithImage];
    });
  };

  return {
    items: accounts,
    addItem,
    updateAccount,
    deleteAccount,
    currentPage,
    setCurrentPage,
    totalPages,
  };
};

export default useCreateAccount;
