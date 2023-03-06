import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

//Styles
import 'react-toastify/dist/ReactToastify.css';
import './index.css'

//Router
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

//axios
import axios from "axios"
import { localTokenKey } from './Components/Constants';
axios.defaults.baseURL = "https://nt-jobify.onrender.com/api/v1"
axios.defaults.headers.common["Content-Type"] = "application/json"
let token = localStorage.getItem(localTokenKey)
if (token) axios.defaults.headers.common["access-token"] = token

//store
import { Provider } from 'react-redux'
import store from './store';

//i18next
import "./i18n"

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
    <ToastContainer theme='colored' />
  </Router>,
)