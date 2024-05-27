import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md text-center animate-fade-in-up">
        <h2 className="text-2xl font-bold text-green-500 mb-4">
          Оплата прошла успешно!
        </h2>
        <p className="text-gray-700 mb-6">Спасибо за ваш платеж</p>
        <button
          onClick={handleBackToHome}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Вернуться на главную
        </button>
      </div>
    </div>
  );
};

export default Success;
