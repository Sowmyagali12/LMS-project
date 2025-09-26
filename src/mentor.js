import React, { useState, useEffect } from "react";
import "./mentor.css";

export default function MentorDashboard() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Load chat messages from localStorage on mount
  useEffect(() => {
    const savedMessages = localStorage.getItem("mentor-chat");
    if (savedMessages) setMessages(JSON.parse(savedMessages));
  }, []);

  // Save chat messages to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("mentor-chat", JSON.stringify(messages));
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Got it! (Mock Reply)" },
      ]);
    }, 800);
  };

  return (
    <div className={`container ${darkMode ? "dark" : ""}`}>
      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <h2>ChatBox</h2>
        <div className="chat-box">
          {messages.map((msg, i) => (
            <div key={i} className={`chat-message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type a message..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="main">
        {/* Mobile Toggle Button */}
        <button className="toggle-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
          ☰ Chat
        </button>

        {/* Dark Mode Toggle */}
        <button className="dark-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>

        <div className="card">
          <h2>Next Schedule</h2>
          <p><b>Date:</b> 28 Sept 2025</p>
          <p><b>Time:</b> 10:00 AM - 11:30 AM</p>
          <p><b>Topic:</b> Java Interview Prep</p>
        </div>

        <div className="card">
          <h2>Upload Notes & PDFs</h2>
          <label className="upload-btn">
            <input type="file" multiple style={{ display: "none" }} />
            Upload Notes
          </label>
        </div>

        <div className="card">
          <h2>Assignments</h2>
          <label className="upload-btn">
            <input type="file" multiple style={{ display: "none" }} />
            Upload Assignments
          </label>
        </div>

        <div className="card">
          <h2>Weekly Assignment Updates</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Marks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>85</td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>92</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="card">
          <h2>Work Update</h2>
          <textarea rows="4" placeholder="Enter your work update..."></textarea>
          <button>Save</button>
        </div>

        <div className="card">
          <button className="logout">Logout</button>
        </div>
      </div>
    </div>
  );
}
