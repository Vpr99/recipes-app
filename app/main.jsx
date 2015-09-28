require('./main.css');

import React from 'react';
import Parse from 'parse';
import ReactDOM from 'react-dom';

import { Router, Route, Link } from 'react-router'
import routeConfig from './routes.jsx';

/* Initialize Parse DB Connection */
Parse.initialize('AsY0nVRdatT75qNKpSsTLpEfEd8IZ4986wVmEEXO', 'EfJZe5ehfw25SVlHiawOotnYy7Z5eTesf5sXvFbi');

let app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<Router routes={routeConfig} />, app);
