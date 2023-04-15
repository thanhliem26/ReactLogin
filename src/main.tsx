import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
const clientId =
  "720269134461-ts8k3v3hmgev8iqd9a3hdja4fej3hq1e.apps.googleusercontent.com";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
 
    <App />
  
   
  </React.StrictMode>,
)
