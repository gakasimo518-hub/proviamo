import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './theme/colors.css';
import './theme/typography.css';
import './theme/spacing.css';

const container = document.getElementById('root');
if (!container) throw new Error('Root container missing');
const root = createRoot(container);
root.render(<App />);