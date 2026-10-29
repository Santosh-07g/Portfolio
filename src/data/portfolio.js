import { FaServer, FaDatabase, FaReact, FaCloud, FaCode, FaRobot } from 'react-icons/fa'
import { assets } from '../assets/assets'

// Single source of truth for the page sections and the hero terminal.

export const profile = {
  name: 'Santosh Gurkhe',
  role: 'Software Engineer',
  company: 'MountBlue Technologies',
  location: 'Bangalore, Karnataka',
  email: 'santoshgurkhe07xyz@gmail.com',
  phone: '+91 9880232612',
  github: 'https://github.com/Santosh-07g',
  linkedin: 'https://www.linkedin.com/in/santosh49/',
  leetcode: 'https://leetcode.com/u/santosh_077/',
  avatar: assets.profileImg,
  // file lives in /public; `filename` is the name the visitor's download gets
  resume: { href: '/Santosh_Python.pdf', filename: 'Santosh_Gurkhe_Resume.pdf' },
}

export const projects = [
  {
    title: "LinkedIn Clone",
    description: "A professional networking platform built with Django and PostgreSQL, featuring profiles, posts, connections, threaded comments, messaging, notifications and Elasticsearch-powered search.",
    image: assets.projectImg9,
    tech: ["Python", "Django", "PostgreSQL", "Celery", "Redis", "Elasticsearch"],
    demoLink: "https://linkedin-clone-project-t5n4.onrender.com/"
  },
  {
    title: "AI Mock Interview Application",
    description: "An AI-powered mock interview app using React, Firebase and OpenAI API.",
    image: assets.projectImg7,
    tech: ["JavaScript", "TypeScript", "React", "Firebase", "Vapi API"],
    demoLink: "https://mock-interview-pg48.vercel.app/",
    codeLink: "https://github.com/Santosh-07g/mock-interview.git"
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with React and Tailwind CSS.",
    image: assets.projectImg4,
    tech: ["React", "Javascript", "Tailwind", "Framer Motion"],
    demoLink: "https://portfolio-8zfo.vercel.app/",
    codeLink: "https://github.com/Santosh-07g/portfolio"
  },
  {
    title: "Movie Ticket Booking System ",
    description: "Developed a full-stack movie ticket booking web application using Python and Django for backend development.",
    image: assets.projectImg8,
    tech: ["Python", "Django", "MySQL", "Javascript","HTML and CSS"],
    demoLink: "https://pmax-cinema-production.up.railway.app/",
    codeLink: "https://github.com/Santosh-07g/pmax-cinema"
  }
]

export const workData = [
  {
    role: "Software Engineer",
    company: "MountBlue Technologies",
    duration: "Jun 2026 - Present",
    description: "Working on full-stack software development with a focus on building scalable web applications. Contributing to frontend and backend development using modern frameworks, REST APIs, and database design while collaborating in an agile team environment.",
  },
  {
    role: "Full Stack Developer Intern",
    company: "Pentagon Space",
    duration: "Nov 2025 - May 2026",
    description: "Gaining hands-on experience in full-stack development using Python, HTML, CSS, JavaScript,Reactjs, Django, Numpy and MySQL. Building responsive UI, backend logic, and database connectivity for multiple web applications.",
  }
]

export const skills = [
  {
    icon: FaCode,
    title: 'CORE PROGRAMMING',
    description:
      'Strong problem-solving foundation with 500+ DSA problems solved on LeetCode and HackerRank.',
    tags: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'Data Structures & Algorithms', 'OOP']
  },
  {
    icon: FaReact,
    title: 'FRONTEND DEVELOPMENT',
    description:
      'Experience with React.js, Tailwind CSS, and responsive design to create engaging user interfaces.',
    tags: ['Reactjs', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Framer Motion']
  },
  {
    icon: FaServer,
    title: 'BACKEND DEVELOPMENT',
    description:
      'Building scalable server-side applications and RESTful APIs with Django, FastAPI and Node.js.',
    tags: ['Django', 'Django Rest Framework', 'FastAPI', 'Flask', 'Node.js', 'REST API', 'Celery']
  },
  {
    icon: FaDatabase,
    title: 'DATABASE MANAGEMENT',
    description:
      'Skilled in relational databases, caching and search for efficient data storage and retrieval.',
    tags: ['PostgreSQL', 'MySQL', 'Redis', 'Elasticsearch', 'Firebase']
  },
  {
    icon: FaRobot,
    title: 'AI & DATA',
    description:
      'Building LLM-powered apps like chatbots and document Q&A, and working with data in Python.',
    tags: ['LangChain', 'LangGraph', 'OpenAI API', 'Ollama', 'NumPy', 'Pandas']
  },
  {
    icon: FaCloud,
    title: 'DEPLOYMENT & CI/CD',
    description:
      'Experience with deployment platforms like Vercel and GitHub Actions for seamless delivery.',
    tags: ['Git', 'GitHub', 'GitLab', 'GitHub Actions', 'Vercel', 'Render', 'Railway']
  }
]
