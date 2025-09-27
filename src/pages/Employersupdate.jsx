import React, { useState } from "react";

const EmployersUpdate = () => {
  const [employers, setEmployers] = useState([
    { id: 1, name: "Google", status: "Active" },
    { id: 2, name: "Microsoft", status: "Pending" },
    { id: 3, name: "Amazon", status: "Inactive" },
  ]);

  const [search, setSearch] = useState("");
  const [newEmployer, setNewEmployer] = useState({ name: "", status: "Pending" });
  const [editingEmployer, setEditingEmployer] = useState(null);
  const [sortBy, setSortBy] = useState("name");

  // Add Employer
  const handleAddEmployer = () => {
    if (!newEmployer.name) return;
    setEmployers([
      ...employers,
      { id: employers.length + 1, ...newEmployer },
    ]);
    setNewEmployer({ name: "", status: "Pending" });
  };

  // Delete Employer
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this employer?")) {
      setEmployers(employers.filter((emp) => emp.id !== id));
    }
  };

  // Start Editing
  const handleEdit = (emp) => {
    setEditingEmployer(emp);
  };

  // Save Edit
  const handleSaveEdit = () => {
    setEmployers(
      employers.map((emp) =>
        emp.id === editingEmployer.id ? editingEmployer : emp
      )
    );
    setEditingEmployer(null);
  };

  // Status Badge Colors
  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-amber-100 text-amber-700";
      case "Inactive":
        return "bg-rose-100 text-rose-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  // Sort Employers
  const sortedEmployers = [...employers]
    .filter((emp) => emp.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "status") return a.status.localeCompare(b.status);
      return 0;
    });

  // Count Stats
  const stats = {
    Active: employers.filter((e) => e.status === "Active").length,
    Pending: employers.filter((e) => e.status === "Pending").length,
    Inactive: employers.filter((e) => e.status === "Inactive").length,
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Employers Update</h1>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-green-100 p-4 rounded-lg text-center">
          <h3 className="font-bold text-green-700">Active</h3>
          <p>{stats.Active}</p>
        </div>
        <div className="bg-amber-100 p-4 rounded-lg text-center">
          <h3 className="font-bold text-amber-700">Pending</h3>
          <p>{stats.Pending}</p>
        </div>
        <div className="bg-rose-100 p-4 rounded-lg text-center">
          <h3 className="font-bold text-rose-700">Inactive</h3>
          <p>{stats.Inactive}</p>
        </div>
      </div>

      {/* Search & Sort */}
      <div className="flex gap-3 mb-4">
        <input
          type="text"
          placeholder="Search employers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 p-2 rounded-lg flex-1 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
        />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
        >
          <option value="name">Sort by Name</option>
          <option value="status">Sort by Status</option>
        </select>
      </div>

      {/* Employer List */}
      <ul className="space-y-3">
        {sortedEmployers.map((emp) => (
          <li
            key={emp.id}
            className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center border border-gray-100 hover:shadow-md transition"
          >
            {editingEmployer?.id === emp.id ? (
              <div className="flex gap-3 flex-1">
                <input
                  type="text"
                  value={editingEmployer.name}
                  onChange={(e) =>
                    setEditingEmployer({ ...editingEmployer, name: e.target.value })
                  }
                  className="border p-2 rounded-lg flex-1"
                />
                <select
                  value={editingEmployer.status}
                  onChange={(e) =>
                    setEditingEmployer({ ...editingEmployer, status: e.target.value })
                  }
                  className="border p-2 rounded-lg"
                >
                  <option value="Active">Active</option>
                  <option value="Pending">Pending</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            ) : (
              <span className="font-semibold text-gray-800">{emp.name}</span>
            )}

            <div className="flex gap-3 items-center">
              {editingEmployer?.id === emp.id ? (
                <button
                  onClick={handleSaveEdit}
                  className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 transition"
                >
                  Save
                </button>
              ) : (
                <>
                  <span
                    className={`px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(
                      emp.status
                    )}`}
                  >
                    {emp.status}
                  </span>
                  <button
                    onClick={() => handleEdit(emp)}
                    className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(emp.id)}
                    className="bg-rose-500 text-white px-3 py-1 rounded-lg hover:bg-rose-600 transition"
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>

      {/* Add Employer */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Add Employer</h2>
        <input
          type="text"
          placeholder="Employer Name"
          value={newEmployer.name}
          onChange={(e) =>
            setNewEmployer({ ...newEmployer, name: e.target.value })
          }
          className="border border-gray-300 p-2 rounded-lg w-full mb-3 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
        />
        <select
          value={newEmployer.status}
          onChange={(e) =>
            setNewEmployer({ ...newEmployer, status: e.target.value })
          }
          className="border border-gray-300 p-2 rounded-lg w-full mb-3 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
        >
          <option value="Active">Active</option>
          <option value="Pending">Pending</option>
          <option value="Inactive">Inactive</option>
        </select>
        <button
          onClick={handleAddEmployer}
          className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition"
        >
          Add Employer
        </button>
      </div>
    </div>
  );
};

export default EmployersUpdate;
