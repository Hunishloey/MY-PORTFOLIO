import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";
export default function Education() {
  const { theme } = useContext(ThemeContext);
  
  const education = [
    {
      degree: "B.Tech Computer Science Engineering",
      institution: "I.K. Gujral PTU",
      period: "2021 - 2025",
      details: "CGPA: 7.06",
      courses: ["Advanced Algorithms", "Database Systems", "Web Technologies", "Software Engineering"]
    },
    {
      degree: "Class XII (PSEB)",
      institution: "Punjab School Education Board",
      period: "2020 - 2021",
      details: "Percentage: 87%",
      courses: ["Physics", "Chemistry", "Mathematics", "Computer Science"]
    },
    {
      degree: "Class X (PSEB)",
      institution: "Punjab School Education Board",
      period: "2018 - 2019",
      details: "Percentage: 82%",
      courses: ["Science", "Mathematics", "Social Studies", "English"]
    }
  ];

  return (
    <section 
      id="education" 
      className={`relative min-h-screen py-20 overflow-hidden ${theme.bg}`}
    >
      {/* Background elements */}
      <div className={`absolute top-40 right-40 w-72 h-72 rounded-full blur-[120px] ${theme.secondary.replace('bg-', 'bg-')} opacity-15`}></div>
      <div className={`absolute bottom-40 left-40 w-64 h-64 rounded-full blur-[100px] ${theme.accent.replace('bg-', 'bg-')} opacity-20`}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl md:text-5xl font-bold mb-12 md:mb-16 ml-2 md:ml-8 ${theme.text}`}>
          EDUCATION
          <span className={`block w-24 h-1 mt-4 ${theme.accent.replace('bg-', 'bg-')}`}></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <div 
              key={index} 
              className={`rounded-2xl overflow-hidden border ${theme.border} transition-all duration-500 hover:scale-[1.03] hover:shadow-xl`}
            >
              <div className={`p-6 ${theme.surface}`}>
                <div className={`text-4xl mb-4 ${theme.text}`}>🎓</div>
                <h3 className={`text-xl font-bold mb-2 ${theme.text}`}>{edu.degree}</h3>
                <p className={`mb-4 ${theme.text}`}>{edu.institution}</p>
                <div className={`mb-4 px-3 py-1 rounded-full inline-block ${theme.muted}`}>
                  {edu.period}
                </div>
                <p className={`font-bold mb-6 ${theme.text}`}>{edu.details}</p>
                
                <h4 className={`font-semibold mb-3 ${theme.text}`}>Key Courses:</h4>
                <ul className="space-y-2">
                  {edu.courses.map((course, i) => (
                    <li key={i} className="flex items-center">
                      <span className={`w-2 h-2 rounded-full mr-3 ${theme.accent.replace('bg-', 'bg-')}`}></span>
                      <span className={theme.text}>{course}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}