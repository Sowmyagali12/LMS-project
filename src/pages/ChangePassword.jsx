import React, { useState } from "react";

export default function CreatePassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      setMessage("⚠ Please fill in all fields.");
    } else if (password !== confirmPassword) {
      setMessage("❌ Passwords do not match.");
    } else {
      setMessage("✅ Password updated successfully!");
    }
  };

  return (
    <div>
      <style>{`
        .password-wrapper {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #c3ecf7, #f8d1e0);
          font-family: 'Segoe UI', sans-serif;
        }

        .password-box {
          background: linear-gradient(145deg, #ffffff, #f2f2f2);
          padding: 40px 30px;
          border-radius: 25px;
          width: 100%;
          max-width: 420px;
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
          text-align: center;
          border: 2px solid #fff;
        }

        .password-box h2 {
          font-size: 28px;
          font-weight: 700;
          color: #333;
          margin-bottom: 24px;
          text-shadow: 1px 1px #ddd;
        }

        .password-box label {
          font-weight: 600;
          color: #4b4b4b;
          margin-bottom: 8px;
          display: block;
          font-size: 15px;
          text-align: left;
        }

        .password-box input {
          width: 100%;
          padding: 12px;
          margin-bottom: 18px;
          border: 2px solid #d1d1d1;
          border-radius: 12px;
          background-color: #fafafa;
          font-size: 14px;
          text-align: center;
          transition: 0.3s;
        }

        .password-box input:focus {
          outline: none;
          border-color: #58aef7;
          background-color: #e9f5ff;
        }

        .password-box button {
          width: 100%;
          padding: 12px;
          background: linear-gradient(to right, #36d1dc, #5b86e5);
          color: white;
          font-weight: bold;
          border: none;
          border-radius: 12px;
          font-size: 16px;
          cursor: pointer;
          box-shadow: 0 6px 12px rgba(91, 134, 229, 0.3);
          transition: background 0.4s ease;
        }

        .password-box button:hover {
          background: linear-gradient(to right, #5b86e5, #36d1dc);
        }

        .message {
          margin: 10px 0;
          font-size: 14px;
          font-weight: 600;
          padding: 8px;
          border-radius: 8px;
        }

        .message.success {
          color: #0f5132;
          background-color: #d1e7dd;
          border: 1px solid #badbcc;
        }

        .message.error {
          color: #842029;
          background-color: #f8d7da;
          border: 1px solid #f5c2c7;
        }
      `}</style>

      <div className="password-wrapper">
        <div className="password-box">
          <h2>Create New Password</h2>
          <form onSubmit={handleSubmit}>
            <label>New Password</label>
            <input
              type="password"
              value={password}
              placeholder="Enter new password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              placeholder="Re-enter password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            {message && (
              <p
                className={`message ${
                  message.includes("successfully") ? "success" : "error"
                }`}
              >
                {message}
              </p>
            )}

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
