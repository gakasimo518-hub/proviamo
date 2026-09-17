import type { NextPage } from 'next';
import Navbar from '../components/Navbar';
import { useAuth } from '../utils/auth';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace('/login');
    }
  }, [user, router]);

  return (
    <div className="layout">
      <Navbar />
      <main className="content">
        <h1>Benvenuto nella gestione delle scarpe!</h1>
        <p>Seleziona una sezione dal menu.</p>
      </main>
    </div>
  );
};

export default Home;