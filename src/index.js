import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import {createStore} from "redux";
import {loginReducer} from "./store/reducers/loginReducer";
import reportWebVitals from './reportWebVitals';
import axios from "axios";
import {BrowserRouter} from 'react-router-dom';

const store = createStore(loginReducer);

axios.defaults.baseURL = 'http://127.0.0.1:5000/';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwtToken');
axios.defaults.headers.post['Content-Type'] = 'application/json';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
