import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CourseList from "./data/CourseList"; // ✅ adjust path as needed

export default function PaymentPage() {
  const { courseId } = useParams(); // 🧠 dynamic from route
  const course = CourseList.find((c) => c.id === courseId); // 🔍 find matching course

  const [method, setMethod] = useState("PhonePe");
  const [cardInfo, setCardInfo] = useState({
    name: "",
    number: "",
    expiry: "",
    cvc: "",
  });

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardInfo({ ...cardInfo, [name]: value });
  };

  const handlePayment = (e) => {
    e.preventDefault();
    if (method === "Card" && Object.values(cardInfo).some((val) => val.trim() === "")) {
      alert("Please fill all card details.");
    } else {
      alert(`✅ Payment Successful for ${course?.title || "Course"}!`);
    }
  };

  if (!course) {
    return <div className="text-center py-20 text-red-600 font-bold">❌ Course not found</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4 py-8">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Complete Your Payment</h2>

        <h3 className="text-center text-lg font-semibold text-blue-600 mb-2">
          🧾 {course.title}
        </h3>

        {/* Payment Method */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Select Payment Method:</label>
          <div className="flex gap-4">
            {["PhonePe", "Card"].map((option) => (
              <label key={option} className="flex items-center gap-2">
                <input
                  type="radio"
                  value={option}
                  checked={method === option}
                  onChange={() => setMethod(option)}
                  className="accent-blue-500"
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        {/* Card Details */}
        {method === "Card" && (
          <div className="space-y-4 mb-4">
            <input
              type="text"
              name="name"
              placeholder="Cardholder Name"
              value={cardInfo.name}
              onChange={handleCardChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              name="number"
              placeholder="Card Number"
              maxLength="16"
              value={cardInfo.number}
              onChange={handleCardChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <div className="flex gap-4">
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                value={cardInfo.expiry}
                onChange={handleCardChange}
                className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                name="cvc"
                placeholder="CVC"
                maxLength="4"
                value={cardInfo.cvc}
                onChange={handleCardChange}
                className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
        )}

        {/* Amount Section */}
        <div className="border-t pt-4 mt-4">
          <p className="text-gray-600 text-sm">Total Payable</p>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">{course.price}</h3>
          <button
            onClick={handlePayment}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300 transform hover:scale-105"
          >
            Pay {course.price}
          </button>
        </div>
      </div>
    </div>
  );
}
