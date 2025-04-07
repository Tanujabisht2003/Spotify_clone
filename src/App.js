import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFormUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();
function App() {
  // const [token, setToken] = useState(null);
  const[{ user, token }, dispatch] = useDataLayerValue();
  // run code based on the given condition
  // we store token in hash which is get from url then we place null string in location of hash 
  // then we store token through settoken function
  useEffect(() => {
    const hash = getTokenFormUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });

      // setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        // console.log("", user);

        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) =>{
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist("37i9dQZEVXcQ9COmYvdajy").then(response =>{
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      })
      .catch(error => console.error("Error fetching playlist:", error));
    }
  }, []);

// if there is a token then it says i am logged in and if not then it redirect to login page 
  return (
    <div className="app">
      {
        token ? (
          <Player spotify={spotify}/>
        ):(
          <Login />
        )
      }
    </div>
  );
}

export default App;
