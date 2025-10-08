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
  const [downloadCert, setDownloadCert] = useState(null);
  const downloadRef = useRef();

  const filteredCertificates =
    filter === "All"
      ? certificates
      : certificates.filter((cert) => cert.status === filter);

  useEffect(() => {
    if (downloadCert && downloadRef.current) {
      downloadRef.current.handleDownload().then(() => {
        setDownloadCert(null);
      });
    }
  }, [downloadCert]);

  return (
    <div className="p-8 min-h-screen relative bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 font-sans">
      {/* Back Arrow */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 p-3 rounded-full hover:bg-blue-100 transition z-50"
      >
        <FaArrowLeft className="text-blue-600 w-7 h-7" />
      </button>

      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-5xl font-extrabold text-black mb-2 drop-shadow-sm">
          Certifications
        </h1>
        <p className="text-black text-lg max-w-3xl mx-auto">
          Showcase of courses and programs I have completed or currently pursuing.
        </p>
      </motion.div>

      {/* Grid Layout */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCertificates.map((cert, idx) => (
          <motion.div
            key={idx}
            className="bg-white border border-gray-300 rounded-2xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-105 flex flex-col justify-between h-80"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-2xl font-bold text-black">{cert.title}</h2>
              <span className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-green-200 to-green-400 text-green-900">
                {cert.status}
              </span>
            </div>

            <p className="text-sm text-black font-medium">{cert.issuer}</p>
            <p className="text-sm text-gray-600 mt-1">{cert.date}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {cert.skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-sm text-black px-3 py-1 rounded-full font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-4 flex gap-3">
              {/* View Modal */}
              <button
                onClick={() => setModalCert(cert)}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg font-semibold transition"
              >
                View
              </button>

              {/* Download directly */}
              <button
                onClick={() => setDownloadCert(cert)}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg text-lg font-semibold transition"
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
            name="gurram"
            course={downloadCert.title}
            startDate="01 Sep 2025"
            endDate={downloadCert.date}
          />
        </div>
      )}

      {/* Modal */}
      {modalCert && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative bg-white p-8 rounded-2xl max-w-[90vw] max-h-[90vh] overflow-auto shadow-2xl">
            <button
              onClick={() => setModalCert(null)}
              className="absolute top-3 right-3 text-black text-3xl font-bold bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-300 transition"
            >
              &times;
            </button>
            <CertificateTemplate
              name="gurram"
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
