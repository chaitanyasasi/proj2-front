import React from 'react';
import ReactDom from 'react-dom/client';
import Routing from './Router.js';

const container = document.getElementById("root");
const root = ReactDom.createRoot(container);
root.render(<Routing />);