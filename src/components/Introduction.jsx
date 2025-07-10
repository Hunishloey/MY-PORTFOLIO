import { useContext } from "react";
import { ThemeContext } from '../theme/ThemeContext';

export default function Introduction() {
  const { theme } = useContext(ThemeContext);

  const paragraphs = [
    "As a Computer Science Engineering graduate (B.Tech), I architect secure, scalable systems with optimized code. My strong foundation in programming and problem-solving allows me to specialize in JavaScript, React.js, and Node.js — building production-grade solutions that balance technical rigor with long-term maintainability.",
    "My academic journey at Rayat Bahra Institute of Nanotechnology has fueled my passion for crafting dynamic software. Through hands-on full-stack development experience, I've honed expertise in both frontend (interactive UIs) and backend (robust APIs) systems, grounded in modern software engineering principles.",

    "Continuously exploring emerging technologies, I thrive on transforming ideas into functional applications—whether architecting full-stack platforms or implementing AI-driven projects like a multi-dimensional Tic-Tac-Toe game. My focus remains on clean, maintainable, and innovative implementations.",

    "As a developer, I embrace challenges that push my boundaries. I aim to contribute to impactful projects while collaborating with teams that value technical excellence and creative problem-solving."
  ];

  return (
    <section
      id="introduction"
      className={`relative min-h-screen py-20 overflow-hidden ${theme.bg}`}
    >
      {/* Animated background elements */}
      <div className={`absolute -top-32 -left-32 w-96 h-96 rounded-full blur-[100px] ${theme.primary.replace('bg-', 'bg-')} opacity-20 animate-pulse`}></div>
      <div className={`absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full blur-[150px] ${theme.secondary.replace('bg-', 'bg-')} opacity-15`}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl md:text-5xl font-bold mb-12 md:mb-16 ml-2 md:ml-8 ${theme.text}`}>
          INTRODUCTION
          <span className={`block w-24 h-1 mt-4 ${theme.accent.replace('bg-', 'bg-')}`}></span>
        </h2>

        <div className={`relative bg-opacity-20 backdrop-blur-lg rounded-3xl overflow-hidden border ${theme.border}`}>
          <div className={`absolute inset-0 ${theme.surface} opacity-80`}></div>

          <div className="relative z-10 p-6 md:p-10 lg:p-12">
            <div className="space-y-8">
              {paragraphs.map((paragraph, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-lg ${theme.hover}`}
                >
                  <p className={`text-lg md:text-xl lg:text-2xl font-medium leading-relaxed ${theme.text}`}>
                    {paragraph}
                  </p>
                </div>
              ))}
            </div>

            <div className={`mt-12 flex flex-wrap gap-4 ${theme.text}`}>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full mr-2 ${theme.primary.replace('bg-', 'bg-')}`}></div>
                <span className="text-lg font-medium">Full Stack Development</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full mr-2 ${theme.secondary.replace('bg-', 'bg-')}`}></div>
                <span className="text-lg font-medium">React & Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}