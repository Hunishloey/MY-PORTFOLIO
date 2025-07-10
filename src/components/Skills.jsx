import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";

export default function Skills() {
  const { theme } = useContext(ThemeContext);

  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React.js", "Redux", "HTML5", "CSS3", "Tailwind CSS"],
      icon: "💻"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs", "JWT"],
      icon: "⚙️"
    },
    {
      title: "Database",
      skills: ["MongoDB", "Mongoose"],
      icon: "🗄️"
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Postman", "Cloudinary"],
      icon: "🛠️"
    },
    {
      title: "Additional",
      skills: ["Razorpay", "Socket.io", "WebSocket Optimization"],
      icon: "🔌"
    }
  ];

  return (
    <section
      id="skills"
      className={`relative min-h-screen py-20 overflow-hidden ${theme.bg}`}
    >
      {/* Background elements */}
      <div className={`absolute -top-32 -right-32 w-96 h-96 rounded-full blur-[150px] ${theme.primary.replace('bg-', 'bg-')} opacity-20`}></div>
      <div className={`absolute bottom-20 left-1/4 w-[300px] h-[300px] rounded-full blur-[100px] ${theme.accent.replace('bg-', 'bg-')} opacity-15 animate-pulse`}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl md:text-5xl font-bold mb-12 md:mb-16 ml-2 md:ml-8 ${theme.text}`}>
          TECHNICAL SKILLS
          <span className={`block w-24 h-1 mt-4 ${theme.accent.replace('bg-', 'bg-')}`}></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden border ${theme.border} transition-all duration-500 hover:scale-[1.03] hover:shadow-xl`}
            >
              <div className={`p-6 ${theme.surface}`}>
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-4">{category.icon}</span>
                  <h3 className={`text-2xl font-bold ${theme.text}`}>{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-4 py-2 rounded-full text-sm font-medium ${theme.muted} ${theme.hover}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skill proficiency visualization */}
        <div className={`mt-16 p-8 rounded-2xl border ${theme.border} ${theme.surface}`}>
          <h3 className={`text-2xl font-bold mb-6 ${theme.text}`}>Technical Proficiency</h3>
          <div className="space-y-6">
            {[
              { skill: "React.js", level: 65 },
              { skill: "Node.js/Express", level: 65 },
              { skill: "MongoDB", level: 65 },
              { skill: "REST API Design", level: 60 },
              { skill: "Performance Optimization", level: 70 },
              { skill: "Security Implementation", level: 60 }
            ].map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className={`font-medium ${theme.text}`}>{item.skill}</span>
                  <span className={`font-medium ${theme.text}`}>{item.level}%</span>
                </div>
                <div className={`w-full h-3 rounded-full ${theme.muted}`}>
                  <div
                    className={`h-full rounded-full ${theme.primary}`}
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
