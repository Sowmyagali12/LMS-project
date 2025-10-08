// src/pages/Payments.jsx
import React, { useState } from "react";
import QRCode from "react-qr-code";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Payments = () => {
  const navigate = useNavigate();
  const [paymentDone, setPaymentDone] = useState(false);
  const [paymentData, setPaymentData] = useState({
    name: "",
    method: "UPI",
    amount: "",
    transactionId: "",
    status: "Paid",
    date: new Date().toLocaleDateString(),
  });
  const [history, setHistory] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setHistory((prev) => [...prev, { ...paymentData, id: prev.length + 1 }]);
    setPaymentDone(false);
    setPaymentData({
      name: "",
      method: "UPI",
      amount: "",
      transactionId: "",
      status: "Paid",
      date: new Date().toLocaleDateString(),
    });
  };

  const PaymentHistory = ({ history }) => (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md text-base">
        <thead className="bg-blue-500 text-white text-base">
          <tr>
            <th className="px-4 py-3 text-left">Date</th>
            <th className="px-4 py-3 text-left">Amount</th>
            <th className="px-4 py-3 text-left">Method</th>
            <th className="px-4 py-3 text-left">Status</th>
            <th className="px-4 py-3 text-left">Name</th>
            <th className="px-4 py-3 text-left">Transaction ID</th>
          </tr>
        </thead>
        <tbody>
          <AnimatePresence>
            {history.length > 0 ? (
              history.map((payment) => (
                <motion.tr
                  key={payment.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="border-b hover:bg-gray-100 transition text-black text-base"
                >
                  <td className="px-4 py-3">{payment.date}</td>
                  <td className="px-4 py-3 font-semibold">₹{payment.amount}</td>
                  <td className="px-4 py-3">{payment.method}</td>
                  <td
                    className={`px-4 py-3 font-semibold ${
                      payment.status === "Paid"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {payment.status}
                  </td>
                  <td className="px-4 py-3">{payment.name || "-"}</td>
                  <td className="px-4 py-3">{payment.transactionId || "-"}</td>
                </motion.tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="text-center py-6 text-gray-500 text-base"
                >
                  No payment history available.
                </td>
              </tr>
            )}
          </AnimatePresence>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-blue-50 min-h-screen relative space-y-8">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 p-3 rounded-full hover:bg-blue-100 transition"
      >
        <FaArrowLeft className="text-blue-800 w-6 h-6" />
      </button>

      {/* Page Heading */}
      <h1 className="text-5xl font-extrabold text-center text-black mt-10 mb-8">
        Payments
      </h1>

      {/* Stepper */}
      <div className="flex flex-col sm:flex-row items-center justify-center mb-8 space-y-3 sm:space-y-0 sm:space-x-6">
        <motion.div className="flex items-center space-x-4">
          <motion.div
            className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full font-bold text-white"
            animate={{
              backgroundColor: !paymentDone ? "#2563EB" : "#10B981",
            }}
            transition={{ duration: 0.5 }}
          >
            1
          </motion.div>
          <span className="font-semibold text-black text-lg">Scan & Pay</span>
        </motion.div>

        <div className="w-16 h-2 bg-gray-300 rounded-full"></div>

        <motion.div className="flex items-center space-x-4">
          <motion.div
            className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full font-bold text-white"
            animate={{
              backgroundColor: paymentDone ? "#2563EB" : "#D1D5DB",
            }}
            transition={{ duration: 0.5 }}
          >
            2
          </motion.div>
          <span className="font-semibold text-black text-lg">
            Payment Details
          </span>
        </motion.div>
      </div>

      {/* QR Code / Payment Form */}
      <AnimatePresence mode="wait">
        {!paymentDone ? (
          <motion.div
            key="qr"
            className="bg-white rounded-2xl shadow-lg p-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-4xl font-bold text-black mb-6">Scan to Pay</h2>
            <div className="inline-block p-6 bg-blue-100 rounded-xl shadow-md">
              <QRCode value="upi://pay?pa=example@upi&pn=Example&am=100" size={180} />
            </div>
            <p className="mt-4 text-lg text-black">
              Scan this QR code using your UPI app and complete the payment.
            </p>
            <button
              className="mt-6 px-10 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition"
              onClick={() => setPaymentDone(true)}
            >
              I have completed the payment
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            className="bg-white rounded-2xl shadow-lg p-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-4xl font-bold text-black mb-6">
              Enter Payment Details
            </h2>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              <div>
                <label className="block text-black font-semibold mb-2 text-base">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={paymentData.name}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-base"
                  required
                />
              </div>
              <div>
                <label className="block text-black font-semibold mb-2 text-base">
                  Amount
                </label>
                <input
                  type="number"
                  name="amount"
                  value={paymentData.amount}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-base"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-black font-semibold mb-2 text-base">
                  Transaction ID
                </label>
                <input
                  type="text"
                  name="transactionId"
                  value={paymentData.transactionId}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-base"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
                >
                  Submit Payment Info
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Payment History */}
      <motion.div
        className="bg-white rounded-2xl shadow-lg p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-black mb-6">Payment History</h2>
        <PaymentHistory history={history} />
      </motion.div>
    </div>
  );
};

export default Payments;
