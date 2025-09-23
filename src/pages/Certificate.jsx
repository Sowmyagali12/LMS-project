import React, { useState, useRef, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import CertificateTemplate from "../components/CertificateTemplate";

const certificates = [
  {
    title: "Java Internship",
    issuer: "ASAR IT Technologies",
    date: "Sep 2025",
    status: "Completed",
    skills: ["Java", "OOP", "Spring"],
  },
];

const CertificatePage = () => {
  const navigate = useNavigate();
  const [filter] = useState("All");
  const [modalCert, setModalCert] = useState(null);
  const [downloadCert, setDownloadCert] = useState(null); // certificate to download
  const downloadRef = useRef(); // ref for hidden CertificateTemplate

  const filteredCertificates =
    filter === "All"
      ? certificates
      : certificates.filter((cert) => cert.status === filter);

  // Effect: trigger download when downloadCert is set
  useEffect(() => {
    if (downloadCert && downloadRef.current) {
      downloadRef.current.handleDownload().then(() => {
        setDownloadCert(null); // reset after download
      });
    }
  }, [downloadCert]);

  return (
    <div className="p-6 min-h-screen relative bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 font-sans">
      {/* Back Arrow */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 p-2 rounded-full hover:bg-blue-100 transition z-50"
      >
        <FaArrowLeft className="text-blue-600 w-6 h-6" />
      </button>

      {/* Header */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-1">
          Certifications
        </h1>
        <p className="text-blue-700 text-sm md:text-base">
          Showcase of courses and programs I have completed or currently pursuing.
        </p>
      </motion.div>

      {/* Grid Layout */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCertificates.map((cert, idx) => (
          <motion.div
            key={idx}
            className="bg-white border border-blue-200 rounded-2xl shadow-md p-3 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-105 flex flex-col justify-between h-72"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <div className="flex justify-between items-center mb-1">
              <h2 className="text-md font-semibold text-blue-800">{cert.title}</h2>
              <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-gradient-to-r from-green-200 to-green-400 text-green-800">
                {cert.status}
              </span>
            </div>
            <p className="text-xs text-blue-600">{cert.issuer}</p>
            <p className="text-xs text-blue-500 mt-0.5">{cert.date}</p>
            <div className="mt-1 flex flex-wrap gap-1">
              {cert.skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-2 flex gap-2">
              {/* View Modal */}
              <button
                onClick={() => setModalCert(cert)}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-1.5 rounded-lg text-sm transition"
              >
                View
              </button>

              {/* Download directly */}
              <button
                onClick={() => setDownloadCert(cert)}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white py-1.5 rounded-lg text-sm transition"
              >
                Download
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Hidden CertificateTemplate for download */}
      {downloadCert && (
        <div style={{ position: "absolute", left: "-9999px", top: 0 }}>
          <CertificateTemplate
            ref={downloadRef}
            name="Boddu Bharath"
            course={downloadCert.title}
            startDate="01 Sep 2025"
            endDate={downloadCert.date}
          />
        </div>
      )}

      {/* Modal */}
      {modalCert && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative bg-white p-6 rounded-xl max-w-[90vw] max-h-[90vh] overflow-auto">
            <button
              onClick={() => setModalCert(null)}
              className="absolute top-2 right-2 text-black text-2xl font-bold bg-gray-200 rounded-full w-9 h-9 flex items-center justify-center hover:bg-gray-300 transition"
            >
              &times;
            </button>
            <CertificateTemplate
              name="Boddu Bharath"
              course={modalCert.title}
              startDate="01 Sep 2025"
              endDate={modalCert.date}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificatePage;
