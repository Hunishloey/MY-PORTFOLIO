// src/App.jsx
import { ThemeProvider } from './theme/ThemeContext';
import ThemeSelector from './theme/ThemeSelector';

//components
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Introduction from './components/Introduction';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
export default function App() {
  return (
    <ThemeProvider>
      <div className={`min-h-screen transition-colors duration-300`}>
        <Navbar />
        <Introduction />
        <Achievements />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Footer />
        <ThemeSelector />
      </div>
    </ThemeProvider>
  );
}