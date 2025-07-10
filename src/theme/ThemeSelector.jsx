// src/components/ThemeSelector.jsx
import { useContext, useState, useEffect, useRef } from 'react';
import { ThemeContext } from './ThemeContext';
import { FaPalette } from 'react-icons/fa';

export default function ThemeSelector() {
  const { themes, themeName, setThemeName } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  // Close theme selector when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed bottom-4 right-4 flex items-center gap-2 p-2 bg-white rounded-full shadow-lg transition-all duration-300"
    >
      {/* Main Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-700 transition"
        title="Select Theme"
      >
        <FaPalette />
      </button>

      {/* Theme Buttons - Slide in from the right */}
      <div
        className={`flex items-center gap-2 transition-all duration-300 ${
          open ? 'opacity-100 translate-x-0 w-auto' : 'opacity-0 translate-x-2 w-0 overflow-hidden'
        }`}
      >
        {Object.keys(themes).map((name) => (
          <button
            key={name}
            onClick={() => {
              setThemeName(name);
              setOpen(false); // optional: auto-close on select
            }}
            className={`w-8 h-8 rounded-full shrink-0 ${themes[name].primary.split(' ')[0]} ${
              themeName === name ? 'ring-2 ring-offset-2 ring-gray-400' : ''
            }`}
            title={name}
          />
        ))}
      </div>
    </div>
  );
}
