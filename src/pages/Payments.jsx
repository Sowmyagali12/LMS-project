// pages/Payments.jsx
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
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md text-sm">
        <thead className="bg-blue-500 text-white text-xs sm:text-sm">
          <tr>
            <th className="px-2 py-1 text-left">Date</th>
            <th className="px-2 py-1 text-left">Amount</th>
            <th className="px-2 py-1 text-left">Method</th>
            <th className="px-2 py-1 text-left">Status</th>
            <th className="px-2 py-1 text-left">Name</th>
            <th className="px-2 py-1 text-left">Transaction ID</th>
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
                  className="border-b hover:bg-gray-100 transition"
                >
                  <td className="px-2 py-1">{payment.date}</td>
                  <td className="px-2 py-1">₹{payment.amount}</td>
                  <td className="px-2 py-1">{payment.method}</td>
                  <td className={`px-2 py-1 font-semibold ${payment.status === "Paid" ? "text-green-600" : "text-red-600"}`}>
                    {payment.status}
                  </td>
                  <td className="px-2 py-1">{payment.name || "-"}</td>
                  <td className="px-2 py-1">{payment.transactionId || "-"}</td>
                </motion.tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-4 text-gray-500 text-sm">
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
    <div className="max-w-xl mx-auto p-4 sm:p-6 bg-blue-50 min-h-screen relative space-y-6">
      {/* Back Arrow */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 p-2 rounded-full hover:bg-blue-100 transition"
      >
        <FaArrowLeft className="text-blue-800 w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Stepper */}
      <div className="flex flex-col sm:flex-row items-center justify-center mb-4 sm:mb-6 space-y-2 sm:space-y-0 sm:space-x-4">
        <motion.div className="flex items-center space-x-2">
          <motion.div
            className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full font-bold`}
            animate={{ backgroundColor: !paymentDone ? "#2563EB" : "#10B981" }}
            transition={{ duration: 0.5 }}
          >
            1
          </motion.div>
          <span className="font-medium text-blue-800 text-sm sm:text-base">Scan & Pay</span>
        </motion.div>
        <div className="w-full sm:w-12 h-1 bg-gray-300 rounded-full"></div>
        <motion.div className="flex items-center space-x-2">
          <motion.div
            className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full font-bold`}
            animate={{ backgroundColor: paymentDone ? "#2563EB" : "#D1D5DB" }}
            transition={{ duration: 0.5 }}
          >
            2
          </motion.div>
          <span className="font-medium text-blue-800 text-sm sm:text-base">Payment Details</span>
        </motion.div>
      </div>

      {/* QR Code or Payment Form */}
      <AnimatePresence mode="wait">
        {!paymentDone ? (
          <motion.div
            key="qr"
            className="bg-white rounded-2xl shadow-lg p-6 sm:p-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-xl sm:text-2xl font-bold text-blue-800 mb-4 sm:mb-6">Scan to Pay</h2>
            <div className="inline-block p-4 sm:p-6 bg-blue-100 rounded-xl shadow-md">
              <QRCode value="upi://pay?pa=example@upi&pn=Example&am=100" size={150} />
            </div>
            <p className="mt-3 text-blue-700 text-sm sm:text-base">Scan this QR code using your UPI app and complete the payment.</p>
            <button
              className="mt-4 sm:mt-6 px-6 sm:px-8 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition w-full sm:w-auto"
              onClick={() => setPaymentDone(true)}
            >
              I have completed the payment
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            className="bg-white rounded-2xl shadow-lg p-6 sm:p-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-xl sm:text-2xl font-bold text-blue-800 mb-4 sm:mb-6">Enter Payment Details</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-blue-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">Name</label>
                <input
                  type="text"
                  name="name"
                  value={paymentData.name}
                  onChange={handleInputChange}
                  className="w-full border border-blue-200 px-3 py-2 sm:px-4 sm:py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm sm:text-base"
                  required
                />
              </div>
              <div>
                <label className="block text-blue-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">Amount</label>
                <input
                  type="number"
                  name="amount"
                  value={paymentData.amount}
                  onChange={handleInputChange}
                  className="w-full border border-blue-200 px-3 py-2 sm:px-4 sm:py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm sm:text-base"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-blue-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">Transaction ID</label>
                <input
                  type="text"
                  name="transactionId"
                  value={paymentData.transactionId}
                  onChange={handleInputChange}
                  className="w-full border border-blue-200 px-3 py-2 sm:px-4 sm:py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm sm:text-base"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition text-sm sm:text-base"
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
        className="bg-white rounded-2xl shadow-lg p-4 sm:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-lg sm:text-xl font-bold text-blue-800 mb-4 sm:mb-6">Payment History</h2>
        <PaymentHistory history={history} />
      </motion.div>
    </div>
  );
};

export default Payments;
