import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
function GalleryPage() {
  const [isDarkMode, setIsDarkMode] = useState(true); // State to toggle dark mode
  const navigate=useNavigate()
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}> {/* Dark mode toggling */}
      <header className="p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Gallery Page</h1>
          <button
            onClick={toggleDarkMode}
            className="p-2 bg-gray-700 text-white rounded-md"
          >
            {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
        </div>
      </header>

      <main className="p-6">
        <h2 className="text-xl font-semibold mb-4">Photo Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Photo Thumbnails */}
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="group relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={`/placeholder-${i}.jpg`} // Replace with actual image URLs
                alt={`Image ${i}`}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button className="p-2 bg-white text-black rounded-md">View</button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            className="py-2 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            
            onClick={()=>{navigate("/signup")}}       >
            Sign Up
          </button>
        </div>
      </main>
    </div>
  );
}

export default GalleryPage;
