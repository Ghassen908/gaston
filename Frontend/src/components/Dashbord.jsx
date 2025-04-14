import React from 'react';
import { Camera, Heart, Settings, LogOut, FilePen, User2, Send, Calendar } from 'lucide-react';
import { Badge } from "../components/ui/badge";
import profileImage from "../assets/image/profil.jpg";
import logoImage from '../assets/image/logo.png';

export default function Dashboard({ darkMode, onChangeView, onLogout }) {
  const handleSidebarClick = (label) => {
    switch (label) {
      case 'Rendez-Vous':
        onChangeView('appointments');
        break;
      case 'Photos':
        onChangeView('PhotoThumbnail');
        break;
      case 'Contrat':
        onChangeView('ContractPage');
        break;
      case 'Paramètres':
        onChangeView('ParametreCompte');
        break;
      case 'Déconnexion':
        onLogout();  // Call logout when Déconnexion is clicked
        break;
      default:
        break;
    }
  };

  return (
    <div className={`w-full h-full lg:w-64 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg p-6`}>
      <div className="flex flex-col items-center justify-center">
        <div className="h-24 w-24 overflow-hidden rounded-full border-2 border-gray-300 mb-4">
          <img src={profileImage} alt="Profile" className="object-cover w-full h-full" />
        </div>
        <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>
          Ghassen Brahim
        </h2>
        <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
          Client depuis Janvier 2019
        </p>
        <div className="mt-2">
          <Badge variant="secondary">Client Premium</Badge>
        </div>
      </div>

      <ul className="mt-10 flex flex-col items-center space-y-3">
        {[
          { icon: <User2 />, label: 'Profile' },
          { icon: <Camera />, label: 'Photos' },
          { icon: <Heart />, label: 'Favoris' },
          { icon: <Send />, label: 'Courrier' },
          { icon: <Calendar />, label: 'Rendez-Vous' },
          { icon: <FilePen />, label: 'Contrat' },
          { icon: <Settings />, label: 'Paramètres' },
          { icon: <LogOut />, label: 'Déconnexion' },
        ].map((item, idx) => (
          <SidebarItem
            key={idx}
            icon={item.icon}
            label={item.label}
            darkMode={darkMode}
            onClick={() => handleSidebarClick(item.label)}
          />
        ))}
      </ul>

      <div className="flex justify-center mt-10">
        <img src={logoImage} alt="Logo" className="w-24 h-24 object-contain" />
      </div>
    </div>
  );
}

function SidebarItem({ icon, label, darkMode, onClick }) {
  return (
    <li
      className={`w-full flex flex-row items-center gap-3 py-2 px-4 rounded cursor-pointer transition ${
        darkMode ? 'hover:bg-gray-700 text-white' : 'hover:bg-gray-100 text-black'
      }`}
      onClick={onClick}
    >
      <div className="w-5 h-5">{icon}</div>
      <span className="text-sm">{label}</span>
    </li>
  );
}
