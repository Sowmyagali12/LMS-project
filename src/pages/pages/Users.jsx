import React, { useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Sandeep', email: 'sandeep@gmail.com', role: 'Admin', status: 'pending' },
  ]);

  const [form, setForm] = useState({ name: '', email: '', role: '' });
  const [editingId, setEditingId] = useState(null);

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddOrUpdate = () => {
    if (!form.name || !form.email || !form.role) return;

    if (editingId !== null) {
      setUsers(users.map((u) => (u.id === editingId ? { ...u, ...form } : u)));
      setEditingId(null);
    } else {
      const newUser = { id: Date.now(), ...form, status: 'pending' };
      setUsers([...users, newUser]);
    }

    setForm({ name: '', email: '', role: '' });
  };

  const handleEdit = (user) => {
    setForm({ name: user.name, email: user.email, role: user.role });
    setEditingId(user.id);
  };

  const handleDelete = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  const handleApprove = (id) => {
    setUsers(users.map((user) =>
      user.id === id ? { ...user, status: 'approved' } : user
    ));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-700">Manage Users</h2>

      {/* Form */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <input name="name" value={form.name} onChange={handleInput} placeholder="Name" className="border px-4 py-2 rounded" />
          <input name="email" value={form.email} onChange={handleInput} placeholder="Email" className="border px-4 py-2 rounded" />
          <input name="role" value={form.role} onChange={handleInput} placeholder="Course" className="border px-4 py-2 rounded" />
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
              <th className="px-6 py-3">Status</th>
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
                  <span className={`px-3 py-1 rounded text-sm ${user.status === 'approved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-3 space-x-2">
                  {user.status === 'pending' && (
                    <button
                      onClick={() => handleApprove(user.id)}
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded"
                    >
                      Approve
                    </button>
                  )}
                  <button onClick={() => handleEdit(user)} className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-1 rounded">Edit</button>
                  <button onClick={() => handleDelete(user.id)} className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded">Reject</button>
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
