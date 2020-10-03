import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './routes/App';

axios.defaults.baseURL = 'https://social-jobs-dev-back.herokuapp.com/api/';
axios.defaults.headers.common['Authorization'] =
  `Bearer${localStorage.getItem('token')}`;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app'),
);
