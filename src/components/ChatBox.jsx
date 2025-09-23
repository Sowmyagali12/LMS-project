import React, { useState } from "react";
import { FaPaperPlane, FaTimes, FaComments } from "react-icons/fa";

const ChatBox = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! 👋 How can I assist you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);

  const sendMessage = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "Thanks for your message! ✅", sender: "bot" },
      ]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Button */}
      {!open && (
        <button
          className="fixed bottom-5 right-5 rounded-full w-12 h-12 flex items-center justify-center shadow-lg
          bg-gradient-to-r from-[#1E40AF] via-[#1D4ED8] to-[#2563EB] 
          text-white hover:from-[#2563EB] hover:via-[#1D4ED8] hover:to-[#1E40AF] transition"
          onClick={() => setOpen(true)}
        >
          <FaComments size={22} />
        </button>
      )}

      {/* Chatbox */}
      {open && (
        <div className="fixed bottom-20 right-5 w-80 h-96 bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden animate-fadeIn">
          {/* Header */}
          <div className="p-3 flex justify-between items-center 
            bg-gradient-to-r from-[#0F172A] via-[#1E3A8A] to-[#3B82F6] text-white">
            <h4 className="font-semibold">💬 Live Support</h4>
            <button onClick={() => setOpen(false)}>
              <FaTimes />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto bg-gray-100 flex flex-col gap-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`max-w-[70%] px-4 py-2 rounded-2xl text-sm ${
                  msg.sender === "user"
                    ? "self-end bg-gradient-to-r from-[#1E40AF] via-[#1D4ED8] to-[#2563EB] text-white rounded-br-sm"
                    : "self-start bg-gray-200 text-black rounded-bl-sm"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex items-center p-2 border-t">
            <input
              type="text"
              placeholder="Write a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1 px-3 py-2 border rounded-full text-sm focus:outline-none"
            />
            <button
              onClick={sendMessage}
              className="ml-2 p-2 rounded-full 
              bg-gradient-to-r from-[#1E40AF] via-[#1D4ED8] to-[#2563EB] 
              text-white hover:from-[#2563EB] hover:via-[#1D4ED8] hover:to-[#1E40AF] transition"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBox;
