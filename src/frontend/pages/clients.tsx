import type { NextPage } from 'next';
import Navbar from '../components/Navbar';
import ClientList from '../components/ClientList';
import { useAuth } from '../utils/auth';
import { useRouter } from 'next/router';

const Clients: NextPage = () => {
  const { user } = useAuth();
  const router = useRouter();

  if (!user) {
    router.replace('/login');
    return null;
  }

  return (
    <div className="layout">
      <Navbar />
      <main className="content">
        <h2>Clienti</h2>
        <ClientList />
      </main>
    </div>
  );
};

export default Clients;