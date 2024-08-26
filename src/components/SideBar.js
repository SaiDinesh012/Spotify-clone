import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-[#1a1a1a] w-1/4 min-h-screen p-5 ">
      <div className="text-white text-2xl font-bold mb-6 flex items-center ">
          <img src="https://th.bing.com/th/id/R.a3558557dcdc5521b7c8a7dedb45ba0b?rik=d%2fAPHU9lcjkhVA&riu=http%3a%2f%2fhabitantsmusic.com%2fwp-content%2fuploads%2f2018%2f11%2fSpotify-social-media-logo-by-alfredocreates.png&ehk=L3iF34jK8cLwVKU0yQ9SbDGbMRVivo3ZBbEyehdFxZg%3d&risl=&pid=ImgRaw&r=0" className='h-8 mx-2'/> Spotify</div>
      {/* <div className="space-y-4">
        <button className="text-white font-semibold text-lg">For You</button>
        <button className="text-gray-400 text-lg">Top Tracks</button>
      </div> */}
      {/* <div className="mt-10">
        <input
          type="text"
          placeholder="Search Song, Artist"
          className="bg-[#2c2c2c] text-white rounded-full px-4 py-2 w-full"
        />
      </div> */}
      
      <div className="mt-8 space-y-4">
        {/* Add song list items dynamically */}
      </div>
      <div className="absolute bottom-5 left-5 flex items-center ">
        <img
          src="https://static.vecteezy.com/system/resources/previews/022/123/337/original/user-icon-profile-icon-account-icon-login-sign-line-vector.jpg"
          alt="User"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </div>
  );
};

export default Sidebar;
