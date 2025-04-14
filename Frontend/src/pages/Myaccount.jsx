import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import Dashboard from "../components/Dashbord";
import PhotoThumbnail from '../components/PhotoCollection';
import AppointmentCard from '../components/AppointmentCard';
import ContractPage from '../components/contart';
import ParametreCompte from '../components/parametre';

function DarkModeToggle({ toggleTheme }) {
  return (
    <Button onClick={toggleTheme} variant="outline" className="flex items-center gap-2">
      🌙 Mode
    </Button>
  );
}

export default function MyPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentView, setCurrentView] = useState('photos');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedTheme);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);
  };

  const handleChangeView = (view) => {
    setCurrentView(view);
    setSidebarOpen(false);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'appointments':
        return (
          <AppointmentCard
            title="Rendez-vous médical"
            date="15 avril 2025"
            time="14:00"
            location="Clinique XYZ"
            status="upcoming"
          />
        );
      case 'ContractPage':
        return <ContractPage />;
      case 'PhotoThumbnail':
        return <PhotoThumbnail />;
      case 'ParametreCompte':
        return <ParametreCompte />;
      default:
        return null;
    }
  };

  const getTitle = () => {
    switch (currentView) {
      case 'appointments':
        return 'Mes Rendez-Vous';
      case 'PhotoThumbnail':
        return 'Mes Photos';
      case 'ContractPage':
        return 'Contrat de Service';
      case 'ParametreCompte':
        return 'Parametre de compte';
      default:
        return '';
    }
  };

  // Logout function
  const handleLogout = () => {
    // Clear any session data (e.g., tokens) if applicable
    localStorage.removeItem('authToken');
    // Redirect to login page
    navigate('/login');
  };

  return (
    <div className={`min-h-screen flex bg-white dark:bg-gray-900`}>
      {/* Sidebar desktop */}
      <aside className="hidden lg:block w-64 bg-gray-100 dark:bg-gray-800 h-screen sticky top-0">
        <Dashboard darkMode={darkMode} onChangeView={handleChangeView} onLogout={handleLogout} />
      </aside>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={() => setSidebarOpen(false)}
        />
        <aside className="relative w-64 h-full bg-white dark:bg-gray-800 shadow-lg">
          <Dashboard darkMode={darkMode} onChangeView={handleChangeView} onLogout={handleLogout} />
        </aside>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen p-4 sm:p-6 md:p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden text-gray-800 dark:text-white"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
              {getTitle()}
            </h1>
          </div>
          <DarkModeToggle toggleTheme={toggleTheme} />
        </div>

        {/* Content */}
        <div className="flex-1">{renderContent()}</div>
      </div>
    </div>
  );
}
