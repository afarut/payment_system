import { useState } from "react";

const Payment = () => {

    const [cardholderName, setCardholderName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className="container mx-auto p-8 mt-24">
            <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md">
                <div className="py-4 px-8">
                    <h2 className="text-2xl font-bold mb-6">Оплата</h2>
                    <form onSubmit={handleFormSubmit}>
                        <div className="mb-6">
                            <label htmlFor="cardholderName" className="block text-sm font-medium text-gray-700">Держатель карты</label>
                            <input 
                                type="text" 
                                id="cardholderName" 
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" 
                                placeholder="John Doe" 
                                value={cardholderName} 
                                onChange={(e) => setCardholderName(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Номер карты</label>
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
                                <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">Срок карты</label>
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
                                <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
                                <input 
                                    type="text" 
                                    id="cvv" 
                                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" 
                                    placeholder="123" 
                                    value={cvv} 
                                    onChange={(e) => setCvv(e.target.value)} 
                                    required 
                                    maxLength={4}
                                />
                            </div>
                        </div>
                        <button 
                            type="submit" 
                            className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        >
                            Pay Now
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Payment;
