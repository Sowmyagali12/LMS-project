import React from "react";

const certificates = [
  {
    title: "Web Development Bootcamp",
    issuer: "Udemy",
    date: "Jan 2024",
    status: "Completed",
    image: "/images/certificate1.png", // place inside public/images
  },
  {
    title: "Python for Data Science",
    issuer: "Coursera",
    date: "Mar 2024",
    status: "In Progress",
    image: "/images/certificate2.png",
  },
];

const Certificate = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">🎓 Certificates</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-transform transform hover:-translate-y-1"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-5">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold text-gray-800">{cert.title}</h2>
                <span
                  className={`px-3 py-1 text-xs rounded-full ${
                    cert.status === "Completed"
                      ? "bg-green-100 text-green-600"
                      : "bg-yellow-100 text-yellow-600"
                  }`}
                >
                  {cert.status}
                </span>
              </div>
              <p className="text-sm text-gray-600">{cert.issuer}</p>
              <p className="text-xs text-gray-500 mt-1">{cert.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificate;
