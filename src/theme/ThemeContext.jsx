import { createContext, useState, useEffect } from 'react';

const themes = {
  aurora: {
    primary: 'bg-indigo-700 text-white hover:bg-indigo-800 dark:bg-indigo-600 dark:hover:bg-indigo-700',
    secondary: 'bg-rose-600 text-white hover:bg-rose-700 dark:bg-rose-500 dark:hover:bg-rose-600',
    accent: 'bg-emerald-500 text-gray-900 hover:bg-emerald-600 dark:bg-emerald-400 dark:hover:bg-emerald-500',
    muted: 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
    surface: 'bg-white dark:bg-gray-800',
    text: 'text-gray-900 dark:text-gray-100',
    bg: 'bg-gray-50 dark:bg-gray-900',
    highlight: 'bg-amber-300 text-gray-900 dark:bg-amber-400 dark:text-gray-900',
    border: 'border-gray-300 dark:border-gray-700',
    hover: 'hover:bg-indigo-100 hover:text-indigo-800 dark:hover:bg-indigo-900/50'
  },
  cyber: {
    primary: 'bg-violet-700 text-white hover:bg-violet-800 dark:bg-violet-600 dark:hover:bg-violet-700',
    secondary: 'bg-cyan-500 text-gray-900 hover:bg-cyan-600 dark:bg-cyan-400 dark:hover:bg-cyan-500',
    accent: 'bg-pink-500 text-white hover:bg-pink-600 dark:bg-pink-400 dark:hover:bg-pink-500',
    muted: 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300',
    surface: 'bg-slate-50 dark:bg-slate-900',
    text: 'text-slate-900 dark:text-slate-100',
    bg: 'bg-slate-100 dark:bg-slate-950',
    highlight: 'bg-cyan-300 text-slate-900 dark:bg-cyan-400 dark:text-slate-900',
    border: 'border-slate-300 dark:border-slate-700',
    hover: 'hover:bg-violet-100 hover:text-violet-800 dark:hover:bg-violet-900/50'
  },
  terracotta: {
    primary: 'bg-orange-700 text-white hover:bg-orange-800 dark:bg-orange-600 dark:hover:bg-orange-700',
    secondary: 'bg-amber-600 text-white hover:bg-amber-700 dark:bg-amber-500 dark:hover:bg-amber-600',
    accent: 'bg-rose-500 text-white hover:bg-rose-600 dark:bg-rose-400 dark:hover:bg-rose-500',
    muted: 'bg-stone-200 text-stone-700 dark:bg-stone-700 dark:text-stone-300',
    surface: 'bg-amber-50 dark:bg-stone-900',
    text: 'text-stone-900 dark:text-stone-100',
    bg: 'bg-amber-100 dark:bg-stone-950',
    highlight: 'bg-yellow-300 text-stone-900 dark:bg-yellow-400 dark:text-stone-900',
    border: 'border-stone-300 dark:border-stone-700',
    hover: 'hover:bg-orange-100 hover:text-orange-800 dark:hover:bg-orange-900/50'
  },
  nebula: {
    primary: 'bg-purple-700 text-white hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-700',
    secondary: 'bg-fuchsia-600 text-white hover:bg-fuchsia-700 dark:bg-fuchsia-500 dark:hover:bg-fuchsia-600',
    accent: 'bg-sky-500 text-white hover:bg-sky-600 dark:bg-sky-400 dark:hover:bg-sky-500',
    muted: 'bg-zinc-200 text-zinc-700 dark:bg-zinc-700 dark:text-zinc-300',
    surface: 'bg-zinc-50 dark:bg-zinc-900',
    text: 'text-zinc-900 dark:text-zinc-100',
    bg: 'bg-zinc-100 dark:bg-zinc-950',
    highlight: 'bg-rose-300 text-zinc-900 dark:bg-rose-400 dark:text-zinc-900',
    border: 'border-zinc-300 dark:border-zinc-700',
    hover: 'hover:bg-purple-100 hover:text-purple-800 dark:hover:bg-purple-900/50'
  },
  moss: {
    primary: 'bg-teal-700 text-white hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-700',
    secondary: 'bg-emerald-600 text-white hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600',
    accent: 'bg-lime-500 text-gray-900 hover:bg-lime-600 dark:bg-lime-400 dark:hover:bg-lime-500',
    muted: 'bg-green-200 text-green-800 dark:bg-green-800 dark:text-green-200',
    surface: 'bg-green-50 dark:bg-green-950',
    text: 'text-green-900 dark:text-green-100',
    bg: 'bg-green-100 dark:bg-green-900',
    highlight: 'bg-yellow-300 text-green-900 dark:bg-yellow-400 dark:text-green-900',
    border: 'border-green-300 dark:border-green-700',
    hover: 'hover:bg-teal-100 hover:text-teal-800 dark:hover:bg-teal-900/50'
  },
  light: {
    primary: 'bg-rose-600 text-white hover:bg-rose-700 dark:bg-rose-500 dark:hover:bg-rose-600',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-300 dark:text-gray-900 dark:hover:bg-gray-400',
    accent: 'bg-rose-400 text-white hover:bg-rose-500 dark:bg-rose-300 dark:hover:bg-rose-400',
    muted: 'bg-gray-100 text-gray-600 dark:bg-gray-200 dark:text-gray-700',
    surface: 'bg-white dark:bg-gray-50',
    text: 'text-gray-900 dark:text-gray-800',
    bg: 'bg-gray-50 dark:bg-gray-100',
    highlight: 'bg-rose-100 text-rose-800 dark:bg-rose-200 dark:text-rose-900',
    border: 'border-gray-200 dark:border-gray-300',
    hover: 'hover:bg-rose-50 hover:text-rose-700 dark:hover:bg-rose-100/50'
  },
  quantum: {
    primary: 'bg-indigo-500 text-white hover:bg-indigo-600 dark:bg-indigo-400 dark:text-gray-900 dark:hover:bg-indigo-300 transition-all duration-300',
    secondary: 'bg-teal-400 text-gray-900 hover:bg-teal-500 dark:bg-teal-300 dark:hover:bg-teal-400',
    accent: 'bg-fuchsia-500 text-white hover:bg-fuchsia-600 dark:bg-fuchsia-400 dark:hover:bg-fuchsia-500',
    muted: 'bg-gray-800 text-gray-400 dark:bg-gray-700 dark:text-gray-300',
    surface: 'bg-gray-900 shadow-[0_0_15px_rgba(139,92,246,0.2)] dark:bg-gray-800',
    text: 'text-gray-100 dark:text-gray-200',
    bg: 'bg-gray-950 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 to-gray-950 dark:from-gray-950 dark:to-black',
    highlight: 'bg-amber-300 text-gray-900 animate-pulse dark:bg-amber-400',
    border: 'border-gray-700 hover:border-indigo-400 dark:border-gray-600 dark:hover:border-teal-300',
    hover: 'hover:shadow-[0_0_10px_rgba(139,92,246,0.5)] hover:scale-[1.02] transition-transform'
  },
  noir: {
    primary: 'bg-[#1d1c1c] text-[#eaeacc] hover:bg-[#2e2d2d] dark:bg-[#2f2f2f] dark:text-[#cece85] dark:hover:bg-[#3d3d3d] transition-all duration-300',
    secondary: 'bg-[#cece85] text-[#1d1c1c] hover:bg-[#bdbd67] dark:bg-[#dcdcad] dark:hover:bg-[#f2f2b5] transition-all duration-300',
    accent: 'bg-[#eaeacc] text-[#1d1c1c] hover:bg-[#ffffff] dark:bg-[#f1f1d0] dark:hover:bg-[#fdfde3] transition-all duration-300',
    muted: 'bg-[#2a2a2a] text-[#a3a38c] hover:bg-[#3a3a3a] dark:bg-[#1d1d1d] dark:text-[#cece85] dark:hover:bg-[#2b2b2b] transition-all duration-300',
    surface: 'bg-[#1d1c1c] shadow-[0_0_15px_rgba(206,206,133,0.2)] hover:shadow-[0_0_25px_rgba(206,206,133,0.3)] dark:bg-[#121212] transition-shadow duration-300',
    text: 'text-[#eaeacc] dark:text-[#cece85]',
    bg: 'bg-[#1d1c1c] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1d1c1c] to-black dark:from-black dark:to-[#0e0e0e]',
    highlight: 'bg-[#cece85] text-[#1d1c1c] animate-pulse hover:brightness-110 dark:bg-[#eaeacc] dark:hover:brightness-125 transition-all duration-300',
    border: 'border-[#3a3a3a] hover:border-[#cece85] dark:border-[#2e2e2e] dark:hover:border-[#eaeacc] transition-colors duration-300',
    hover: 'hover:shadow-[0_0_12px_rgba(206,206,133,0.4)] hover:scale-[1.03] transition-transform duration-300'
  }


};

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [themeName, setThemeName] = useState('aurora'); 
  const [theme, setTheme] = useState(themes.aurora);

  useEffect(() => {
    const previousClasses = document.body.className.split(' ');
    const newClasses = themes[themeName].bg.split(' ');

    // Remove old bg classes
    previousClasses.forEach(cls => {
      if (cls.startsWith('bg-') || cls.startsWith('dark:bg-')) {
        document.body.classList.remove(cls);
      }
    });

    // Add new bg classes
    newClasses.forEach(cls => {
      document.body.classList.add(cls);
    });

    setTheme(themes[themeName]);
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ theme, themeName, setThemeName, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}
