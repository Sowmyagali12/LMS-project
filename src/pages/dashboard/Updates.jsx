import React from "react";

const updates = [
  {
    title: "New Internship Openings",
    date: "15 Sept 2025",
    description: "Several new internships have been posted in the Placement Portal. Check them out!",
  },
  {
    title: "React Workshop",
    date: "12 Sept 2025",
    description: "A hands-on workshop on React.js will be conducted this Friday at 3 PM in Lab 2.",
  },
  {
    title: "Assignment Deadline Reminder",
    date: "10 Sept 2025",
    description: "Submit your Node.js Intro assignment by 14 Sept 2025 to avoid late penalties.",
  },
  {
    title: "Resume Building Session",
    date: "8 Sept 2025",
    description: "Attend the resume building session on Monday at 2 PM. Limited seats available.",
  },
];

const Updates = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">📢 Updates</h1>

      <div className="space-y-6">
        {updates.map((update, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 p-6 border border-gray-100"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold text-gray-800">{update.title}</h2>
              <span className="text-gray-500 text-sm">{update.date}</span>
            </div>
            <p className="text-gray-700">{update.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Updates;
