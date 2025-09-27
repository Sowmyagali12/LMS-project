import React, { useState, useEffect } from "react";

const CouponsGenerated = () => {
  const [coupons, setCoupons] = useState([
    {
      id: 1,
      code: "TECH50",
      discount: "50%",
      issuedTo: "Rahul Sharma",
      expiry: "2025-12-31",
      status: "Active",
    },
    {
      id: 2,
      code: "LEARN30",
      discount: "30%",
      issuedTo: "Anita Verma",
      expiry: "2025-10-31",
      status: "Expired",
    },
  ]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [newCoupon, setNewCoupon] = useState({
    code: "",
    discount: "",
    issuedTo: "",
    expiry: "",
  });

  // Auto-update coupon status based on expiry
  useEffect(() => {
    const updatedCoupons = coupons.map((c) => {
      const today = new Date().toISOString().split("T")[0];
      if (c.expiry < today) {
        return { ...c, status: "Expired" };
      }
      return c;
    });
    setCoupons(updatedCoupons);
  }, []);

  // Add Coupon
  const handleAddCoupon = () => {
    if (!newCoupon.code || !newCoupon.discount || !newCoupon.issuedTo || !newCoupon.expiry) return;

    setCoupons([
      ...coupons,
      {
        id: coupons.length + 1,
        ...newCoupon,
        status: "Active",
      },
    ]);
    setNewCoupon({ code: "", discount: "", issuedTo: "", expiry: "" });
  };

  // Delete Coupon
  const handleDelete = (id) => {
    setCoupons(coupons.filter((c) => c.id !== id));
  };

  // Copy Code
  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    alert(`Copied: ${code}`);
  };

  // Filtered Coupons
  const filteredCoupons = coupons
    .filter(
      (c) =>
        (c.code.toLowerCase().includes(search.toLowerCase()) ||
          c.issuedTo.toLowerCase().includes(search.toLowerCase())) &&
        (filter === "All" || c.status === filter)
    );

  // Stats
  const total = coupons.length;
  const active = coupons.filter((c) => c.status === "Active").length;
  const expired = coupons.filter((c) => c.status === "Expired").length;

  return (
    <div className="p-6 bg-gradient-to-br from-purple-50 via-white to-pink-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-slate-800 tracking-tight">
        🎟️ Coupons Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-indigo-500">
          <h2 className="text-slate-500">Total Coupons</h2>
          <p className="text-3xl font-bold text-indigo-600">{total}</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-emerald-500">
          <h2 className="text-slate-500">Active Coupons</h2>
          <p className="text-3xl font-bold text-emerald-600">{active}</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-rose-500">
          <h2 className="text-slate-500">Expired Coupons</h2>
          <p className="text-3xl font-bold text-rose-600">{expired}</p>
        </div>
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="🔍 Search by code or student..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 p-3 rounded-xl w-full focus:ring-2 focus:ring-purple-400 focus:outline-none shadow-sm"
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-purple-400 focus:outline-none shadow-sm"
        >
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Expired">Expired</option>
        </select>
      </div>

      {/* Coupons Table */}
      <div className="overflow-x-auto bg-white rounded-2xl shadow-md">
        <table className="w-full">
          <thead className="bg-purple-100 text-purple-900 uppercase text-sm">
            <tr>
              <th className="p-4 text-left">Code</th>
              <th className="p-4 text-left">Discount</th>
              <th className="p-4 text-left">Issued To</th>
              <th className="p-4 text-left">Expiry</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCoupons.map((c) => (
              <tr key={c.id} className="border-b hover:bg-purple-50 transition">
                <td className="p-4 font-semibold text-slate-700">{c.code}</td>
                <td
                  className={`p-4 font-bold ${
                    c.discount.includes("50") ? "text-green-600" : "text-indigo-600"
                  }`}
                >
                  {c.discount}
                </td>
                <td className="p-4">{c.issuedTo}</td>
                <td className="p-4 text-slate-500">{c.expiry}</td>
                <td
                  className={`p-4 font-medium ${
                    c.status === "Active" ? "text-emerald-600" : "text-rose-500"
                  }`}
                >
                  {c.status}
                </td>
                <td className="p-4 flex gap-3 justify-center">
                  <button
                    onClick={() => handleCopy(c.code)}
                    className="bg-indigo-500 text-white px-3 py-1 rounded-lg hover:bg-indigo-600 transition shadow-sm"
                  >
                    Copy
                  </button>
                  <button
                    onClick={() => handleDelete(c.id)}
                    className="bg-rose-500 text-white px-3 py-1 rounded-lg hover:bg-rose-600 transition shadow-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Coupon Form */}
      <div className="mt-10 bg-white p-6 rounded-2xl shadow-md border border-gray-100">
        <h2 className="text-2xl font-semibold mb-6 text-slate-800">➕ Add Coupon</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Coupon Code"
            value={newCoupon.code}
            onChange={(e) => setNewCoupon({ ...newCoupon, code: e.target.value })}
            className="border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-purple-400 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Discount (e.g. 40%)"
            value={newCoupon.discount}
            onChange={(e) => setNewCoupon({ ...newCoupon, discount: e.target.value })}
            className="border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-purple-400 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Issued To"
            value={newCoupon.issuedTo}
            onChange={(e) => setNewCoupon({ ...newCoupon, issuedTo: e.target.value })}
            className="border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-purple-400 focus:outline-none"
          />
          <input
            type="date"
            value={newCoupon.expiry}
            onChange={(e) => setNewCoupon({ ...newCoupon, expiry: e.target.value })}
            className="border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-purple-400 focus:outline-none"
          />
        </div>
        <button
          onClick={handleAddCoupon}
          className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 shadow-md transition"
        >
          Add Coupon
        </button>
      </div>
    </div>
  );
};

export default CouponsGenerated;
