import React, { useState } from "react";
import paymentIcon from "../images/payment-icon.png";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const [amount, setAmount] = useState("");
  const [tgId, setTgId] = useState("");

  const navigate = useNavigate();

  const sendHandler = () => {
    if (tgId.trim()) {
      localStorage.setItem("tgId", tgId);
      localStorage.setItem("amount", amount)
    }
    console.log("Sending amount:", amount);
    console.log(`Telegram ID: ${tgId}`);

    navigate("/payment");
  };

  const changeAmount = (value) => {
    if (value > 0) {
      setAmount(value);
    } else {
      setAmount("");
    }
  };

  return (
    <div className="container mx-auto p-8 mt-24 font-ubuntu">
      <div className="max-w-lg mx-auto bg-gray-200 rounded-lg shadow-md animate-fade-in-up">
        <div className="py-4 px-8">
          <div className="flex w-full justify-center items-center mb-8">
            <img width={40} src={paymentIcon} alt="payment-icon" className="mr-2" />
            <span className="text-xl font-medium">Сервис оплаты</span>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendHandler();
            }}
          >
            <div className="mb-6">
              <label
                htmlFor="amount"
                className="block text-sm font-medium text-gray-700"
              >
                Введите сумму для оплаты
              </label>
              <input
                type="number"
                id="amount"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Введите сумму в рублях"
                value={amount}
                onChange={(e) => changeAmount(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="tgId"
                className="block text-sm font-medium text-gray-700"
              >
                Telegram ID
              </label>
              <input
                type="text"
                id="tgId"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Telegram ID"
                value={tgId}
                onChange={(e) => setTgId(e.target.value)}
                required
              />
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

export default Welcome;
