import { useContext, useState, useRef, useEffect } from "react";
import { ThemeContext } from "../theme/ThemeContext";
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { FiSend, FiLoader } from 'react-icons/fi';

export default function Footer() {
  const { theme } = useContext(ThemeContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  const formRef = useRef(null);

  const handleChange = (e) => {
    // Basic input sanitization
    const value = e.target.value;
    if (e.target.name === 'name' && !/^[a-zA-Z\s]*$/.test(value)) return;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentTime = Date.now();
    
    // Rate limiting (30 seconds between submissions)
    if (currentTime - lastSubmitTime < 30000) {
      toast.error('Please wait 30 seconds before sending another message');
      return;
    }
    
    // Input validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error('All fields are required');
      return;
    }
    
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    try {
      setIsLoading(true);
      setLastSubmitTime(currentTime);
      
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_USER_ID
      );

      // Success handling
      setFormData({ name: '', email: '', message: '' });
      toast.success('Message sent successfully!');
      
      // Close modal after delay
      setTimeout(() => {
        setIsModalOpen(false);
        setIsLoading(false);
      }, 1500);
      
    } catch (error) {
      console.error('Failed to send message:', error);
      toast.error('Failed to send message. Please try again later.');
      setIsLoading(false);
    }
  };

  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <footer className={`relative overflow-hidden ${theme.bg} pt-16 pb-8`}>
      <Toaster
        position="top-center"
        toastOptions={{
          className: `${theme.surface} ${theme.text} border ${theme.border}`,
          duration: 4000,
        }}
      />
      
      {/* Contact Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className={`relative ${theme.surface} rounded-xl p-8 max-w-md w-full border ${theme.border} shadow-xl`}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className={`absolute top-4 right-4 ${theme.text} text-xl hover:${theme.hover}`}
              aria-label="Close contact form"
            >
              &times;
            </button>

            <h2 className={`text-2xl font-bold mb-6 ${theme.text}`}>
              Contact Me
            </h2>

            <form onSubmit={handleSubmit} ref={formRef} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  disabled={isLoading}
                  className={`w-full p-3 rounded-lg border ${theme.border} ${theme.text} ${theme.surface} disabled:opacity-50`}
                  maxLength={50}
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  disabled={isLoading}
                  className={`w-full p-3 rounded-lg border ${theme.border} ${theme.text} ${theme.surface} disabled:opacity-50`}
                  maxLength={100}
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  disabled={isLoading}
                  rows="4"
                  className={`w-full p-3 rounded-lg border ${theme.border} ${theme.text} ${theme.surface} disabled:opacity-50`}
                  maxLength={500}
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 rounded-lg ${theme.primary} text-white font-medium flex items-center justify-center gap-2 disabled:opacity-70`}
              >
                {isLoading ? (
                  <>
                    <FiLoader className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Decorative elements */}
      <div className={`absolute top-0 left-0 w-full h-32 ${theme.primary} opacity-10`}></div>
      <div className={`absolute -top-20 -right-20 w-96 h-96 rounded-full blur-[100px] ${theme.secondary.replace('bg-', 'bg-')} opacity-10`}></div>
      <div className={`absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full blur-[150px] ${theme.accent.replace('bg-', 'bg-')} opacity-10`}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Personal Info */}
          <div>
            <h3 className={`text-2xl font-bold mb-6 ${theme.text}`}>
              Hunish Loey
              <span className={`block w-16 h-0.5 mt-3 ${theme.accent.replace('bg-', 'bg-')}`}></span>
            </h3>
            <p className={`mb-4 ${theme.text}`}>
              MERN Stack Developer with a passion for building secure, scalable applications
              and creating meaningful user experiences.
            </p>
            <div className={`mt-6 p-4 rounded-lg border ${theme.border} ${theme.surface}`}>
              <p className={`mb-2 ${theme.text}`}>
                <span className="font-medium">Location:</span> Hoshiarpur, Punjab (Remote)
              </p>
              <p className={`mb-2 ${theme.text}`}>
                <span className="font-medium">Phone:</span> +91 7696173705
              </p>
              <p className={`mb-2 ${theme.text}`}>
                <span className="font-medium">Email:</span> hunishloey@gmail.com
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`text-2xl font-bold mb-6 ${theme.text}`}>
              Navigation
              <span className={`block w-16 h-0.5 mt-3 ${theme.accent.replace('bg-', 'bg-')}`}></span>
            </h3>
            <ul className="space-y-3">
              {['introduction', 'skills', 'projects', 'achievements', 'education'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className={`block py-2 transition-colors duration-300 ${theme.text} hover:${theme.hover}`}
                    onClick={() => setIsModalOpen(false)}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Resources */}
          <div>
            <h3 className={`text-2xl font-bold mb-6 ${theme.text}`}>
              Connect
              <span className={`block w-16 h-0.5 mt-3 ${theme.accent.replace('bg-', 'bg-')}`}></span>
            </h3>

            <div className={`mt-6 p-4 rounded-lg border ${theme.border} ${theme.surface}`}>
              <h4 className={`font-bold mb-3 ${theme.text}`}>GitHub Profile</h4>
              <a
                href="https://github.com/Hunishloey"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center ${theme.text} hover:${theme.hover}`}
                aria-label="Visit Hunish Loey's GitHub profile"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                github.com/Hunishloey
              </a>
            </div>

            <div className={`mt-8 p-4 rounded-lg border ${theme.border} ${theme.surface}`}>
              <h4 className={`font-bold mb-2 ${theme.text}`}>Availability</h4>
              <p className={theme.text}>Open to remote opportunities</p>
              <button
                onClick={() => setIsModalOpen(true)}
                className={`mt-4 px-4 py-2 rounded ${theme.primary} text-white font-medium hover:opacity-90 transition-opacity`}
                aria-label="Open contact form"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>

        {/* Copyright & Credits */}
        <div className={`mt-16 pt-8 border-t ${theme.border} flex flex-col md:flex-row justify-between items-center`}>
          <p className={`text-center md:text-left ${theme.text}`}>
            © {new Date().getFullYear()} Hunish Loey. All rights reserved.
          </p>
          <p className={`mt-4 md:mt-0 text-center ${theme.text}`}>
            Crafted with <span className="text-red-500">❤️</span> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}