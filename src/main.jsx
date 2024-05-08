import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SignInSignUpWithLocalStorage from './SignInSignUp/SignInSignUp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <SignInSignUpWithLocalStorage/>
  </React.StrictMode>,
)
