import React, { useState, useEffect } from 'react';
import './App.css';
import db from './firebase';
import VideoCard from './VideoCard';

function App() {
  const [reels, setReels] = useState([]);
  useEffect(()=> {
    //  App Component will run ONCE when it loads, and never again
    db.collection('reels').onSnapshot(snapshot => (
      setReels(snapshot.docs.map(doc => doc.data()))
  ))
  }, [])
  return (
    <div className="app">
      <div className= "appTop">
        {/** Instagram logo image */}
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png" alt="" className="appLogo"/>
        {/** Reels */}
        <h1>Reels</h1>
      </div>
      <div className = "appVideos">
        {/* Container of appVideos(scrollable content) */}
        {reels.map(({channel,avatarSrc, song, url, likes, shares}) => (
          <VideoCard 
          channel = {channel}
          avatarSrc = {avatarSrc}
          song = {song}
          url = {url}
          likes = {likes}
          shares = {shares} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;
