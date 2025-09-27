import React, { useState } from "react";

const StudentsHired = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Rahul Sharma", company: "Google", position: "Intern" },
    { id: 2, name: "Anita Verma", company: "Microsoft", position: "Full-time" },
    { id: 3, name: "Karan Mehta", company: "Amazon", position: "Contract" },
  ]);

  const [search, setSearch] = useState("");
  const [newStudent, setNewStudent] = useState({
    name: "",
    company: "",
    position: "Intern",
  });

  // Add student
  const handleAddStudent = () => {
    if (!newStudent.name || !newStudent.company) return;
    setStudents([...students, { id: students.length + 1, ...newStudent }]);
    setNewStudent({ name: "", company: "", position: "Intern" });
  };

  // Delete student
  const handleDelete = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  // Badge color for positions
  const getPositionColor = (position) => {
    switch (position) {
      case "Intern":
        return "bg-blue-100 text-blue-700";
      case "Full-time":
        return "bg-green-100 text-green-700";
      case "Contract":
        return "bg-amber-100 text-amber-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Students Hired</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by name or company..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border border-gray-300 p-2 rounded-lg w-full mb-4 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
      />

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-sm">
        <table className="w-full">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Company</th>
              <th className="p-4 text-left">Position</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students
              .filter(
                (s) =>
                  s.name.toLowerCase().includes(search.toLowerCase()) ||
                  s.company.toLowerCase().includes(search.toLowerCase())
              )
              .map((student) => (
                <tr
                  key={student.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-4">{student.name}</td>
                  <td className="p-4">{student.company}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 text-sm rounded-full font-medium ${getPositionColor(
                        student.position
                      )}`}
                    >
                      {student.position}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    <button
                      onClick={() => handleDelete(student.id)}
                      className="bg-rose-500 text-white px-3 py-1 rounded-lg hover:bg-rose-600 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Add Student Form */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Add Student</h2>
        <input
          type="text"
          placeholder="Student Name"
          value={newStudent.name}
          onChange={(e) =>
            setNewStudent({ ...newStudent, name: e.target.value })
          }
          className="border border-gray-300 p-2 rounded-lg w-full mb-3 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
        />
        <input
          type="text"
          placeholder="Company"
          value={newStudent.company}
          onChange={(e) =>
            setNewStudent({ ...newStudent, company: e.target.value })
          }
          className="border border-gray-300 p-2 rounded-lg w-full mb-3 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
        />
        <select
          value={newStudent.position}
          onChange={(e) =>
            setNewStudent({ ...newStudent, position: e.target.value })
          }
          className="border border-gray-300 p-2 rounded-lg w-full mb-3 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
        >
          <option value="Intern">Intern</option>
          <option value="Full-time">Full-time</option>
          <option value="Contract">Contract</option>
        </select>
        <button
          onClick={handleAddStudent}
          className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition"
        >
          Add Student
        </button>
      </div>
    </div>
  );
};

export default StudentsHired; 