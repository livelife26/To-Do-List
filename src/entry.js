import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './todo-list/containers/App/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);