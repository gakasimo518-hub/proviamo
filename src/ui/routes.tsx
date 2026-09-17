import React from 'react';
import { Routes as ReactRoutes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/Users';
import Items from './pages/Items';

const Routes: React.FC = () => (
  <ReactRoutes>
    <Route path="/" element={<Home />} />
    <Route path="/users" element={<Users />} />
    <Route path="/items" element={<Items />} />
  </ReactRoutes>
);

export default Routes;