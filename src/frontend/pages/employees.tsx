import type { NextPage } from 'next';
import Navbar from '../components/Navbar';
import EmployeeList from '../components/EmployeeList';
import { useAuth } from '../utils/auth';
import { useRouter } from 'next/router';

const Employees: NextPage = () => {
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
        <h2>Dipendenti</h2>
        <EmployeeList />
      </main>
    </div>
  );
};

export default Employees;