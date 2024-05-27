import { useState } from "react";
import axios from '../axios'

import transactionIcon from "../images/transaction-icon.png";

const Payment = () => {
  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const tgId = localStorage.getItem("tgId")
    const price = localStorage.getItem("amount")
    console.log(cardholderName, cardNumber, expiryDate, cvv, tgId, price);

    axios.post('')
  };

  return (
    <div className="container mx-auto p-8 mt-24 font-ubuntu animate-fade-in-up">
      <div className="max-w-lg mx-auto bg-gray-200 rounded-lg shadow-md">
        <div className="py-4 px-8">
          <div className="flex justify-center items-center mb-6">
            <img className="block" width={40} src={transactionIcon} alt="transaction" />
            <h2 className="text-2xl font-medium block ml-2">Оплата</h2>
          </div>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-6">
              <label
                htmlFor="cardholderName"
                className="block text-sm font-medium text-gray-700"
              >
                Держатель карты
              </label>
              <input
                type="text"
                id="cardholderName"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Василий Пупкин"
                value={cardholderName}
                onChange={(e) => setCardholderName(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="cardNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Номер карты
              </label>
              <input
                type="text"
                id="cardNumber"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="1234 5678 9012 3456"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
                maxLength={16}
              />
            </div>
            <div className="flex justify-between">
              <div className="mb-6 w-1/2 mr-3">
                <label
                  htmlFor="expiryDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  Срок карты
                </label>
                <input
                  type="text"
                  id="expiryDate"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="MM/YY"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  required
                  maxLength={5}
                />
              </div>
              <div className="mb-6 w-1/2 ml-3">
                <label
                  htmlFor="cvv"
                  className="block text-sm font-medium text-gray-700"
                >
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="123"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  required
                  maxLength={3}
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Оплатить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
