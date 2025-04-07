import React, { useState } from 'react';
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { useDataLayerValue } from './DataLayer';

function Sidebar() {
   const [ { playlists }, dispatch] = useDataLayerValue(); 
  return (
    <div className="sidebar">
        <img className="sidebar_logo" 
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_White-300x82.png" alt= "" />
        <SidebarOption Icon={HomeIcon} title="Home" />
        <SidebarOption Icon={SearchIcon} title="Search" />
        <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />

        {/* for gap */}
        <br/>
        <strong className="sidebar__title">PLAYLISTS</strong>
        {/* for line  */}
        <hr />

        {playlists?.items?.map(playlist => (
            <SidebarOption title={playlist.name} />
        ))}

        {/* <SidebarOption title="Hip hop" />
        <SidebarOption title="Rock" />
        <SidebarOption title="RnB" /> */}
    </div>
  );
}

export default Sidebar
