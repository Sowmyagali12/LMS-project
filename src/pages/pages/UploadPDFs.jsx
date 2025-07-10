import React from 'react';

const UploadPDFs = () => {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">📄 Upload PDFs</h2>
      <input type="file" accept=".pdf" className="mb-4" />
      <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded">
        Upload PDF
      </button>
    </div>
  );
};

export default UploadPDFs;
