import React from "react";
import Sidebar from "../components/Sidebar";
import Body from "../components/Body";
import Right from "../components/Right";
import SpotifyWebApi from "spotify-web-api-node";

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
});

function Dashboard() {
  return (
    <main>
      <Sidebar />
      <Body spotifyApi={spotifyApi} />
      <Right />
    </main>
  );
}

export default Dashboard;
