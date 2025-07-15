// src/pages/admin-dashboard/AddTopic.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CourseTopicList from './AdminCourseTopicList'; // ✅ Make sure path is correct

export default function AddTopic() {
  const { courseId } = useParams();

  // Find the course's topic array from CourseTopicList
  const courseData = CourseTopicList.find(course => course.courseId === courseId);
  const initialTopics = courseData ? courseData.topics : [];

  const [formData, setFormData] = useState({
    topicTitle: '',
    videoLink: '',
    pdfLink: '',
  });

  const [topicList, setTopicList] = useState([...initialTopics]);

  const handleAddTopic = () => {
    if (formData.topicTitle && formData.videoLink && formData.pdfLink) {
      const newTopic = {
        topicId: formData.topicTitle.toLowerCase().replace(/\s+/g, '-'),
        ...formData,
      };
      setTopicList([...topicList, newTopic]);
      setFormData({ topicTitle: '', videoLink: '', pdfLink: '' });

      // Optional: Save to backend or persistent storage
    }
  };

  return (
    <div className="bg-white shadow p-4 rounded">
      <h2 className="text-2xl font-bold mb-4">
        📘 Upload Topic for: <span className="text-blue-600">{courseId}</span>
      </h2>

      {/* Input Fields */}
      <div className="flex flex-col md:flex-row md:items-center mb-6 space-y-2 md:space-y-0 md:space-x-4">
        <input
          type="text"
          placeholder="Topic Title"
          className="border p-2 flex-1"
          value={formData.topicTitle}
          onChange={(e) =>
            setFormData({ ...formData, topicTitle: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Video Link"
          className="border p-2 flex-1"
          value={formData.videoLink}
          onChange={(e) =>
            setFormData({ ...formData, videoLink: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="PDF Link"
          className="border p-2 flex-1"
          value={formData.pdfLink}
          onChange={(e) =>
            setFormData({ ...formData, pdfLink: e.target.value })
          }
        />
        <button
          className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
          onClick={handleAddTopic}
        >
          Add
        </button>
      </div>

      {/* Topics Table */}
      {topicList.length > 0 && (
        <>
          <h3 className="text-lg font-semibold mb-2">🗂️ Uploaded Topics</h3>
          <table className="w-full border border-collapse text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">Topic</th>
                <th className="border px-4 py-2">Video</th>
                <th className="border px-4 py-2">PDF</th>
              </tr>
            </thead>
            <tbody>
              {topicList.map((item, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{item.topicTitle}</td>
                  <td className="border px-4 py-2">
                    <a
                      href={item.videoLink}
                      className="text-blue-600 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Watch Video
                    </a>
                  </td>
                  <td className="border px-4 py-2">
                    <a
                      href={item.pdfLink}
                      className="text-green-600 underline"
                      download
                    >
                      Download PDF
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}
