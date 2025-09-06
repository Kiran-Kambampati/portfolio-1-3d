import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import confetti from 'canvas-confetti';
import { 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaPhone, 
  FaLinkedin, 
  FaGithub, 
  FaDownload,
  FaSun,
  FaMoon,
  FaStar,
  FaHeart,
  FaGamepad,
  FaJava,
  FaCode
} from 'react-icons/fa';
import { 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiPython, 
  SiHtml5, 
  SiCss3, 
  SiMongodb, 
  SiRedis, 
  SiGit, 
  SiGithub, 
  SiSupabase 
} from 'react-icons/si';

// Import custom components
import ShootingStarGame from './components/ShootingStarGame';
import KonamiCode, { RainbowMode } from './components/KonamiCode';
import GitHubStats from './components/GitHubStats';
import TechOrbit from './components/TechOrbit';
import TypingAnimation from './components/TypingAnimation';

// Custom cursor component
const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.matches('a, button, .hoverable')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${isHovering ? 'cursor-hover' : ''}`}
      style={{
        left: mousePosition.x - 10,
        top: mousePosition.y - 10,
      }}
    />
  );
};

// Particle configuration
const particlesConfig = {
  fpsLimit: 120,
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: ["#00f3ff", "#b537ff", "#ff006e"]
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.8,
      random: true,
      animation: {
        enable: true,
        speed: 1,
        minimumValue: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      animation: {
        enable: true,
        speed: 2,
        minimumValue: 0.1,
        sync: false
      }
    },
    move: {
      enable: true,
      speed: 0.5,
      direction: "none",
      random: false,
      straight: false,
      outModes: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      onHover: {
        enable: true,
        mode: "grab"
      },
      onClick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 140,
        links: {
          opacity: 0.5
        }
      },
      push: {
        quantity: 4
      }
    }
  },
  detectRetina: true
};

// Hero Section Component
const HeroSection = ({ darkMode }) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-4">
      <div className="flex items-center justify-between w-full max-w-6xl mx-auto z-10">
        {/* Left side - Name */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-left"
        >
          <h1 className="text-6xl md:text-8xl font-cosmic font-bold mb-4 galaxy-spark-text">
            KAMBAMPATI KIRAN
          </h1>
          <p className="text-xl md:text-2xl text-neon-blue mb-8">
            AI Engineer & Full-Stack Developer
          </p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-4 mb-8"
          >
            <div className="flex items-center space-x-2 text-lg hoverable">
              <FaMapMarkerAlt className="text-neon-blue" />
              <span>Tirupati</span>
            </div>
            <div className="flex items-center space-x-2 text-lg hoverable">
              <FaEnvelope className="text-neon-purple" />
              <a href="mailto:kirankambampati3104@gmail.com" className="hover-text-neon-blue transition-colors">
                kirankambampati3104@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-2 text-lg hoverable">
              <FaPhone className="text-neon-pink" />
              <span>+91 8008520031</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex items-center space-x-6"
          >
            <a href="https://linkedin.com/in/kirankambampati565" className="text-2xl hover-text-neon-blue transition-colors hoverable">
              <FaLinkedin />
            </a>
            <a href="https://github.com/KiranKambampati" className="text-2xl hover-text-neon-purple transition-colors hoverable">
              <FaGithub />
            </a>
            <button className="glass px-6 py-3 rounded-full text-lg font-semibold hover-bg-neon-blue hover-text-black transition-all duration-300 neon-glow hoverable flex items-center space-x-2">
              <FaDownload />
              <span>Resume</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Right side - Photo */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex-1 flex justify-end"
        >
          <div className="w-64 h-64 glass rounded-full p-4 hover-lift">
            <div className="w-full h-full bg-gradient-to-br from-neon-blue to-neon-purple rounded-full flex items-center justify-center text-8xl">
              👨‍💻
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Technologies Section Component
const TechnologiesSection = () => {
  const technologies = {
    Languages: [
      { name: 'Java', icon: FaJava, color: '#f89820', size: 'text-5xl' },
      { name: 'Python', icon: SiPython, color: '#3776ab', size: 'text-4xl' },
      { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e', size: 'text-5xl' }
    ],
    Web: [
      { name: 'HTML5', icon: SiHtml5, color: '#e34f26', size: 'text-4xl' },
      { name: 'CSS3', icon: SiCss3, color: '#1572b6', size: 'text-4xl' },
      { name: 'React.js', icon: SiReact, color: '#61dafb', size: 'text-5xl' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933', size: 'text-4xl' }
    ],
    Databases: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47a248', size: 'text-4xl' },
      { name: 'Redis', icon: SiRedis, color: '#dc382d', size: 'text-4xl' },
      { name: 'Supabase', icon: SiSupabase, color: '#3ecf8e', size: 'text-4xl' }
    ],
    Tools: [
      { name: 'Git', icon: SiGit, color: '#f05032', size: 'text-4xl' },
      { name: 'GitHub', icon: SiGithub, color: '#181717', size: 'text-4xl' },
      { name: 'VS Code', icon: FaCode, color: '#007acc', size: 'text-4xl' }
    ]
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-cosmic font-bold text-center mb-16 galaxy-spark-text"
        >
          TECHNOLOGIES
        </motion.h2>
        
        {/* Languages and Web Technologies side by side */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Languages Section - Left */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="galaxy-card p-8 rounded-2xl"
          >
            <h3 className="text-3xl font-semibold mb-6 text-neon-blue galaxy-spark-text">LANGUAGES</h3>
            <div className="grid grid-cols-1 gap-8">
              {technologies.Languages.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ scale: 1.15, y: -15 }}
                  className="flex flex-col items-center p-6 rounded-lg hover-white-10 transition-all duration-300 hoverable galaxy-border"
                >
                  <tech.icon 
                    className={`${tech.size} mb-4 galaxy-spark`} 
                    style={{ color: tech.color }}
                  />
                  <span className="text-lg font-bold">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Web Technologies - Right */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="galaxy-card p-8 rounded-2xl"
          >
            <h3 className="text-3xl font-semibold mb-6 text-neon-purple galaxy-spark-text">WEB</h3>
            <div className="grid grid-cols-2 gap-6">
              {technologies.Web.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -10 }}
                  className="flex flex-col items-center p-4 rounded-lg hover-white-10 transition-all duration-300 hoverable"
                >
                  <tech.icon 
                    className={`${tech.size} mb-2 galaxy-spark`} 
                    style={{ color: tech.color }}
                  />
                  <span className="text-sm font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tools and Databases side by side */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Tools - Left */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="galaxy-card p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-semibold mb-6 text-neon-pink galaxy-spark-text">TOOLS</h3>
            <div className="grid grid-cols-2 gap-6">
              {technologies.Tools.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -10 }}
                  className="flex flex-col items-center p-4 rounded-lg hover-white-10 transition-all duration-300 hoverable"
                >
                  <tech.icon 
                    className={`${tech.size} mb-2 galaxy-spark`} 
                    style={{ color: tech.color }}
                  />
                  <span className="text-sm font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Databases - Right */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="galaxy-card p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-semibold mb-6 text-neon-blue galaxy-spark-text">DATABASES</h3>
            <div className="grid grid-cols-1 gap-6">
              {technologies.Databases.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -10 }}
                  className="flex flex-col items-center p-4 rounded-lg hover-white-10 transition-all duration-300 hoverable"
                >
                  <tech.icon 
                    className={`${tech.size} mb-2 galaxy-spark`} 
                    style={{ color: tech.color }}
                  />
                  <span className="text-sm font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Education Section Component
const EducationSection = () => {
  const education = [
    {
      institution: "Mohan Babu University",
      degree: "B.Tech Computer Science Engineering",
      period: "2022 - 2026",
      grade: "GPA: 8.5",
      description: "Specializing in AI and Machine Learning with focus on practical applications."
    },
    {
      institution: "Sri Chaitanya Junior College",
      degree: "Intermediate",
      period: "2020 - 2022",
      grade: "Percentage: 84.2",
      description: "Mathematics, Physics, Chemistry with Computer Science."
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-cosmic font-bold text-center mb-16 galaxy-spark-text"
        >
          EDUCATION
        </motion.h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-neon-blue to-neon-purple"></div>
          
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: index * 0.3 }}
              className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <div className="glass p-6 rounded-xl hover-lift">
                  <h3 className="text-xl font-bold text-neon-blue mb-2">{edu.institution}</h3>
                  <h4 className="text-lg font-semibold mb-2">{edu.degree}</h4>
                  <p className="text-neon-purple font-medium mb-2">{edu.period}</p>
                  <p className="text-yellow-400 font-medium mb-3">{edu.grade}</p>
                  <p className="text-gray-300">{edu.description}</p>
                </div>
              </div>
              
              {/* Timeline dot */}
              <div className="relative z-10">
                <div className="w-4 h-4 bg-neon-blue rounded-full border-4 border-white"></div>
              </div>
              
              <div className="w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projects Section Component
const ProjectsSection = () => {
  const projects = [
    {
      title: "ChatSphere",
      subtitle: "Real-time Chat Application",
      description: "A modern real-time chat application with instant messaging, user authentication, and responsive design built with cutting-edge technologies.",
      technologies: ["Node.js", "Express.js", "Socket.IO", "React", "MongoDB", "JWT", "Tailwind CSS"],
      features: ["Instant messaging", "Real-time updates", "User authentication", "Responsive UI", "File sharing", "Group chats"],
      github: "https://github.com/KiranKambampati/ChatSphere",
      status: "Completed"
    },
    {
      title: "Chatterbox",
      subtitle: "AI Voice Translator",
      description: "An intelligent voice translation application that converts speech to text, translates to multiple languages, and converts back to speech using advanced AI.",
      technologies: ["Python", "SpeechRecognition", "Google Cloud Translation API", "gTTS", "React", "Flask"],
      features: ["Speech-to-text", "Multilingual translation", "Text-to-speech", "Real-time processing", "Voice recognition"],
      github: "https://github.com/KiranKambampati/Chatterbox",
      status: "In Progress"
    },
    {
      title: "Portfolio-3D",
      subtitle: "Interactive 3D Portfolio",
      description: "A stunning 3D interactive portfolio website featuring advanced animations, particle effects, and immersive user experience.",
      technologies: ["React", "Three.js", "Framer Motion", "WebGL", "GSAP", "Vite"],
      features: ["3D animations", "Particle effects", "Interactive elements", "Responsive design", "Performance optimized"],
      github: "https://github.com/KiranKambampati/Portfolio-3D",
      status: "Featured"
    }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'Completed': return 'text-green-400';
      case 'In Progress': return 'text-yellow-400';
      case 'Featured': return 'text-neon-blue';
      default: return 'text-gray-400';
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-cosmic font-bold text-center mb-16 galaxy-spark-text"
        >
          PROJECTS
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, rotateY: 3 }}
              className="galaxy-card p-6 rounded-xl hover-lift"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold galaxy-spark-text mb-2">{project.title}</h3>
                <div className="flex items-center justify-between">
                  <h4 className="text-lg text-neon-purple">{project.subtitle}</h4>
                  <span className={`text-sm font-semibold ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
              
              <div className="mb-6">
                <h5 className="text-sm font-semibold text-neon-blue mb-3">Technologies:</h5>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 galaxy-tag rounded-full text-xs font-medium transition-all duration-300 hover:scale-110"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h5 className="text-sm font-semibold text-neon-purple mb-3">Features:</h5>
                <ul className="list-none space-y-1">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-neon-blue rounded-full mr-2 opacity-70"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex justify-center">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3 galaxy-button rounded-lg transition-all duration-300 hoverable font-semibold"
                >
                  <FaGithub />
                  <span>View Code</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/KiranKambampati"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-8 py-4 galaxy-button-large rounded-full text-lg font-bold transition-all duration-300 hoverable"
          >
            <FaGithub className="text-xl" />
            <span>View All Projects</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

// Summary Section Component
const SummarySection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-cosmic font-bold mb-16 galaxy-spark-text"
        >
          SUMMARY & VISION
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="galaxy-card p-8 rounded-2xl mb-12"
        >
          <h3 className="text-2xl font-bold galaxy-spark-text mb-6">ABOUT ME</h3>
          <div className="text-lg text-gray-300 leading-relaxed space-y-4">
            <p>
              I'm a passionate AI Engineer and Full-Stack Developer with a deep fascination for cutting-edge technology. 
              My journey began with curiosity about how machines can learn and think, leading me to explore the vast world 
              of artificial intelligence and web development.
            </p>
            <p>
              Currently pursuing B.Tech in Computer Science Engineering at Mohan Babu University, I've developed expertise 
              in machine learning frameworks like TensorFlow and PyTorch, alongside modern web technologies including React, 
              Node.js, and various databases. I thrive on solving complex problems and turning innovative ideas into 
              reality through code.
            </p>
            <p>
              Beyond technical skills, I'm a creative problem-solver who enjoys building user-friendly solutions that make 
              a real impact. Whether it's developing intelligent chatbots, creating immersive web experiences, or exploring 
              the latest in AI research, I'm always eager to push the boundaries of what's possible.
            </p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="galaxy-card p-8 rounded-2xl mb-12"
        >
          <h3 className="text-2xl font-bold galaxy-spark-text mb-6">FUTURE GOALS</h3>
          <div className="text-lg text-gray-300 leading-relaxed space-y-4">
            <p>
              My vision is to become a leading AI Engineer who bridges cutting-edge research with practical applications.
            </p>
            <p>
              I aim to specialize in Natural Language Processing, Computer Vision, and Generative AI while maintaining strong full-stack development skills.
            </p>
            <p>
              I want to contribute to open-source projects, publish research papers, and lead innovative AI initiatives in healthcare or education.
            </p>
            <p>
              My ultimate goal is to create technology that makes the world more accessible, efficient, and connected through AI-powered solutions.
            </p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-12"
        >
          <blockquote className="text-2xl font-cosmic galaxy-spark-text italic">
            "The future belongs to those who learn more skills and combine them in creative ways to solve tomorrow's challenges."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-md py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-neon-blue" />
            <span>kirankambampati3104@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhone className="text-neon-purple" />
            <span>+91 8008520031</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-neon-pink" />
            <span>Tirupati</span>
          </div>
        </div>
        
        <div className="flex items-center justify-center space-x-6 mt-6">
          <motion.a
            href="https://linkedin.com/in/kirankambampati565"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.3 }}
            className="text-2xl text-neon-blue hover-text-white transition-colors hoverable"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://github.com/KiranKambampati"
            whileHover={{ scale: 1.2, rotate: -360 }}
            transition={{ duration: 0.3 }}
            className="text-2xl text-neon-purple hover-text-white transition-colors hoverable"
          >
            <FaGithub />
          </motion.a>
        </div>
        
        <div className="mt-6 text-gray-400">
          <p>&copy; 2025 Kambampati Kiran. Made with ❤️ and lots of ☕</p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [showGame, setShowGame] = useState(false);
  const [rainbowMode, setRainbowMode] = useState(false);

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleShootingStarClick = () => {
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 }
    });
  };

  const activateRainbowMode = () => {
    setRainbowMode(true);
    setTimeout(() => setRainbowMode(false), 5000);
  };

  // Create random shooting stars
  const ShootingStars = () => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
      const createStar = () => {
        const star = {
          id: Date.now() + Math.random(),
          left: Math.random() * 100,
          animationDuration: 2 + Math.random() * 3,
        };
        setStars(prev => [...prev, star]);
        setTimeout(() => {
          setStars(prev => prev.filter(s => s.id !== star.id));
        }, star.animationDuration * 1000);
      };

      const interval = setInterval(createStar, 3000);
      return () => clearInterval(interval);
    }, []);

    return (
      <div className="fixed inset-0 pointer-events-none z-30">
        {stars.map(star => (
          <div
            key={star.id}
            className="absolute text-2xl cursor-pointer pointer-events-auto"
            style={{
              left: `${star.left}%`,
              top: '-50px',
              animation: `shooting-star ${star.animationDuration}s linear forwards`,
            }}
            onClick={handleShootingStarClick}
          >
            ⭐
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <CustomCursor />
      <KonamiCode onActivate={activateRainbowMode} />
      <RainbowMode isActive={rainbowMode} />
      <ShootingStars />
      
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
        className="fixed inset-0 z-0"
      />
      
      {/* Dark/Light Mode Toggle */}
      <motion.button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 z-50 glass p-3 rounded-full hover-white-20 transition-all duration-300 hoverable"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {darkMode ? (
          <FaSun className="text-yellow-400 text-xl" />
        ) : (
          <FaMoon className="text-blue-400 text-xl" />
        )}
      </motion.button>

      {/* Game Toggle Button */}
      <motion.button
        onClick={() => setShowGame(true)}
        className="fixed top-4 right-20 z-50 glass p-3 rounded-full hover-white-20 transition-all duration-300 hoverable"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaGamepad className="text-neon-purple text-xl" />
      </motion.button>
      
      {/* Main Content */}
      <div className="relative z-10">
        <HeroSection darkMode={darkMode} />
        <TechnologiesSection />
        <EducationSection />
        <ProjectsSection />
        <SummarySection />
        <Footer />
      </div>

      {/* Shooting Star Game */}
      <AnimatePresence>
        <ShootingStarGame
          isVisible={showGame}
          onClose={() => setShowGame(false)}
        />
      </AnimatePresence>
    </div>
  );
};

export default App;
