import type { NextPage } from 'next';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { login } from '../api/authApi';
import Navbar from '../components/Navbar';
import { useAuth } from '../utils/auth';

const Login: NextPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { setUser } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { token, user } = await login(email, password);
      localStorage.setItem('token', token);
      setUser(user);
      router.replace('/');
    } catch (err: any) {
      setError(err.message || 'Errore di login');
    }
  };

  return (
    <div className="layout">
      <Navbar />
      <main className="content">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="form">
          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          {error && <p className="error">{error}</p>}
          <button type="submit">Accedi</button>
        </form>
      </main>
    </div>
  );
};

export default Login;