import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => (
  <Router>
    <Header />
    <main style={{ flex: 1, padding: 'var(--spacing-4)' }}>
      <Routes />
    </main>
    <Footer />
  </Router>
);

export default App;