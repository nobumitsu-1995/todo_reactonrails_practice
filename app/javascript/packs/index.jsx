import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import App from '../components/App'
import '../components/App.css'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>,
    document.querySelector('#root'),
  );
});
