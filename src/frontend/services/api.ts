const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:3000';

export const getUsers = async () => {
  const res = await fetch(`${API_BASE}/api/users`);
  if (!res.ok) {
    const error = await res.text();
    throw new Error(error || 'Failed to fetch users');
  }
  return res.json();
};