"use client"
import React, { useState } from 'react';

const FaPaperPlane = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="currentColor" d="M16.1 260.2c-22.6 15.3-35.8 40.5-35.8 66.5C-19.7 448 93.3 540.3 226.5 540.3h101.4c36 0 69.5-12.8 95.8-34.5L503.7 398.9c3.6-2.9 6.3-6.5 7.8-10.7 4.1-11.4 1.3-24.6-6.4-33.8l-102.7-120.3c-23.2-27.2-57.9-42.2-93.5-42.2H226.5C93.3 224 16.1 260.2 16.1 260.2zm475.5-84.5L343.8 68.5c-26.3-21.7-59.8-34.5-95.8-34.5H146.5C13.3 34 0 126.3 0 259.5c0 26 13.2 51.2 35.8 66.5L181.8 411c7.7 9.2 10.5 22.4 6.4 33.8-1.5 4.2-4.2 7.8-7.8 10.7L422.2 506c26.3 21.7 59.8 34.5 95.8 34.5h101.4c133.2 0 226.2-92.3 226.2-225.5C845.6 175.7 672.4 135.2 491.6 175.7z"/>
        <path fill="white" d="M226.5 224c-133.2 0-226.5 36.2-226.5 36.2s13.2 51.2 35.8 66.5L181.8 411c7.7 9.2 10.5 22.4 6.4 33.8-1.5 4.2-4.2 7.8-7.8 10.7L422.2 506c26.3 21.7 59.8 34.5 95.8 34.5h101.4c133.2 0 226.2-92.3 226.2-225.5C845.6 175.7 672.4 135.2 491.6 175.7L226.5 224z"/>
    </svg>
);


const PayoutRequestForm = ({ availableBalance = 500.00, paymentMethod = 'PayPal' }) => {
     const [withdrawalAmount, setWithdrawalAmount] = useState(availableBalance.toFixed(2));
    
   const formattedBalance = `$${availableBalance.toFixed(2)}`;

    const handleRequestPayout = () => {
        console.log(`Requesting payout of $${withdrawalAmount} via ${paymentMethod}`);
        alert(`Payout requested for $${withdrawalAmount}. (Check console for simulated API call)`);
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        if (value === '' || /^\d+(\.\d{0,2})?$/.test(value)) {
            setWithdrawalAmount(value);
        }
    };

    const amountFloat = parseFloat(withdrawalAmount);
    const isInvalid = isNaN(amountFloat) || amountFloat <= 0 || amountFloat > availableBalance;

    return (
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg max-w-lg mx-auto md:mx-0">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
                Request Payout
            </h2>
            <p className="text-gray-500 mb-6">
                Withdraw your available earnings
            </p>

            <div className="space-y-3 mb-6 border-b border-gray-100 pb-5">
                <div className="flex justify-between items-center text-gray-600">
                    <span className="font-medium">Available Balance:</span>
                    <span className="font-semibold text-lg text-gray-900">{formattedBalance}</span>
                </div>
                <div className="flex justify-between items-center text-gray-600">
                    <span className="font-medium">Payment Method:</span>
                    <span className="font-semibold text-lg text-gray-900">{paymentMethod}</span>
                </div>
            </div>

            <div className="mb-8">
                <label htmlFor="withdrawalAmount" className="block text-base font-bold text-gray-900 mb-3">
                    Amount to withdraw
                </label>
                
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-lg font-bold">$</span>
                    </div>

                    <input
                        type="text" 
                        id="withdrawalAmount"
                        className={`block w-full rounded-xl border ${isInvalid ? 'border-red-400 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'} pl-8 pr-4 py-3 text-2xl font-semibold text-gray-900 focus:border-indigo-500`}
                        value={withdrawalAmount}
                        onChange={handleInputChange}
                        placeholder="0.00"
                        aria-invalid={isInvalid ? "true" : "false"}
                    />
                </div>
                {isInvalid && (
                    <p className="mt-2 text-sm text-red-500">
                        Amount must be between $0.01 and {formattedBalance}.
                    </p>
                )}
            </div>

            <button
                onClick={handleRequestPayout}
                disabled={isInvalid}
                className={`flex items-center justify-center w-full px-6 py-3 rounded-xl text-lg font-bold text-white transition-colors duration-300 shadow-md ${
                    isInvalid
                        ? 'bg-indigo-300 cursor-not-allowed'
                        : 'bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                }`}
            >
                <FaPaperPlane className="w-5 h-5 mr-3 -rotate-12" />
                Request Payout
            </button>
        </div>
    );
};

export default PayoutRequestForm;
