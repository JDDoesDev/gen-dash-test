import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App.jsx';
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
       <App />
    </BrowserRouter>,
    document.getElementById('root')
 );
 serviceWorker.unregister();
