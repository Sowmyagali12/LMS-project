import React from "react";

const Notifications = () => {
  const notifications = [
    "New assignment posted",
    "Course deadline approaching",
    "Message from instructor",
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>
      {notifications.length > 0 ? (
        <ul className="list-disc pl-5">
          {notifications.map((n, idx) => (
            <li key={idx} className="mb-1">{n}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No new notifications</p>
      )}
    </div>
  );
};

export default Notifications;
