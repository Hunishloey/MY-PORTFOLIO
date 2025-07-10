import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";

export default function Achievements() {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      id="achievements"
      className={`relative min-h-screen py-20 overflow-hidden ${theme.bg}`}
    >
      {/* Background elements */}
      <div className={`absolute top-1/3 left-1/4 w-80 h-80 rounded-full blur-[150px] ${theme.primary.replace('bg-', 'bg-')} opacity-15`}></div>
      <div className={`absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full blur-[120px] ${theme.accent.replace('bg-', 'bg-')} opacity-20`}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl md:text-5xl font-bold mb-12 md:mb-16 ml-2 md:ml-8 ${theme.text}`}>
          ACHIEVEMENTS
          <span className={`block w-24 h-1 mt-4 ${theme.accent.replace('bg-', 'bg-')}`}></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Technical Achievements */}
          <div className={`p-8 rounded-2xl border ${theme.border} ${theme.surface}`}>
            <h3 className={`text-2xl font-bold mb-6 ${theme.text}`}>Technical Excellence</h3>
            <ul className="space-y-6">
              {[
                "Reduced API latency by 30% in a production application by optimizing database queries.",
                "Supported a real‑time chat system serving over 200 concurrent users with end‑to‑end latency consistently under 500 ms.",
                "Mentored more than 15 students in the MERN stack during an intensive internship program.",
                "Developed several demonstration projects, including a multi‑dimensional AI‑powered tic‑tac‑toe game and an online book‑exchange platform featuring admin controls and payment integration."
              ].map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 ${theme.accent}`}>
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  <span className={theme.text}>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Soft Skills */}
          <div className={`p-8 rounded-2xl border ${theme.border} ${theme.surface}`}>
            <h3 className={`text-2xl font-bold mb-6 ${theme.text}`}>Soft Skills</h3>
            <div className="space-y-8">
              {[
                {
                  skill: "Problem Solving",
                  description: "Debugged complex API latency issues, improving performance by 30%",
                  level: 95
                },
                {
                  skill: "Communication",
                  description: "Trained 15+ students in technical concepts during MERN internship",
                  level: 90
                },
                {
                  skill: "Quick Learning",
                  description: "Mastered Socket.IO and payment integrations for live projects",
                  level: 92
                }
              ].map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className={`font-bold ${theme.text}`}>{skill.skill}</span>
                    <span className={theme.text}>{skill.level}%</span>
                  </div>
                  <div className={`w-full h-2 rounded-full ${theme.muted}`}>
                    <div
                      className={`h-full rounded-full ${theme.secondary}`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <p className={`mt-2 text-sm ${theme.text}`}>{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}