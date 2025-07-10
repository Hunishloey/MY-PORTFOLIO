import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";
export default function Experience() {
  const { theme } = useContext(ThemeContext);

  const experiences = [
    {
      role: "MERN Trainer (Intern)",
      company: "O7 Solutions Pvt. Ltd.",
      period: "Jan 2025 - May 2025",
      description: "Trained 15+ students in React/Node.js through comprehensive workshops and hands-on sessions.",
      achievements: [
        "Developed and delivered curriculum for MERN stack development",
        "Built many demo projects like GYM TRACKER, INVENTORY SYSTEM (an e-commerce site between wholesalers and shopkeepers), and PG-BOOKING etc.",
        "Mentored students through real-world project development"
      ]
    }
  ];

  return (
    <section
      id="experience"
      className={`relative min-h-screen py-20 overflow-hidden ${theme.bg}`}
    >
      {/* Background elements */}
      <div className={`absolute top-1/4 left-1/3 w-80 h-80 rounded-full blur-[120px] ${theme.accent.replace('bg-', 'bg-')} opacity-15`}></div>
      <div className={`absolute bottom-20 right-20 w-64 h-64 rounded-full blur-[100px] ${theme.primary.replace('bg-', 'bg-')} opacity-20`}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl md:text-5xl font-bold mb-12 md:mb-16 ml-2 md:ml-8 ${theme.text}`}>
          EXPERIENCE
          <span className={`block w-24 h-1 mt-4 ${theme.accent.replace('bg-', 'bg-')}`}></span>
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl border ${theme.border} ${theme.surface} transition-all duration-500 hover:shadow-xl`}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h3 className={`text-2xl font-bold ${theme.text}`}>{exp.role}</h3>
                  <p className={`text-xl ${theme.text}`}>{exp.company}</p>
                </div>
                <div className={`mt-2 md:mt-0 px-4 py-2 rounded-full ${theme.muted}`}>
                  {exp.period}
                </div>
              </div>

              <p className={`mb-6 ${theme.text}`}>{exp.description}</p>

              <h4 className={`font-bold mb-4 ${theme.text}`}>Key Achievements:</h4>
              <ul className="space-y-3">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start">
                    <span className={`w-5 h-5 rounded-full mr-3 flex items-center justify-center mt-1 ${theme.accent.replace('bg-', 'bg-')}`}>
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span className={theme.text}>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Problem-solving showcase */}
        <div className={`mt-16 p-8 rounded-2xl border ${theme.border} ${theme.surface}`}>
          <h3 className={`text-2xl font-bold mb-6 ${theme.text}`}>Problem-Solving Excellence</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> {/* Changed to 3 columns */}
            {/* Performance Optimization */}
            <div>
              <h4 className={`text-xl font-semibold mb-4 ${theme.text}`}>Performance Optimization</h4>
              <p className={`mb-4 ${theme.text}`}>
                Debugged complex API latency issues in the Book Exchange System, implementing query optimizations that improved performance by 30%.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className={`px-3 py-1 rounded-full text-sm ${theme.muted}`}>MongoDB</span>
                <span className={`px-3 py-1 rounded-full text-sm ${theme.muted}`}>Query Optimization</span>
                <span className={`px-3 py-1 rounded-full text-sm ${theme.muted}`}>Indexing</span>
              </div>
            </div>

            {/* Scalability Solutions */}
            <div>
              <h4 className={`text-xl font-semibold mb-4 ${theme.text}`}>Scalability Solutions</h4>
              <p className={`mb-4 ${theme.text}`}>
                Implemented WebSocket compression techniques in the Chat Application to handle 200+ concurrent users with under 500ms latency.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className={`px-3 py-1 rounded-full text-sm ${theme.muted}`}>Socket.IO</span>
                <span className={`px-3 py-1 rounded-full text-sm ${theme.muted}`}>WebSockets</span>
                <span className={`px-3 py-1 rounded-full text-sm ${theme.muted}`}>Load Balancing</span>
              </div>
            </div>

            {/* New Security Section */}
            <div>
              <h4 className={`text-xl font-semibold mb-4 ${theme.text}`}>Security Implementation</h4>
              <p className={`mb-4 ${theme.text}`}>
                Architected end-to-end security protocols including JWT authentication, Helmet middleware, CORS policies, and input sanitization to protect against XSS, CSRF, and injection attacks.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className={`px-3 py-1 rounded-full text-sm ${theme.muted}`}>JWT</span>
                <span className={`px-3 py-1 rounded-full text-sm ${theme.muted}`}>Helmet.js</span>
                <span className={`px-3 py-1 rounded-full text-sm ${theme.muted}`}>CORS</span>
                <span className={`px-3 py-1 rounded-full text-sm ${theme.muted}`}>Input Validation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}