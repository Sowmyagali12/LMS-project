import React, { useState } from "react";

const Internships = () => {
  const [internships, setInternships] = useState([
    { id: 1, title: "Web Development", company: "TechCorp", duration: "3 Months", startDate: "2025-07-01", endDate: "2025-10-01", applied: 40 },
    { id: 2, title: "AI/ML", company: "AI Labs", duration: "2 Months", startDate: "2025-07-05", endDate: "2025-09-05", applied: 55 },
    { id: 3, title: "Full Stack", company: "WebWorks", duration: "4 Months", startDate: "2025-07-10", endDate: "2025-11-10", applied: 30 },
    { id: 4, title: "Data Science", company: "DataSolutions", duration: "3 Months", startDate: "2025-10-01", endDate: "2025-12-31", applied: 48 },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newInternship, setNewInternship] = useState({
    title: "",
    company: "",
    duration: "",
    startDate: "",
    endDate: "",
    applied: "",
  });

  const handleChange = (e) => {
    setNewInternship({ ...newInternship, [e.target.name]: e.target.value });
  };

  const handleAddInternship = (e) => {
    e.preventDefault();
    if (!newInternship.title || !newInternship.company || !newInternship.duration || !newInternship.startDate || !newInternship.endDate) {
      alert("Please fill all fields");
      return;
    }

    const internship = {
      id: Date.now(),
      ...newInternship,
      applied: parseInt(newInternship.applied) || 0,
    };

    setInternships([...internships, internship]);
    setNewInternship({ title: "", company: "", duration: "", startDate: "", endDate: "", applied: "" });
    setShowModal(false);
  };

  const today = new Date();

  const ongoingInternships = internships.filter(
    (i) => new Date(i.startDate) <= today && today <= new Date(i.endDate)
  );

  const upcomingInternships = internships.filter((i) => new Date(i.startDate) > today);

  return (
    <div className="p-6 w-full min-h-screen space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Internships 💼</h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition"
        >
          Add Internship
        </button>
      </div>

      {/* Ongoing Internships */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Ongoing Internships</h2>
        {ongoingInternships.length === 0 ? (
          <p className="text-gray-500 italic">No ongoing internships.</p>
        ) : (
          <div className="overflow-x-auto shadow-lg rounded-lg mb-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-yellow-600 text-white">
                  <th className="px-6 py-3 text-left">Title</th>
                  <th className="px-6 py-3 text-left">Company</th>
                  <th className="px-6 py-3 text-left">Duration</th>
                  <th className="px-6 py-3 text-left">Start Date</th>
                  <th className="px-6 py-3 text-left">End Date</th>
                  <th className="px-6 py-3 text-left">Students Applied</th>
                </tr>
              </thead>
              <tbody>
                {ongoingInternships.map((i, idx) => (
                  <tr key={i.id} className={`${idx % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-yellow-50 transition`}>
                    <td className="px-6 py-3">{i.title}</td>
                    <td className="px-6 py-3">{i.company}</td>
                    <td className="px-6 py-3">{i.duration}</td>
                    <td className="px-6 py-3">{i.startDate}</td>
                    <td className="px-6 py-3">{i.endDate}</td>
                    <td className="px-6 py-3 font-semibold">{i.applied}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Upcoming Internships */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Upcoming Internships</h2>
        {upcomingInternships.length === 0 ? (
          <p className="text-gray-500 italic">No upcoming internships.</p>
        ) : (
          <div className="overflow-x-auto shadow-lg rounded-lg mb-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-green-700 text-white">
                  <th className="px-6 py-3 text-left">Title</th>
                  <th className="px-6 py-3 text-left">Company</th>
                  <th className="px-6 py-3 text-left">Duration</th>
                  <th className="px-6 py-3 text-left">Start Date</th>
                  <th className="px-6 py-3 text-left">End Date</th>
                  <th className="px-6 py-3 text-left">Students Applied</th>
                </tr>
              </thead>
              <tbody>
                {upcomingInternships.map((i, idx) => (
                  <tr key={i.id} className={`${idx % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-green-50 transition`}>
                    <td className="px-6 py-3">{i.title}</td>
                    <td className="px-6 py-3">{i.company}</td>
                    <td className="px-6 py-3">{i.duration}</td>
                    <td className="px-6 py-3">{i.startDate}</td>
                    <td className="px-6 py-3">{i.endDate}</td>
                    <td className="px-6 py-3 font-semibold">{i.applied}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Add Internship Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Add New Internship</h3>
            <form onSubmit={handleAddInternship} className="space-y-4">
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={newInternship.title}
                onChange={handleChange}
                className="w-full border p-2 rounded-lg"
              />
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={newInternship.company}
                onChange={handleChange}
                className="w-full border p-2 rounded-lg"
              />
              <input
                type="text"
                name="duration"
                placeholder="Duration e.g., 3 Months"
                value={newInternship.duration}
                onChange={handleChange}
                className="w-full border p-2 rounded-lg"
              />
              <input
                type="date"
                name="startDate"
                value={newInternship.startDate}
                onChange={handleChange}
                className="w-full border p-2 rounded-lg"
              />
              <input
                type="date"
                name="endDate"
                value={newInternship.endDate}
                onChange={handleChange}
                className="w-full border p-2 rounded-lg"
              />
              <input
                type="number"
                name="applied"
                placeholder="Students Applied"
                value={newInternship.applied}
                onChange={handleChange}
                className="w-full border p-2 rounded-lg"
              />
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
                  className="px-4 py-2 rounded-lg bg-blue-700 text-white hover:bg-blue-800 transition"
                >
                  Add Internship
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Internships;
