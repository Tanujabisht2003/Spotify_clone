import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFormUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';

const spotify = new SpotifyWebApi();
function App() {
  const [token, setToken] = useState(null);
  // run code based on the given condition
  // we store token in hash which is get from url then we place null string in location of hash 
  // then we store token through settoken function
  useEffect(() => {
    const hash = getTokenFormUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log("", user);
      });
    }
    console.log("I have a token", token);
  }, [])
// if there is a token then it says i am logged in and if not then it redirect to login page 
  return (
    <div className="app">
      {
        token ? (
          <Player />
        ):(
          <Login />
        )
      }
    </div>
  );
}

export default App;
