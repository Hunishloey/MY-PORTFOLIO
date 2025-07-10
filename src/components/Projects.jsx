import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";
export default function Projects() {
  const { theme } = useContext(ThemeContext);

  const projects = [
    {
      title: "Online Book Exchange System",
      stack: "MERN Stack",
      description: "Built JWT authentication with Razorpay payments and Cloudinary uploads. Reduced API latency by 30% through query optimization, supporting 50+ concurrent users.",
      achievements: ["30% API latency reduction", "50+ concurrent users", "Secure payment integration"]
    },
    {
      title: "Real-Time Chat Application",
      stack: "MERN + Socket.IO",
      description: "Implemented 1:1 and group chats with message persistence. Optimized with MongoDB aggregation and WebSocket compression, handling 200+ users with <500ms latency.",
      achievements: ["<500ms latency", "200+ concurrent users", "WebSocket optimization"]
    },
    {
      title: "AI-Powered Tic-Tac-Toe",
      stack: "React + Node.js",
      description: "Developed during internship training program. Features intelligent AI opponent with multiple difficulty levels and real-time gameplay statistics.",
      achievements: ["Advanced AI algorithm", "Multiplayer support", "Training tool for students"]
    }
  ];

  return (
    <section
      id="projects"
      className={`relative min-h-screen py-20 overflow-hidden ${theme.bg}`}
    >
      {/* Background elements */}
      <div className={`absolute top-20 left-10 w-64 h-64 rounded-full blur-[100px] ${theme.secondary.replace('bg-', 'bg-')} opacity-15`}></div>
      <div className={`absolute bottom-10 right-10 w-72 h-72 rounded-full blur-[120px] ${theme.primary.replace('bg-', 'bg-')} opacity-20`}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl md:text-5xl font-bold mb-12 md:mb-16 ml-2 md:ml-8 ${theme.text}`}>
          PROJECTS
          <span className={`block w-24 h-1 mt-4 ${theme.accent.replace('bg-', 'bg-')}`}></span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden border ${theme.border} transition-all duration-500 hover:scale-[1.02] hover:shadow-xl`}
            >
              <div className="relative">
                <div className={`h-48 ${theme.primary} flex items-center justify-center`}>
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                </div>
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${theme.accent}`}>
                  {project.stack}
                </div>
              </div>

              <div className={`p-6 ${theme.surface}`}>
                <h3 className={`text-2xl font-bold mb-4 ${theme.text}`}>{project.title}</h3>
                <p className={`mb-6 ${theme.text}`}>{project.description}</p>

                <div className="mb-6">
                  <h4 className={`font-bold mb-3 ${theme.text}`}>Key Achievements:</h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className={`w-2 h-2 rounded-full mt-2 mr-3 ${theme.accent.replace('bg-', 'bg-')}`}></span>
                        <span className={theme.text}>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub stats section */}
        <div className={`mt-16 p-8 rounded-2xl border ${theme.border} ${theme.surface}`}>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className={`text-2xl font-bold mb-2 ${theme.text}`}>GitHub Contributions</h3>
              <p className={theme.text}>Check out my open-source contributions and projects</p>
            </div>
            <a
              href="https://github.com/Hunishloey"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={`mt-4 md:mt-0 px-6 py-3 rounded-lg ${theme.secondary} font-medium`}>
                Visit GitHub Profile
              </button>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}