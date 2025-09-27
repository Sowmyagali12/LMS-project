import React, { useState } from "react";

const BatchesCompleted = () => {
  const [completedBatches] = useState([
    { id: 1, name: "Web Development", students: 25, date: "2025-09-01" },
    { id: 2, name: "Python Internship", students: 30, date: "2025-08-20" },
    { id: 3, name: "Data Science Bootcamp", students: 20, date: "2025-07-15" },
  ]);

  const [ongoingBatches] = useState([
    { id: 6, name: "Full Stack Development", students: 18, date: "2025-09-10" },
    { id: 7, name: "Cyber Security Basics", students: 22, date: "2025-09-12" },
  ]);

  const [upcomingBatches, setUpcomingBatches] = useState([
    { id: 4, name: "React Bootcamp", students: 15, date: "2025-10-01" },
    { id: 5, name: "AI & ML Workshop", students: 20, date: "2025-11-10" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newBatch, setNewBatch] = useState({
    name: "",
    students: "",
    date: "",
  });

  const handleChange = (e) => {
    setNewBatch({ ...newBatch, [e.target.name]: e.target.value });
  };

  const handleAddBatch = (e) => {
    e.preventDefault();
    if (!newBatch.name || !newBatch.students || !newBatch.date) {
      alert("Please fill all fields");
      return;
    }
    const batch = {
      id: Date.now(),
      name: newBatch.name,
      students: parseInt(newBatch.students),
      date: newBatch.date,
    };
    setUpcomingBatches([...upcomingBatches, batch]);
    setNewBatch({ name: "", students: "", date: "" });
    setShowModal(false);
  };

  return (
    <div className="w-full min-h-screen flex flex-col space-y-10 p-10 pb-20 bg-gray-50">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        🎓 Batches Dashboard
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-lg shadow-md border bg-green-50 text-center">
          <p className="text-green-700 font-medium">Completed Batches</p>
          <p className="text-2xl font-bold text-green-900">
            {completedBatches.length}
          </p>
        </div>
        <div className="p-6 rounded-lg shadow-md border bg-blue-50 text-center">
          <p className="text-blue-700 font-medium">Ongoing Batches</p>
          <p className="text-2xl font-bold text-blue-900">
            {ongoingBatches.length}
          </p>
        </div>
        <div className="p-6 rounded-lg shadow-md border bg-yellow-50 text-center">
          <p className="text-yellow-700 font-medium">Upcoming Batches</p>
          <p className="text-2xl font-bold text-yellow-900">
            {upcomingBatches.length}
          </p>
        </div>
      </div>

      {/* Completed Batches */}
      <div>
        <h2 className="text-2xl font-semibold text-green-800 mb-4">
          ✅ Completed Batches
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow-md border">
            <thead>
              <tr className="bg-green-100">
                <th className="p-4 text-left text-green-900">Batch Name</th>
                <th className="p-4 text-left text-green-900">Students</th>
                <th className="p-4 text-left text-green-900">Completion Date</th>
              </tr>
            </thead>
            <tbody>
              {completedBatches.map((batch, idx) => (
                <tr
                  key={batch.id}
                  className={`border-b hover:bg-green-50 ${
                    idx % 2 === 0 ? "bg-green-50/40" : ""
                  }`}
                >
                  <td className="p-4 text-gray-800 font-medium">{batch.name}</td>
                  <td className="p-4 text-gray-800">{batch.students}</td>
                  <td className="p-4 text-gray-800">{batch.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Ongoing Batches */}
      <div>
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          🔵 Ongoing Batches
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow-md border">
            <thead>
              <tr className="bg-blue-100">
                <th className="p-4 text-left text-blue-900">Batch Name</th>
                <th className="p-4 text-left text-blue-900">Students</th>
                <th className="p-4 text-left text-blue-900">Start Date</th>
              </tr>
            </thead>
            <tbody>
              {ongoingBatches.map((batch, idx) => (
                <tr
                  key={batch.id}
                  className={`border-b hover:bg-blue-50 ${
                    idx % 2 === 0 ? "bg-blue-50/40" : ""
                  }`}
                >
                  <td className="p-4 text-gray-800 font-medium">{batch.name}</td>
                  <td className="p-4 text-gray-800">{batch.students}</td>
                  <td className="p-4 text-gray-800">{batch.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Upcoming Batches */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-yellow-800">
            ⏳ Upcoming Batches
          </h2>
          <button
            onClick={() => setShowModal(true)}
            className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition font-semibold"
          >
            + Add New Batch
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow-md border">
            <thead>
              <tr className="bg-yellow-100">
                <th className="p-4 text-left text-yellow-900">Batch Name</th>
                <th className="p-4 text-left text-yellow-900">Students</th>
                <th className="p-4 text-left text-yellow-900">Start Date</th>
              </tr>
            </thead>
            <tbody>
              {upcomingBatches.map((batch, idx) => (
                <tr
                  key={batch.id}
                  className={`border-b hover:bg-yellow-50 ${
                    idx % 2 === 0 ? "bg-yellow-50/40" : ""
                  }`}
                >
                  <td className="p-4 text-gray-800 font-medium">{batch.name}</td>
                  <td className="p-4 text-gray-800">{batch.students}</td>
                  <td className="p-4 text-gray-800">{batch.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Batch Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Add New Batch
            </h3>
            <form onSubmit={handleAddBatch} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1">Batch Name</label>
                <input
                  type="text"
                  name="name"
                  value={newBatch.name}
                  onChange={handleChange}
                  className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Students</label>
                <input
                  type="number"
                  name="students"
                  value={newBatch.students}
                  onChange={handleChange}
                  className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Start Date</label>
                <input
                  type="date"
                  name="date"
                  value={newBatch.date}
                  onChange={handleChange}
                  className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-yellow-600 text-white hover:bg-yellow-700 transition"
                >
                  Add Batch
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BatchesCompleted;
