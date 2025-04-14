import { useState, useEffect, use } from "react";
import seedrandom from "seedrandom";
import axios from "axios";
import cardImage1 from "../assets/neon.jpg";
import cardImage2 from "../assets/fade.jpg";
import cardImage3 from "../assets/sova.webp";
import cardImage4 from "../assets/vyse.jfif";
import cardImage5 from "../assets/reyna1.avif";

const useCreateAccount = () => {
  const [accounts, setAccounts] = useState([]);
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
      const response = await axios.get("http://localhost:5000/valorantAccount");
      setAccounts(
        response.data.data.map((item) => ({
          ...item,
          image: getRandomImage(item.id),
        }))
      );
    };

    fetchAccounts();
  }, []);

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
    setAccounts((prevItems) => [...prevItems, itemWithImage]);
  };

  return { items: accounts, addItem, updateAccount, deleteAccount };
};

export default useCreateAccount;
