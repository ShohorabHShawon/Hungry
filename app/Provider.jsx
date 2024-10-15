'use client';
import React from 'react';
import { ThemeProvider } from 'next-themes';

function Provider({ children }) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="dark:bg-[#212121] dark:text-gray-100 text-[#333333] min-h-screen select-none transition-colors duration-300">
        {children}
      </div>
    </ThemeProvider>
  );
}

export default Provider;
