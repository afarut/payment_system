import React, { useState } from "react";
import paymentIcon from "../images/payment-icon.png";

const Welcome = () => {
  const [amount, setAmount] = useState("");

  const sendHandler = () => {
    console.log("Sending amount:", amount);
    
  };

  const changeAmount = (value) => {
    if (value > 0) {
      setAmount(value);
    } else {
      setAmount("");
    }
  };

  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="bg-gray-200 h-[65%] w-[28%] rounded-xl p-8">
        <div className="flex w-full justify-center items-center mb-8">
          <img src={paymentIcon} alt="payment-icon" className="mr-4" />
          <span className="text-xl font-ubuntu">Сервис оплаты</span>
        </div>
        <div className="flex flex-col items-center mt-[30%]">
          <div className="w-full">
            <input
              type="number"
              placeholder="Введите сумму в рублях"
              value={amount}
              onChange={(e) => changeAmount(e.target.value)}
              className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={sendHandler}
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Оплатить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
