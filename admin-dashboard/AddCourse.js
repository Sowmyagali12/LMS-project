// src/pages/admin-dashboard/AddCourse.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminCourseList from './AdminCourseList';

export default function AddCourse() {
  const [course, setCourse] = useState({
    courseName: '',
    courseDuration: '',
    courseFee: '',
    courseSyllabus: '',
    demoLink: '',
    description: '',
    visibleToStudents: false,
  });

  const [coursesList, setCoursesList] = useState([...AdminCourseList]);
  const [editIndex, setEditIndex] = useState(null);
  const navigate = useNavigate();

  const handleAddCourse = () => {
    const {
      courseName,
      courseDuration,
      courseFee,
      courseSyllabus,
      demoLink,
      description,
    } = course;

    if (
      courseName &&
      courseDuration &&
      courseFee &&
      courseSyllabus &&
      demoLink &&
      description
    ) {
      const newCourse = {
        ...course,
        courseId: courseName.toLowerCase().replace(/\s+/g, '-'),
      };

      if (editIndex !== null) {
        const updatedCourses = [...coursesList];
        updatedCourses[editIndex] = { ...updatedCourses[editIndex], ...newCourse };
        setCoursesList(updatedCourses);
        setEditIndex(null);
      } else {
        setCoursesList([...coursesList, newCourse]);
      }

      setCourse({
        courseName: '',
        courseDuration: '',
        courseFee: '',
        courseSyllabus: '',
        demoLink: '',
        description: '',
        visibleToStudents: false,
      });
    }
  };

  const handleEditCourse = (index) => {
    const c = coursesList[index];
    setCourse({
      courseName: c.courseName,
      courseDuration: c.courseDuration,
      courseFee: c.courseFee,
      courseSyllabus: c.courseSyllabus,
      demoLink: c.demoLink,
      description: c.description,
      visibleToStudents: c.visibleToStudents ?? true,
    });
    setEditIndex(index);
  };

  return (
    <div className="bg-white shadow p-4 rounded overflow-auto">
      <h2 className="text-2xl font-bold mb-4">
        📚 {editIndex !== null ? 'Edit Course' : 'Add New Course'}
      </h2>

      {/* Input Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          placeholder="Course Name"
          className="border p-2 rounded"
          value={course.courseName}
          onChange={(e) => setCourse({ ...course, courseName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Duration (Eg. 4 Months)"
          className="border p-2 rounded"
          value={course.courseDuration}
          onChange={(e) => setCourse({ ...course, courseDuration: e.target.value })}
        />
        <input
          type="text"
          placeholder="Fee"
          className="border p-2 rounded"
          value={course.courseFee}
          onChange={(e) => setCourse({ ...course, courseFee: e.target.value })}
        />
        <input
          type="text"
          placeholder="Syllabus PDF Link"
          className="border p-2 rounded"
          value={course.courseSyllabus}
          onChange={(e) => setCourse({ ...course, courseSyllabus: e.target.value })}
        />
        <input
          type="text"
          placeholder="Demo YouTube Link"
          className="border p-2 rounded"
          value={course.demoLink}
          onChange={(e) => setCourse({ ...course, demoLink: e.target.value })}
        />
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="visibility"
            checked={course.visibleToStudents}
            onChange={(e) => setCourse({ ...course, visibleToStudents: e.target.checked })}
          />
          <label htmlFor="visibility" className="text-sm">
            Visible to Students
          </label>
        </div>
        <textarea
          placeholder="Course Description"
          className="border p-2 rounded col-span-1 md:col-span-2"
          rows={3}
          value={course.description}
          onChange={(e) => setCourse({ ...course, description: e.target.value })}
        />
      </div>

      <button
        onClick={handleAddCourse}
        className={`${
          editIndex !== null ? 'bg-green-600' : 'bg-blue-600'
        } text-white px-6 py-2 rounded hover:opacity-90`}
      >
        {editIndex !== null ? 'Update Course' : 'Add Course'}
      </button>

      {/* Course Table */}
      {coursesList.length > 0 && (
        <>
          <h3 className="text-xl font-semibold mt-8 mb-2">📄 Course List</h3>
          <div className="overflow-auto">
            <table className="w-full border border-collapse text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-2 py-1">Course ID</th>
                  <th className="border px-2 py-1">Name</th>
                  <th className="border px-2 py-1">Duration</th>
                  <th className="border px-2 py-1">Fee</th>
                  <th className="border px-2 py-1">Syllabus</th>
                  <th className="border px-2 py-1">Demo</th>
                  <th className="border px-2 py-1 w-52">Description</th>
                  <th className="border px-2 py-1">Visible</th>
                  <th className="border px-2 py-1">Actions</th>
                </tr>
              </thead>
              <tbody>
                {coursesList.map((c, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="border px-2 py-1">{c.courseId}</td>
                    <td className="border px-2 py-1">{c.courseName}</td>
                    <td className="border px-2 py-1">{c.courseDuration}</td>
                    <td className="border px-2 py-1">{c.courseFee}</td>
                    <td className="border px-2 py-1">
                      <a
                        href={c.courseSyllabus}
                        className="text-blue-600 underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        View
                      </a>
                    </td>
                    <td className="border px-2 py-1">
                      <a
                        href={c.demoLink}
                        className="text-blue-600 underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Demo
                      </a>
                    </td>
                    <td className="border px-2 py-1 max-w-[200px] break-words">
                      {c.description}
                    </td>
                    <td className="border px-2 py-1">
                      {c.visibleToStudents ? 'Yes' : 'No'}
                    </td>
                    <td className="border px-2 py-1">
                      <div className="flex flex-wrap gap-2">
                        <button
                          onClick={() => navigate(`/admin/upload-topic/${c.courseId}`)}
                          className="bg-purple-500 text-white px-2 py-1 rounded hover:bg-purple-600"
                        >
                          Upload
                        </button>
                        <button
                          onClick={() => handleEditCourse(i)}
                          className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                        >
                          Edit
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
