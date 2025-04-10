import React, { useState, useEffect } from 'react';
import { Camera, Heart, Settings, LogOut, Share2, Download, ZoomIn, LetterText, FilePen, User2, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import profileImage from './image/profil.jpg';
import logoImage from './image/logo.png'; // Correct logo image import

// Assuming you have a PhotoThumbnail component, here's a basic implementation:
function PhotoThumbnail({ src = "/placeholder.svg" }) {
  const [liked, setLiked] = useState(false);

  // Toggle like status
  const toggleLike = () => {
    setLiked(!liked);
  };

  // Handle image enlarge (you can implement a modal for enlargement later)
  const enlargeImage = () => {
    alert("Image agrandie!");
  };

  // Handle download (you can implement actual download functionality)
  const downloadImage = () => {
    alert("Téléchargement de l'image!");
  };

  // Handle share functionality (you can implement actual sharing logic)
  const shareImage = () => {
    alert("Partager l'image!");
  };

  return (
    <div className="relative w-full" style={{ aspectRatio: '1' }}>
      <img
        src={src}
        alt="Thumbnail"
        className="object-cover w-full h-full"
      />
      {/* Image options below */}
      <div className="absolute bottom-2 left-2 right-2 flex justify-between text-black p-2 rounded-lg">
        <button onClick={enlargeImage} className="flex items-center gap-1">
          <ZoomIn className="h-5 w-5" />
        </button>
        <button onClick={toggleLike} className="flex items-center gap-1">
          <Heart className={`h-5 w-5 ${liked ? 'text-red-500' : 'text-black'}`} />
          <span>{liked}</span>
        </button>
        <button onClick={shareImage} className="flex items-center gap-1">
          <Share2 className="h-5 w-5" />
        </button>
        <button onClick={downloadImage} className="flex items-center gap-1">
          <Download className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

function DarkModeToggle({ toggleTheme }) {
  return (
    <Button onClick={toggleTheme} variant="outline" className="flex items-center gap-2">
      <span>🌙</span>
    </Button>
  );
}

export default function MyAccountPage() {
  const [darkMode, setDarkMode] = useState(false);

  // Check for saved theme preference in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedTheme);
  }, []);

  // Toggle dark mode and save to localStorage
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
  };

  // Apply dark mode class to the body element
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Dashboard Layout */}
      <div className="flex">

        {/* Left Sidebar */}
        <div className={`w-1/5 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg p-6`}>
          <div className="flex flex-col items-center justify-center ">
            <div className="h-24 w-24 overflow-hidden rounded-full border-2 border-gray-300 mb-4">
              <img
                src={profileImage}
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </div>
            <h2 className={`text-xl  font-bold ${darkMode ? 'text-white' : 'text-black'}`}>Ghassen Brahim</h2>
            <p className={`text-gray-500 ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>Client depuis Janvier 2019</p>
            <div className="mt-2">
              <Badge variant="secondary">Client Premium</Badge>
            </div>
          </div>

          <div className="mt-8 flex flex-col">
            <ul className="space-y-1 text-lg">
              <li className={`flex items-center justify-center  gap-3 hover:bg-gray-100 p-2 rounded ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} cursor-pointer`}>
                <User2 className="h-5 w-5" />
                <span>Profile</span>
              </li>
              <li className={`flex items-center justify-center  gap-3 hover:bg-gray-100 p-2 rounded ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} cursor-pointer`}>
                <Camera className="h-5 w-5" />
                <span>Photos</span>
              </li>
              <li className={`flex items-center justify-center  gap-3 hover:bg-gray-100 p-2 rounded ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} cursor-pointer`}>
                <Heart className="h-5 w-5" />
                <span>Favoris</span>
              </li>
              <li className={`flex items-center justify-center  gap-3 hover:bg-gray-100 p-2 rounded ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} cursor-pointer`}>
                <Send className="h-5 w-5" />
                <span>Courrier</span>
              </li>
              <li className={`flex items-center justify-center  gap-3 hover:bg-gray-100 p-2 rounded ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} cursor-pointer`}>
                <FilePen className="h-5 w-5" />
                <span>Contrat</span>
              </li>
              <li className={`flex items-center justify-center  gap-3 hover:bg-gray-100 p-2 rounded ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} cursor-pointer`}>
                <Settings className="h-5 w-5" />
                <span>Paramètres</span>
              </li>
              <li className={`flex items-center justify-center  gap-3 hover:bg-gray-100 p-2 rounded ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} cursor-pointer`}>
                <LogOut className="h-5 w-5" />
                <span>Déconnexion</span>
              </li>
              {/* Corrected logo image section */}
              <li className={`flex items-center justify-center   cursor-pointer`}>
                <img
                  src={logoImage} // Correct usage of the logo image
                  alt="logo"
                  className="w-50 h-50 object-contain" // Proper size and responsive styling
                />
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content Area */}
        <div className={`flex-1 p-8 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className={`text-3xl font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>Mes Photos</h2>
            <DarkModeToggle toggleTheme={toggleTheme} />
          </div>

          {/* Photos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[...Array(12)].map((_, i) => (
              <PhotoThumbnail key={i} />
            ))}
          </div>

          {/* Bottom Nav (optional) */}
          <div className="mt-8 flex justify-between border-t pt-4">
            <Button variant="outline" className="w-full py-2">
              Voir toutes mes photos
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
