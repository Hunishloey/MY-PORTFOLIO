import { useState, useEffect, useContext } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { ThemeContext } from '../theme/ThemeContext';
import { FaUser, FaTools, FaProjectDiagram, FaAward, FaGraduationCap, FaBriefcase, FaBars, FaTimes } from 'react-icons/fa';

const Circle = ({ top, left, animation, circleColor }) => {
    const [isHovered, setIsHovered] = useState(false);

    const getColors = () => {
        if (circleColor === 'circle1') {
            return {
                base: 'rgba(7, 7, 242, 0.5)',
                hover: 'rgba(255, 255, 255, 0.8)',
                inner: 'rgba(0, 174, 255, 0.7)'
            };
        } else {
            return {
                base: 'rgba(255, 0, 0, 0.5)',
                hover: 'rgba(255, 255, 255, 0.8)',
                inner: 'rgba(149, 110, 110, 0.8)'
            };
        }
    };

    const colors = getColors();

    return (
        <div
            className="absolute rounded-full w-[500px] h-[500px] blur-[200px] overflow-hidden transition-all duration-700 ease-in-out hidden sm:block"
            style={{
                top: `${top}%`,
                left: `${left}%`,
                background: `radial-gradient(circle at center, ${colors.base}, transparent)`,
                clipPath: isHovered ? 'polygon(0 0, 100% 0, 100% 50%, 50% 100%, 0 50%)' : 'circle(50% at 50% 50%)',
                transform: isHovered ? 'scale(1.2)' : 'scale(1)',
                animation: animation
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className="absolute top-1/2 left-1/2 w-[120%] h-[120%] rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-in-out"
                style={{
                    background: `radial-gradient(circle at center, ${colors.inner}, transparent)`,
                    clipPath: isHovered ? 'polygon(0 0, 100% 0, 100% 50%, 50% 100%, 0 50%)' : 'circle(50% at 50% 50%)',
                    opacity: isHovered ? 1 : 0.5
                }}
            />
        </div>
    );
};

export default function Navbar() {
    const { theme } = useContext(ThemeContext);
    const [smoothScroll, setSmoothScroll] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        scroll.scrollToTop({ duration: 0 });
    }, []);

    useEffect(() => {
        let scrollTimeout;

        const handleScroll = () => {
            setSmoothScroll(false);
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => setSmoothScroll(true), 1000);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(scrollTimeout);
        };
    }, []);

    const navItems = [
        { id: 'introduction', icon: <FaUser />, label: 'INTRODUCTION' },
        { id: 'skills', icon: <FaTools />, label: 'SKILLS' },
        { id: 'projects', icon: <FaProjectDiagram />, label: 'PROJECTS' },
        { id: 'achievements', icon: <FaAward />, label: 'ACHIEVEMENTS' },
        { id: 'education', icon: <FaGraduationCap />, label: 'EDUCATION' },
        { id: 'experience', icon: <FaBriefcase />, label: 'EXPERIENCE' },
    ];

    return (
        <div className={`relative w-screen h-screen overflow-hidden ${theme.bg}`}>
            <style>{`
                @keyframes moveCircle1 {
                    0% { transform: translate(0, 0) rotate(0deg) scale(1); }
                    25% { transform: translate(20vw, -10vh) rotate(15deg) scale(1.2); }
                    50% { transform: translate(-25vw, 15vh) rotate(-20deg) scale(0.9); }
                    75% { transform: translate(30vw, -20vh) rotate(10deg) scale(1.1); }
                    100% { transform: translate(-15vw, 5vh) rotate(-5deg) scale(1); }
                }
                @keyframes moveCircle2 {
                    0% { transform: translate(0, 0) rotate(0deg) scale(1); }
                    25% { transform: translate(-20vw, 25vh) rotate(-20deg) scale(1.2); }
                    50% { transform: translate(15vw, -20vh) rotate(30deg) scale(1.1); }
                    75% { transform: translate(-30vw, 10vh) rotate(-10deg) scale(0.8); }
                    100% { transform: translate(20vw, -5vh) rotate(15deg) scale(1); }
                }
                html { scroll-behavior: smooth; }
                .active {
                    position: relative;
                    font-weight: bold;
                }
                .active::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: -5px;
                    width: 100%;
                    height: 2px;
                    background-color: currentColor;
                }
            `}</style>

            <Circle top={25} left={10} animation="moveCircle1 5s infinite alternate ease-in-out" circleColor="circle1" />
            <Circle top={50} left={70} animation="moveCircle2 6s infinite alternate ease-in-out" circleColor="circle2" />

            <div className={`fixed top-0 left-0 w-full h-28 z-50 ${theme.surface}`}>
                <header className="flex justify-between items-center px-4 sm:px-10 py-3">
                    <p className={`text-l font-bold ${theme.text}`}>Hi! Hunish Loey Here</p>
                    <button className="sm:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FaTimes className={theme.text} /> : <FaBars className={theme.text} />}
                    </button>
                </header>

                <nav className="hidden sm:flex justify-center">
                    <ul className="flex mt-4">
                        {navItems.map(({ id, icon, label }) => (
                            <li key={id} className="mr-8 last:mr-0 text-lg font-bold tracking-wider cursor-pointer relative group">
                                <Link
                                    activeClass="active"
                                    to={id}
                                    smooth={smoothScroll}
                                    duration={300}
                                    spy={true}
                                    offset={-70}
                                    className={`${theme.text} transition-colors duration-300 relative block py-2 px-1 flex items-center gap-2`}
                                >
                                    {icon}
                                    {label}
                                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${theme.primary.split(' ')[0]} transition-all duration-400 group-hover:w-full`}></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {menuOpen && (
                    <div className={`sm:hidden absolute top-full left-0 w-full  shadow-md z-50 ${theme.bg}  `}>
                        <ul className="flex flex-col items-center py-4">
                            {navItems.map(({ id, icon, label }) => (
                                <li key={id} className="mb-4">
                                    <Link
                                        activeClass="active"
                                        to={id}
                                        smooth={smoothScroll}
                                        duration={300}
                                        spy={true}
                                        offset={-70}
                                        onClick={() => setMenuOpen(false)}
                                        className={`${theme.text} flex items-center gap-2 text-lg font-medium`}
                                    >
                                        {icon}
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            <div className="h-[70vh] w-full flex items-center justify-center mt-36 px-4">
                <div className={`w-full max-w-3xl text-center ${theme.text}`}>
                    <p className="text-4xl font-bold leading-tight">Hunish Loey</p>
                    <p className="text-2xl font-semibold text-gray-400 mt-2">Full Stack Developer</p>
                    <p className="text-xl italic mt-4 mb-6 opacity-90">Crafting Digital Narratives Through Code & Motion</p>
                    <p className="text-lg font-normal leading-relaxed">
                        I architect full-stack solutions where technology meets storytelling. By blending robust development with cinematic motion design, I transform concepts into immersive digital experiences. Currently exploring emergent technologies to push creative boundaries in visual narrative engineering.
                    </p>
                </div>
            </div>
        </div>
    );
}
