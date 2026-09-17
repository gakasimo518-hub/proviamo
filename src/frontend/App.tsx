import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserList from './components/UserList';
import './styles/global.css';

const App: React.FC = () => (
  <Router>
    <header className="app-header">
      <h1 className="app-title">Proviamo</h1>
      <nav>
        <Link to="/" className="nav-link">Users</Link>
      </nav>
    </header>

    <main className="app-main">
      <Routes>
        <Route path="/" element={<UserList />} />
      </Routes>
    </main>

    <footer className="app-footer">
      <p>© 2026 Proviamo</p>
    </footer>
  </Router>
);

export default App;