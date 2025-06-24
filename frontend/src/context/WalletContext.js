import React, { createContext, useState, useContext } from 'react';

const WalletContext = createContext();

export const useWallet = () => useContext(WalletContext);

export const WalletProvider = ({ children }) => {
    const [balance, setBalance] = useState(2000); // Start with a dummy balance
    const [items, setItems] = useState([]);

    const purchaseItem = (product) => {
        if (balance >= product.price) {
            setBalance((prevBalance) => prevBalance - product.price);
            setItems((prevItems) => [...prevItems, product]);
            alert(`${product.name} purchased successfully!`);
            return true;
        } else {
            alert("Insufficient funds!");
            return false;
        }
    };

    const value = {
        balance,
        items,
        purchaseItem
    };

    return (
        <WalletContext.Provider value={value}>
            {children}
        </WalletContext.Provider>
    );
}; 