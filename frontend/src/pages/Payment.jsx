import { useState } from "react";
import axios from "../axios";

import transactionIcon from "../images/transaction-icon.png";
import LoadingSpinner from "../components/LoadingSpinner";
import { useNavigate } from "react-router-dom";

const Payment = ({ setErrorMsg }) => {
  const navigate = useNavigate();

  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const formatCardNumber = (value) => {
    // Удаляем все пробелы из строки
    const cleaned = value.replace(/\s+/g, "");
    // Форматируем строку, добавляя пробелы после каждых 4 цифр
    const formatted = cleaned.match(/.{1,4}/g)?.join(" ") || "";
    return formatted;
  };

  const handleCardNumberChange = (value) => {
    const formattedValue = formatCardNumber(value);
    setCardNumber(formattedValue);
  };

  const formatExpiryDate = (value) => {
    // Удаляем все нецифровые символы из строки
    const cleaned = value.replace(/\D+/g, "");

    // Форматируем строку, добавляя слеш после двух цифр месяца
    if (cleaned.length >= 3) {
      return `${cleaned.substring(0, 2)}/${cleaned.substring(2, 4)}`;
    }

    return cleaned;
  };

  const handleExpiryDateChange = (value) => {
    const formattedValue = formatExpiryDate(value);
    setExpiryDate(formattedValue);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const tgId = localStorage.getItem("tgId");
    const price = localStorage.getItem("amount");
    console.log(cardholderName, cardNumber, expiryDate, cvv, tgId, price);

    axios
      .post("/pay/", {
        telegram_id: tgId,
        price: price,
        name: cardholderName,
        cvc: cvv,
        date: expiryDate,
        numbers: cardNumber.split(" ").join(""),
      })
      .then((res) => {
        if (res?.data?.error === "") {
          setIsLoading(true);

          setTimeout(() => {
            axios.get(`/pay_check/${res?.data?.tr_id}/${tgId}/`).then((res) => {
              if (res?.data?.is_payed) {
                navigate("/success");
              } else {
                setErrorMsg("Транзация не прошла");
                navigate("/error");
              }
            });
          }, 15000);
        } else {
          setErrorMsg(res?.data?.error);
          navigate("/error");
        }
      });
  };

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="container mx-auto p-8 mt-24 font-ubuntu animate-fade-in-up">
          <div className="max-w-lg mx-auto bg-gray-200 rounded-lg shadow-md">
            <div className="py-4 px-8">
              <div className="flex justify-center items-center mb-6">
                <img
                  className="block"
                  width={40}
                  src={transactionIcon}
                  alt="transaction"
                />
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
                    onChange={(e) => handleCardNumberChange(e.target.value)}
                    required
                    maxLength={19}
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
                      onChange={(e) => handleExpiryDateChange(e.target.value)}
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
      )}
    </>
  );
};

export default Payment;
