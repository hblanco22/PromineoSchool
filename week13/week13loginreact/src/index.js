import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';
import LoginForm from './components/loginform';
import Navbar from './components/navbar';



const login = React.createElement(LoginForm, {}, null);
const nav = React.createElement(Navbar, {}, null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  [nav, login]
);
