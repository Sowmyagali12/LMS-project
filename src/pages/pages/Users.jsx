import React, { useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Sandeep', email: 'sandeep@gmail.com', role: 'Admin', paid: true },
  ]);

  const [form, setForm] = useState({ name: '', email: '', role: '', paid: false });
  const [editingId, setEditingId] = useState(null);

  const handleInput = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleAddOrUpdate = () => {
    if (!form.name || !form.email || !form.role) return;

    if (editingId !== null) {
      setUsers(users.map((u) => (u.id === editingId ? { ...u, ...form } : u)));
      setEditingId(null);
    } else {
      const newUser = { id: Date.now(), ...form };
      setUsers([...users, newUser]);
    }

    setForm({ name: '', email: '', role: '', paid: false });
  };

  const handleEdit = (user) => {
    setForm({ name: user.name, email: user.email, role: user.role, paid: user.paid });
    setEditingId(user.id);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-700">Manage Users</h2>

      {/* Form */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <input name="name" value={form.name} onChange={handleInput} placeholder="Name" className="border px-4 py-2 rounded" />
          <input name="email" value={form.email} onChange={handleInput} placeholder="Email" className="border px-4 py-2 rounded" />
          <input name="role" value={form.role} onChange={handleInput} placeholder="Course" className="border px-4 py-2 rounded" />
          <label className="flex items-center gap-2">
            <input type="checkbox" name="paid" checked={form.paid} onChange={handleInput} />
            Paid
          </label>
        </div>
        <button onClick={handleAddOrUpdate} className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
          {editingId ? 'Update User' : 'Add User'}
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200 text-left">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Course</th>
              <th className="px-6 py-3">Payment</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t hover:bg-gray-50">
                <td className="px-6 py-3">{user.name}</td>
                <td className="px-6 py-3">{user.email}</td>
                <td className="px-6 py-3">{user.role}</td>
                <td className="px-6 py-3">
                  <span className={`px-3 py-1 rounded text-sm ${user.paid ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'}`}>
                    {user.paid ? 'Paid' : 'Unpaid'}
                  </span>
                </td>
                <td className="px-6 py-3 space-x-2">
                  <button onClick={() => handleEdit(user)} className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-1 rounded">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
