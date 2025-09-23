// src/components/CertificateTemplate.jsx
import React, { useRef, forwardRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const CertificateTemplate = forwardRef(({ name, course, startDate, endDate }, ref) => {
  const certificateRef = useRef();

  React.useImperativeHandle(ref, () => ({
    handleDownload: async () => {
      const canvas = await html2canvas(certificateRef.current, {
        scale: 4,
        useCORS: true,
        allowTaint: true,
        scrollY: -window.scrollY,
      });
      const pdf = new jsPDF("landscape", "px", [canvas.width, canvas.height]);
      pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, canvas.width, canvas.height);
      pdf.save(`${name}-certificate.pdf`);
    },
  }));

  return (
    <div
      ref={certificateRef}
      className="relative w-[1100px] h-[750px] bg-[#fff8e0] border border-[#d4af37] overflow-hidden"
      style={{ fontFamily: "'Times New Roman', serif" }}
    >
      {/* Top-left Logo */}
      <div className="absolute top-6 left-6 flex items-center space-x-2">
        <div className="flex flex-col space-y-1">
          <div className="flex space-x-1">
            <div className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center font-bold">A</div>
            <div className="w-10 h-10 bg-yellow-400 text-white flex items-center justify-center font-bold">S</div>
            <div className="w-10 h-10 bg-pink-600 text-white flex items-center justify-center font-bold">A</div>
            <div className="w-10 h-10 bg-green-500 text-white flex items-center justify-center font-bold">R</div>
          </div>
          <div className="text-[10px] leading-tight">
            <p><span className="font-semibold">Advanced</span> Solutions</p>
            <p><span className="font-semibold">Applied</span> Realtime</p>
          </div>
        </div>
      </div>

      {/* Title */}
      <h1 className="absolute top-20 w-full text-center text-4xl font-bold text-[#b38600]">
        CERTIFICATE OF INTERNSHIP
      </h1>

      {/* Subtitle */}
      <p className="absolute top-44 w-full text-center text-xl italic text-[#6b2e2e]">
        This internship program certificate is awarded to
      </p>

      {/* Name */}
      <h2 className="absolute top-[180px] left-0 right-0 text-center text-3xl font-bold text-[#4B2E2E]">
        {name}
      </h2>

      {/* Horizontal line under name */}
      <div className="absolute top-[230px] left-[150px] right-[150px] h-[1px] bg-[#4B2E2E]" />

      {/* Course description */}
      <p className="absolute top-[270px] left-0 right-0 text-center text-lg text-[#4B2E2E] px-20">
        For the outstanding completion of the compulsory internship program in <span className="font-semibold">{course}</span> at ASAR IT Technologies from 
        <span className="underline"> {startDate} </span> to <span className="underline">{endDate}</span>
      </p>

      {/* Signature lines */}
      <div className="absolute bottom-16 left-16 text-center">
        <div className="border-t border-[#4B2E2E] w-40"></div>
        <p className="text-sm mt-1">CEO</p>
      </div>
      <div className="absolute bottom-16 right-16 text-center">
        <div className="border-t border-[#4B2E2E] w-40"></div>
        <p className="text-sm mt-1">Program Manager</p>
      </div>

      {/* Best Award Badge */}
      <div className="absolute bottom-16 right-0 mr-8">
        <div className="relative w-28 h-28">
          <div className="absolute inset-0 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg"></div>
          <div className="absolute inset-2 rounded-full bg-red-600 flex items-center justify-center">
            <span className="text-yellow-300 font-bold text-center text-sm">Best<br />Award</span>
          </div>
        </div>
      </div>

      {/* Gold Curves at Bottom (optional decoration) */}
      <div className="absolute bottom-0 left-0 w-full h-24 overflow-hidden">
        <svg viewBox="0 0 1100 100" className="w-full h-full">
          <path d="M0,100 C400,0 700,0 1100,100 L1100,100 L0,100 Z" fill="#d4af37" />
        </svg>
      </div>
    </div>
  );
});

export default CertificateTemplate;
