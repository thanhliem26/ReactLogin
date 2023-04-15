import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login';
import Logout from './components/LogOut';
import { gapi } from 'gapi-script';

const clientId =
  "720269134461-ts8k3v3hmgev8iqd9a3hdja4fej3hq1e.apps.googleusercontent.com";


function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        cllientId: clientId,
        scope: ''
      })
    }

    gapi.load("client:auth2", start)
  })

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
     <Login />
     <Logout />
    </div>
  )
}

export default App
