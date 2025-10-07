import React, { useState, useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaGraduationCap,
  FaBriefcase,
  FaTools,
  FaArrowLeft,
  FaCopy,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const ResumeBuilder = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
    skills: "",
  });

  const [aiResume, setAiResume] = useState("");
  const [loading, setLoading] = useState(false);
  const previewRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGenerateResume = async () => {
    setLoading(true);
    try {
      const genAI = new GoogleGenerativeAI("YOUR_API_KEY");
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = `
        Create a professional resume with the following details:

        Name: ${formData.fullName}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Education: ${formData.education}
        Experience: ${formData.experience}
        Skills: ${formData.skills}

        Format with proper sections (Summary, Education, Experience, Skills).
      `;

      const result = await model.generateContent(prompt);
      setAiResume(result.response.text());
    } catch (error) {
      console.error("Error generating resume:", error);
      alert("Failed to generate resume. Check API key and network.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadPDF = async () => {
    const element = previewRef.current;
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${formData.fullName || "resume"}.pdf`);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(aiResume);
    alert("Resume copied to clipboard!");
  };

  const fields = [
    { name: "fullName", icon: <FaUser />, type: "text", placeholder: "Full Name" },
    { name: "email", icon: <FaEnvelope />, type: "email", placeholder: "Email" },
    { name: "phone", icon: <FaPhone />, type: "text", placeholder: "Phone" },
    { name: "education", icon: <FaGraduationCap />, type: "textarea", placeholder: "Education", rows: 3 },
    { name: "experience", icon: <FaBriefcase />, type: "textarea", placeholder: "Experience", rows: 3 },
    { name: "skills", icon: <FaTools />, type: "text", placeholder: "Skills (comma separated)" },
  ];

  const fieldVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({ opacity: 1, x: 0, transition: { delay: i * 0.1 } }),
  };

  const previewVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <div className="min-h-screen p-10 relative bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 text-gray-900 font-sans">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 p-2 rounded-full hover:bg-blue-100 transition z-50"
      >
        <FaArrowLeft className="text-blue-600 w-6 h-6" />
      </button>

      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-5xl font-extrabold mb-3 text-blue-900 drop-shadow-sm">
          AI Resume Builder
        </h1>
        <p className="text-blue-700 text-lg max-w-2xl mx-auto">
          Generate a professional resume with AI assistance.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* Left - Form */}
        <motion.div
          className="rounded-2xl p-8 bg-white border border-gray-200 shadow-md transform transition-all hover:-translate-y-1 hover:shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-blue-800 mb-6 border-b border-gray-200 pb-3">
            ✍️ Enter Your Details
          </h2>
          <form className="space-y-5">
            {fields.map((field, i) => (
              <motion.div
                key={field.name}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={fieldVariants}
                className={`flex ${field.type === "textarea" ? "items-start" : "items-center"} border rounded-lg p-3 bg-white hover:border-blue-400 transition focus-within:ring-2 focus-within:ring-blue-300`}
              >
                <div className="text-blue-500 mr-3 mt-1">{field.icon}</div>
                {field.type === "textarea" ? (
                  <textarea
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    rows={field.rows}
                    className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-400 resize-none"
                  />
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-400"
                  />
                )}
              </motion.div>
            ))}
          </form>

          <motion.button
            onClick={handleGenerateResume}
            disabled={loading}
            whileTap={{ scale: 0.95 }}
            className="mt-6 w-full py-3 px-6 bg-blue-600 text-white rounded-lg font-semibold shadow-md hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? "Generating..." : "Generate AI Resume"}
          </motion.button>
        </motion.div>

        {/* Right - Preview */}
        <AnimatePresence mode="wait">
          <motion.div
            key={aiResume ? "preview" : "placeholder"}
            className="rounded-2xl p-8 bg-white border border-gray-200 shadow-md overflow-y-auto max-h-[75vh] scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-blue-100 transform transition-all hover:-translate-y-1 hover:shadow-lg"
            ref={previewRef}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={previewVariants}
          >
            <h2 className="text-2xl font-bold text-blue-800 mb-6 border-b border-gray-200 pb-3">
              AI-Generated Resume
            </h2>
            <div className="prose max-w-none text-gray-800 whitespace-pre-wrap leading-relaxed">
              {aiResume
                ? aiResume.split("\n\n").map((section, idx) => <p key={idx}>{section}</p>)
                : "✨ Your AI-generated resume will appear here..."}
            </div>

            {aiResume && (
              <motion.div className="mt-6 flex flex-col gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <motion.button
                  onClick={handleDownloadPDF}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg font-semibold shadow-md hover:bg-blue-700 transition"
                >
                  ⬇ Download as PDF
                </motion.button>
                <motion.button
                  onClick={handleCopy}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-2 px-4 border border-blue-400 text-blue-700 rounded-lg hover:bg-blue-50 transition flex items-center justify-center gap-2"
                >
                  <FaCopy /> Copy to Clipboard
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ResumeBuilder;
