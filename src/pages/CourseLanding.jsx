// CourseLanding.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CourseLanding = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [error, setError] = useState('');
  const [bannerImageError, setBannerImageError] = useState(false);
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);

  const defaultBannerImageUrl = "https://via.placeholder.com/500x250?text=Banner+Not+Available";

  const handleBannerImageError = () => setBannerImageError(true);

  useEffect(() => {
    const loadRazorpayScript = () => {
      return new Promise((resolve) => {
        if (window.Razorpay) return resolve(true);
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
      });
    };

    loadRazorpayScript().then((loaded) => {
      if (loaded) setRazorpayLoaded(true);
      else setError("❌ Razorpay SDK failed to load. Please check your connection.");
    });
  }, []);

  useEffect(() => {
    const fetchCourse = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await fetch(`http://localhost:8080/course/course/get/${courseId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) throw new Error('❌ Failed to fetch course details.');
        const data = await response.json();
        setCourse(data);
      } catch (err) {
        setError(err.message || '❌ Something went wrong.');
      }
    };

    fetchCourse();
  }, [courseId]);

  const handleBuyCourse = async () => {
    if (!razorpayLoaded || !window.Razorpay) {
      alert("⚠️ Razorpay SDK not loaded. Please try again later.");
      return;
    }

    const token = localStorage.getItem('token');
    const studentId = localStorage.getItem('studentId');

    try {
      const res = await fetch(`http://localhost:8080/api/payment/payment/create-order/${courseId}/${studentId}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!res.ok) throw new Error("❌ Order creation failed. Please try again.");

      const order = await res.json();

      const options = {
        key: "rzp_test_xEAwfsS8xNAJS9",
        amount: order.amount,
        currency: order.currency,
        name: "Course Payment",
        description: `Payment for course: ${course?.courseName || 'N/A'}`,
        order_id: order.id,
        handler: async function (response) {
          alert("✅ Payment Successful!");

          try {
            const successRes = await fetch(`http://localhost:8080/api/payment/payment-success/${courseId}/${studentId}`, {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
              }
            });

            if (!successRes.ok) {
              const errText = await successRes.text();
              throw new Error(`⚠️ Payment callback failed: ${successRes.status} - ${errText}`);
            }

            alert("🎉 Course booked successfully!");
          } catch (err) {
            console.error("Booking Error:", err);
            alert("Booking failed: " + err.message);
          }
        },
        prefill: {
          name: "",
          email: "",
          contact: ""
        },
        notes: {
          course_id: courseId
        },
        theme: {
          color: "#38a169"
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (err) {
      console.error("Payment Error:", err);
      alert(err.message || "❌ Payment failed.");
    }
  };

  if (error) return <div className="text-center py-20 text-red-600 font-semibold">{error}</div>;
  if (!course) return <div className="text-center py-20">Loading course details...</div>;

  const bannerUrl = bannerImageError || !course.imageUrl
    ? defaultBannerImageUrl
    : `http://localhost:8080${course.imageUrl}`;

  return (
    <div className="bg-white text-gray-800">
      <div className="w-full bg-gray-100 py-6 flex flex-col items-center">
        <img
          src={bannerUrl}
          alt={`${course.courseName || 'Course'} Banner`}
          loading="lazy"
          className="rounded shadow-md object-cover"
          style={{ width: '100%', maxWidth: '600px', height: 'auto' }}
          onError={handleBannerImageError}
        />
      </div>

      <div className="max-w-6xl mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center px-4">
        <div className="bg-white shadow rounded p-6">
          <p className="text-indigo-600 font-bold text-lg">🎯 Internship Support</p>
          <p className="text-gray-600 mt-2">Internship opportunities after training</p>
        </div>
        <div className="bg-white shadow rounded p-6">
          <p className="text-purple-700 font-bold text-lg">📅 Duration</p>
          <p className="text-gray-600 mt-2">{course.courseDuration || 'N/A'}</p>
        </div>
        <div className="bg-white shadow rounded p-6">
          <p className="text-red-600 font-bold text-lg">💰 Price</p>
          <p className="text-gray-600 mt-2">₹{course.courseFee || 'N/A'}</p>
        </div>
        <div className="bg-white shadow rounded p-6 col-span-full">
          <p className="text-indigo-600 font-bold text-lg">📘 About Course</p>
          <p className="text-gray-600 mt-2">{course.description || 'No description available.'}</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4 pb-10 px-4">
        {course.pdfContentUrl && (
          <a
            href={course.pdfContentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 font-semibold shadow text-center"
          >
            📄 Download PDF
          </a>
        )}
        <button
          onClick={handleBuyCourse}
          className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 font-semibold shadow text-center"
        >
          🛒 Buy the Course
        </button>
      </div>
    </div>
  );
};

export default CourseLanding;
