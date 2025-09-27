import React, { useState } from "react";

const Courses = () => {
  const [courses, setCourses] = useState([
    { id: 1, name: "Web Development", duration: "3 Months", description: "Learn full-stack basics" },
  ]);
  const [newCourse, setNewCourse] = useState("");
  const [newDuration, setNewDuration] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editDuration, setEditDuration] = useState("");
  const [editDescription, setEditDescription] = useState("");

  // Add Course
  const addCourse = () => {
    if (!newCourse.trim()) return;
    setCourses([
      ...courses,
      {
        id: courses.length + 1,
        name: newCourse,
        duration: newDuration || "N/A",
        description: newDescription || "No description",
      },
    ]);
    setNewCourse("");
    setNewDuration("");
    setNewDescription("");
  };

  // Delete Course
  const deleteCourse = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  // Clear All Courses
  const clearCourses = () => {
    if (window.confirm("Are you sure you want to remove all courses?")) {
      setCourses([]);
    }
  };

  // Start Editing
  const startEditing = (course) => {
    setEditId(course.id);
    setEditName(course.name);
    setEditDuration(course.duration);
    setEditDescription(course.description);
  };

  // Save Edited Course
  const saveEdit = () => {
    setCourses(
      courses.map((c) =>
        c.id === editId
          ? { ...c, name: editName, duration: editDuration, description: editDescription }
          : c
      )
    );
    setEditId(null);
    setEditName("");
    setEditDuration("");
    setEditDescription("");
  };

  // Filter + Sort Courses
  let filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(search.toLowerCase())
  );

  if (sortOption === "name") {
    filteredCourses = [...filteredCourses].sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOption === "duration") {
    filteredCourses = [...filteredCourses].sort((a, b) =>
      a.duration.localeCompare(b.duration)
    );
  }

  return (
    <div className="w-full min-h-screen p-4 space-y-8">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Courses</h1>

      {/* Search + Sort */}
      <div className="flex gap-4 flex-wrap mb-6">
        <input
          type="text"
          placeholder="Search courses..."
          className="px-4 py-2 border rounded-lg flex-1"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="px-4 py-2 border rounded-lg"
        >
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="duration">Duration</option>
        </select>
      </div>

      {/* Add Course Form */}
      <div className="flex flex-col gap-3 mb-6 bg-gray-50 p-4 rounded-lg shadow">
        <input
          type="text"
          placeholder="Course name"
          className="px-4 py-2 border rounded-lg"
          value={newCourse}
          onChange={(e) => setNewCourse(e.target.value)}
        />
        <input
          type="text"
          placeholder="Duration (e.g. 10 weeks, 1 year)"
          className="px-4 py-2 border rounded-lg"
          value={newDuration}
          onChange={(e) => setNewDuration(e.target.value)}
        />
        <textarea
          placeholder="Short description (optional)"
          className="px-4 py-2 border rounded-lg"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
        <div className="flex gap-3">
          <button
            onClick={addCourse}
            className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
          >
            Add Course
          </button>
          <button
            onClick={clearCourses}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Clear All
          </button>
        </div>
      </div>

      {/* Courses List */}
      {filteredCourses.length === 0 ? (
        <p className="text-gray-500 italic">No courses available.</p>
      ) : (
        <ul className="space-y-4">
          {filteredCourses.map((course) => (
            <li
              key={course.id}
              className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center"
            >
              {editId === course.id ? (
                <div className="flex flex-col gap-3 w-full">
                  <input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    className="px-3 py-2 border rounded-lg"
                  />
                  <input
                    type="text"
                    value={editDuration}
                    onChange={(e) => setEditDuration(e.target.value)}
                    className="px-3 py-2 border rounded-lg"
                  />
                  <textarea
                    value={editDescription}
                    onChange={(e) => setEditDescription(e.target.value)}
                    className="px-3 py-2 border rounded-lg"
                  />
                  <button
                    onClick={saveEdit}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <>
                  <div>
                    <h3 className="font-semibold text-gray-800">{course.name}</h3>
                    <p className="text-gray-500">Duration: {course.duration}</p>
                    <p className="text-gray-400 italic">{course.description}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => startEditing(course)}
                      className="px-3 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteCourse(course.id)}
                      className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Courses;
