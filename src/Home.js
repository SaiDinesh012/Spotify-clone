import React, { useState, useEffect } from 'react';
import Sidebar from './components/SideBar';
import SongList from './components/SongList';
import Player from './components/player';
import { fetchSongs } from './api';

const Home = () => {
  const [songs, setSongs] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(''); // State to track the search input

  useEffect(() => {
    const loadSongs = async () => {
      const data = await fetchSongs();
      setSongs(data);
      setLoading(false);
    };
    loadSongs();
  }, []);

  <div className="space-y-4">
        <button className="text-white font-semibold text-lg">For You</button>
        <button className="text-gray-400 text-lg">Top Tracks</button>
      </div>
      
 // Filtered songs based on the search query
const filteredSongs = songs.filter((song) => {
  // Safely check if title and artist exist
  const title = song.title ? song.title.toLowerCase() : '';
  const artist = song.artist ? song.artist.toLowerCase() : '';
  return title.includes(searchQuery.toLowerCase()) || artist.includes(searchQuery.toLowerCase());
});


  if (loading) {
    return <div className="text-white text-center">Loading songs...</div>;
  }

  return (
    <div className="flex bg-[#121212] min-h-screen">
      <Sidebar />
      <div className="w-1/4 p-5">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search Song, Artist"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 mb-4 rounded bg-[#333] text-white"
        />
        <SongList
          songs={filteredSongs} // Use filtered songs here
          currentSongIndex={currentSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}
        />
      </div>
      {filteredSongs.length > 0 && (
        <Player
          currentSong={filteredSongs[currentSongIndex]}
          setCurrentSongIndex={setCurrentSongIndex}
          totalSongs={filteredSongs.length}
        />
      )}
    </div>
  );
};

export default Home;