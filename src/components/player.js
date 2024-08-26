import React, { useRef, useState, useEffect } from 'react';

const Player = ({ currentSong, setCurrentSongIndex, totalSongs }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % totalSongs); // Loop back to the first song if at the end
  };

  const handlePrevious = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === 0 ? totalSongs - 1 : prevIndex - 1
    ); // Loop back to the last song if at the start
  };

  // Automatically play when the currentSong changes
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    }
  }, [currentSong, isPlaying]);

  return (
    <div className="flex flex-col items-center justify-center w-3/4 p-10">
      <div className="text-white text-3xl font-bold mb-2">{currentSong.title}</div>
      <div className="text-gray-400 text-lg mb-6">{currentSong.artist}</div>
      <img
        src={`https://cms.samespace.com/assets/${currentSong.cover}`}
        alt={currentSong.title}
        className="w-96 h-96 rounded-lg shadow-lg mb-8"
      />
      <audio ref={audioRef} src={currentSong.url} preload="auto"></audio>
      <div className="flex space-x-4">
        <button className="text-white" onClick={handlePrevious}>Previous</button>
        <button className="text-white" onClick={togglePlayPause}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button className="text-white" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Player;
