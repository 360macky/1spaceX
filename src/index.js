import React from 'react';
import { createRoot } from 'react-dom/client';
import './global.css';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);

serviceWorkerRegistration.register();
