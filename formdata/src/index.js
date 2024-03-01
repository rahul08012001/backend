import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
//import {Provider} from "react-redux";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 // <Provider store={store}>
  <React.StrictMode>
   
    <BrowserRouter>
           <div className="App">
             
           <App/>
          </div>
       </BrowserRouter>

  </React.StrictMode>
//  </Provider>
);


reportWebVitals();
