import React from 'react';

const UploadVideos = () => {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">📂 Upload Videos</h2>
      <input type="file" accept="video/*" className="mb-4" />
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
        Upload Video
      </button>
    </div>
  );
};

export default UploadVideos;
