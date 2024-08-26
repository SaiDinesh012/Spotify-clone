import React from 'react';

const SongList = ({ songs, currentSongIndex, setCurrentSongIndex }) => {
  return (
    <div className="mt-4">
      {songs.map((song, index) => (
        <div
          key={song.id}
          className={`flex items-center justify-between p-2 text-white hover:bg-[#2c2c2c] rounded-lg cursor-pointer ${
            index === currentSongIndex ? 'bg-[#2c2c2c]' : ''
          }`}
          onClick={() => setCurrentSongIndex(index)}
        >
          <div className="flex items-center">
            <img
              src={`https://cms.samespace.com/assets/${song.cover}`}
              alt={song.title}
              className="w-10 h-10 rounded-lg mr-3"
            />
            <div>
              <div className="font-bold">{song.title}</div>
              <div className="text-gray-400">{song.artist}</div>
            </div>
          </div>
          <div>{song.duration}</div>
        </div>
      ))}
    </div>
  );
};

export default SongList;
