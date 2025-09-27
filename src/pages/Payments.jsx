import React, { useState } from "react";

const Payments = () => {
  const [payments, setPayments] = useState([
    { id: 1, student: "Rahul Sharma", amount: 500, date: "2025-09-01", mode: "UPI", status: "Paid" },
    { id: 2, student: "Anita Verma", amount: 700, date: "2025-09-02", mode: "Card", status: "Paid" },
    { id: 3, student: "Karan Mehta", amount: 300, date: "2025-09-05", mode: "Cash", status: "Pending" },
  ]);

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("date"); // amount | date
  const [newPayment, setNewPayment] = useState({
    student: "",
    amount: "",
    date: "",
    mode: "Cash",
    status: "Pending",
  });

  // Add payment
  const handleAddPayment = () => {
    if (!newPayment.student || !newPayment.amount || !newPayment.date) return;
    setPayments([
      ...payments,
      { id: payments.length + 1, ...newPayment, amount: parseFloat(newPayment.amount) },
    ]);
    setNewPayment({ student: "", amount: "", date: "", mode: "Cash", status: "Pending" });
  };

  // Delete
  const handleDelete = (id) => {
    setPayments(payments.filter((p) => p.id !== id));
  };

  // Export CSV
  const handleExport = () => {
    const csv = [
      ["ID", "Student", "Amount", "Date", "Mode", "Status"],
      ...payments.map((p) => [p.id, p.student, p.amount, p.date, p.mode, p.status]),
    ]
      .map((row) => row.join(","))
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "payments.csv";
    link.click();
  };

  // Sorting
  const sortedPayments = [...payments].sort((a, b) =>
    sort === "amount" ? b.amount - a.amount : new Date(b.date) - new Date(a.date)
  );

  // Summary
  const total = payments.reduce((acc, p) => acc + p.amount, 0);
  const highest = Math.max(...payments.map((p) => p.amount), 0);

  return (
    <div className="p-6 bg-gradient-to-br from-indigo-50 via-white to-emerald-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-slate-800 tracking-tight">💳 Payments Dashboard</h1>

      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-indigo-500">
          <h2 className="text-slate-500">Total Payments</h2>
          <p className="text-3xl font-bold text-indigo-600">${total}</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-emerald-500">
          <h2 className="text-slate-500">Highest Payment</h2>
          <p className="text-3xl font-bold text-emerald-600">${highest}</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-amber-500">
          <h2 className="text-slate-500">Records</h2>
          <p className="text-xl font-semibold text-amber-600">{payments.length}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="🔍 Search by student..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 p-3 rounded-xl w-full focus:ring-2 focus:ring-indigo-400 focus:outline-none shadow-sm"
        />
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none"
        >
          <option value="date">Sort by Date</option>
          <option value="amount">Sort by Amount</option>
        </select>
        <button
          onClick={handleExport}
          className="bg-emerald-500 text-white px-6 py-3 rounded-xl hover:bg-emerald-600 shadow-md transition"
        >
          ⬇ Export CSV
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-2xl shadow-md">
        <table className="w-full">
          <thead className="bg-indigo-100 text-indigo-900 uppercase text-sm">
            <tr>
              <th className="p-4 text-left">Student</th>
              <th className="p-4 text-left">Amount</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Mode</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedPayments
              .filter((p) => p.student.toLowerCase().includes(search.toLowerCase()))
              .map((p) => (
                <tr key={p.id} className="border-b hover:bg-indigo-50 transition">
                  <td className="p-4 font-medium text-slate-700">{p.student}</td>
                  <td className="p-4 text-emerald-600 font-semibold">${p.amount}</td>
                  <td className="p-4 text-slate-500">{p.date}</td>
                  <td className="p-4">{p.mode}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        p.status === "Paid" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {p.status}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    <button
                      onClick={() => handleDelete(p.id)}
                      className="bg-rose-500 text-white px-4 py-2 rounded-lg hover:bg-rose-600 shadow-sm transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Add Form */}
      <div className="mt-10 bg-white p-6 rounded-2xl shadow-md border border-gray-100">
        <h2 className="text-2xl font-semibold mb-6 text-slate-800">➕ Add Payment</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <input
            type="text"
            placeholder="Student Name"
            value={newPayment.student}
            onChange={(e) => setNewPayment({ ...newPayment, student: e.target.value })}
            className="border border-gray-300 p-3 rounded-xl w-full focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
          <input
            type="number"
            placeholder="Amount"
            value={newPayment.amount}
            onChange={(e) => setNewPayment({ ...newPayment, amount: e.target.value })}
            className="border border-gray-300 p-3 rounded-xl w-full focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
          <input
            type="date"
            value={newPayment.date}
            onChange={(e) => setNewPayment({ ...newPayment, date: e.target.value })}
            className="border border-gray-300 p-3 rounded-xl w-full focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
          <select
            value={newPayment.mode}
            onChange={(e) => setNewPayment({ ...newPayment, mode: e.target.value })}
            className="border border-gray-300 p-3 rounded-xl w-full focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          >
            <option>Cash</option>
            <option>UPI</option>
            <option>Card</option>
          </select>
          <select
            value={newPayment.status}
            onChange={(e) => setNewPayment({ ...newPayment, status: e.target.value })}
            className="border border-gray-300 p-3 rounded-xl w-full focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          >
            <option>Paid</option>
            <option>Pending</option>
          </select>
        </div>
        <button
          onClick={handleAddPayment}
          className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 shadow-md transition"
        >
          Add Payment
        </button>
      </div>
    </div>
  );
};

export default Payments;
