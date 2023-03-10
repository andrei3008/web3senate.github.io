import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <GoogleReCaptchaProvider
              reCaptchaKey="6Lc3yckkAAAAANLfw6-VsUxhbHoXY961T5XF2gHb"
              useRecaptchaNet="false"
              useEnterprise="false"
          >
        <App />
          </GoogleReCaptchaProvider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
