import React from 'react';
import { useWallet } from '../../context/WalletContext';
import './WalletDisplay.css';

const WalletDisplay = () => {
    const { balance, items } = useWallet();

    return (
        <div className="wallet-display">
            <h2 className="wallet-title">My Wallet</h2>
            <div className="wallet-balance">
                Balance: <strong>${balance.toFixed(2)}</strong>
            </div>
            <h3 className="items-title">Purchased Items</h3>
            <ul className="item-list">
                {items.length > 0 ? (
                    items.map((item, index) => (
                        <li key={index} className="item-entry">
                            {item.name} - ${item.price.toFixed(2)}
                        </li>
                    ))
                ) : (
                    <p>No items purchased yet.</p>
                )}
            </ul>
        </div>
    );
};

export default WalletDisplay; 