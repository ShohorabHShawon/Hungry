'use client';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import React from 'react';
import { useTheme } from 'next-themes';

function DarkmodeButton() {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
    <div className="flex justify-center items-center text-center">
      {currentTheme === 'dark' ? (
        <MdLightMode
          onClick={() => setTheme('light')}
          className="text-xl cursor-pointer"
        />
      ) : (
        <MdDarkMode
          onClick={() => setTheme('dark')}
          className="text-xl cursor-pointer"
        />
      )}
    </div>
  );
}

export default DarkmodeButton;
