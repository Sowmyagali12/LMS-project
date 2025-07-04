import React from "react";

const ContactForm = () => {
  return (
    <div className="form-card">
      {/* Embedded CSS */}
      <style>{`
        .form-card {
          max-width: 500px;
          margin: 50px auto;
          padding: 30px;
          background-color: #ffffff;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          font-family: Arial, sans-serif;
        }

        .form-card h3 {
          font-size: 28px;
          margin-bottom: 20px;
          color: #4b0082;
          text-align: center;
        }

        .form-card form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .form-card input,
        .form-card select,
        .form-card textarea {
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 16px;
        }

        .form-card .phone-group {
          display: flex;
          gap: 10px;
        }

        .form-card textarea {
          resize: vertical;
        }

        .form-card button {
          background-color: #C75DFF;
          color: white;
          padding: 12px;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .form-card button:hover {
          background-color: #C73DFF;
        }
      `}</style>

      <h3>Contact Us</h3>
      <form>
        <input type="text" placeholder="Enter Name" required />
        <input type="email" placeholder="Enter Email" required />
        <div className="phone-group">
          <select>
            <option>India (+91)</option>
            <option>USA (+1)</option>
            <option>UK (+44)</option>
            <option>Canada (+1)</option>
          </select>
          <input type="tel" placeholder="Enter Phone Number" required />
        </div>
        <textarea placeholder="Type your message here..." rows={3} required />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;