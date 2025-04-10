import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react'; // Import sun and moon icons from lucide-react
import { Button } from './ui/button';

const DarkModeToggle = () => {
  // State to track if dark mode is enabled
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Effect hook to check localStorage for dark mode preference
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setIsDarkMode(savedMode === 'true');
    } else {
      // Default to system preference if no saved mode
      setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  // Toggle dark mode and update localStorage
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Update class on the root element (html)
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [isDarkMode]);

  return (
    <Button variant="outline" onClick={toggleDarkMode} className="gap-2">
      {isDarkMode ? (
        <Moon className="h-5 w-4" />
      ) : (
        <Sun className="h-5 w-4" />
      )}
    </Button>
  );
};

export default DarkModeToggle;
