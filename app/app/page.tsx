"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Image from "next/image"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Home,
  User,
  Briefcase,
  GraduationCap,
  Folder,
  MessageSquare,
  Moon,
  Sun,
} from "lucide-react"

const navItems = [
  { icon: Home, label: "Home" },
  { icon: User, label: "About" },
  { icon: Briefcase, label: "Experience" },
  { icon: GraduationCap, label: "Education" },
  { icon: Folder, label: "Projects" },
  { icon: MessageSquare, label: "Contact" },
]

export default function EnhancedDynamicPortfolio() {
  const [activeSection, setActiveSection] = useState("Home")
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  return (
    <div
      className={`flex min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300 ${darkMode ? "dark" : ""}`}
    >
      {/* Sidebar */}
      <aside className="w-80 bg-gradient-to-b from-purple-700 to-indigo-800 dark:from-purple-900 dark:to-indigo-950 text-white p-6 flex flex-col">
        <div className="flex flex-col items-center mb-8">
          <div className="relative w-32 h-32 mb-4">
            <Image
              src="/placeholder.svg?height=128&width=128"
              alt="Profile Picture"
              layout="fill"
              className="rounded-full border-4 border-white dark:border-gray-800"
            />
          </div>
          <h1 className="text-2xl font-bold">Your Name</h1>
          <p className="text-sm text-purple-200">Web Developer</p>
        </div>
        <nav className="flex-grow">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <Button
                  variant="ghost"
                  className={`w-full justify-start text-lg ${activeSection === item.label ? "bg-white bg-opacity-10" : ""}`}
                  onClick={() => setActiveSection(item.label)}
                >
                  <item.icon className="mr-2 w-10 h-10" />
                  {item.label}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex justify-between items-center mt-6">
          <div className="flex space-x-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href="#" className="text-white hover:text-purple-200 transition-colors">
                    <Github size={20} />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>GitHub</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href="#" className="text-white hover:text-purple-200 transition-colors">
                    <Linkedin size={20} />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>LinkedIn</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href="#" className="text-white hover:text-purple-200 transition-colors">
                    <Mail size={20} />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Email</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setDarkMode(!darkMode)}
            className="text-white hover:text-purple-200"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8 overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            {activeSection === "Home" && (
              <div className="text-center">
                <motion.h1
                  className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  Welcome to My Portfolio
                </motion.h1>
                <motion.p
                  className="text-xl text-gray-600 dark:text-gray-300 mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  Crafting digital experiences with code and creativity
                </motion.p>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">View My Work</Button>
                </motion.div>
              </div>
            )}

            {activeSection === "About" && (
              <div>
                <h2 className="text-3xl font-bold mb-6 dark:text-white">About Me</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                  I'm a passionate web developer with a keen eye for design and a love for creating seamless user
                  experiences. With expertise in modern web technologies, I bring ideas to life through clean, efficient
                  code and intuitive interfaces.
                </p>
                <h3 className="text-2xl font-semibold mb-4 dark:text-white">Skills</h3>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {[
                    "React",
                    "Node.js",
                    "TypeScript",
                    "UI/UX Design",
                    "GraphQL",
                    "Next.js",
                    "TailwindCSS",
                    "MongoDB",
                  ].map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium dark:text-white">{skill}</span>
                        <span className="text-gray-600 dark:text-gray-400">{90 - index * 5}%</span>
                      </div>
                      <Progress value={90 - index * 5} className="h-2" />
                    </div>
                  ))}
                </div>
                <h3 className="text-2xl font-semibold mb-4 dark:text-white">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {["Web Development", "UI/UX Design", "Machine Learning", "Open Source", "Tech Writing"].map(
                    (interest, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm"
                      >
                        {interest}
                      </span>
                    ),
                  )}
                </div>
              </div>
            )}

            {activeSection === "Experience" && (
              <div>
                <h2 className="text-3xl font-bold mb-6 dark:text-white">Work Experience</h2>
                <div className="space-y-6">
                  {[
                    {
                      title: "Senior Web Developer",
                      company: "Tech Innovators Inc.",
                      period: "2020 - Present",
                      description:
                        "Lead development of complex web applications, mentor junior developers, and implement best practices.",
                    },
                    {
                      title: "Frontend Developer",
                      company: "Creative Solutions Ltd.",
                      period: "2018 - 2020",
                      description: "Developed responsive and accessible user interfaces for various client projects.",
                    },
                    {
                      title: "Junior Developer",
                      company: "StartUp Ventures",
                      period: "2016 - 2018",
                      description:
                        "Assisted in the development of web applications and gained experience in full-stack development.",
                    },
                  ].map((job, index) => (
                    <motion.div
                      key={index}
                      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <h3 className="text-xl font-semibold dark:text-white">{job.title}</h3>
                      <p className="text-purple-600 dark:text-purple-400">{job.company}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{job.period}</p>
                      <p className="mt-2 text-gray-700 dark:text-gray-300">{job.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === "Education" && (
              <div>
                <h2 className="text-3xl font-bold mb-6 dark:text-white">Education</h2>
                <div className="space-y-6">
                  {[
                    {
                      degree: "Master of Computer Science",
                      school: "University of Technology",
                      year: "2016",
                      description: "Specialized in Artificial Intelligence and Machine Learning",
                    },
                    {
                      degree: "Bachelor of Software Engineering",
                      school: "State University",
                      year: "2014",
                      description: "Focused on Web Technologies and Database Management",
                    },
                  ].map((edu, index) => (
                    <motion.div
                      key={index}
                      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <h3 className="text-xl font-semibold dark:text-white">{edu.degree}</h3>
                      <p className="text-purple-600 dark:text-purple-400">{edu.school}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Graduated: {edu.year}</p>
                      <p className="mt-2 text-gray-700 dark:text-gray-300">{edu.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === "Projects" && (
              <div>
                <h2 className="text-3xl font-bold mb-6 dark:text-white">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      name: "E-commerce Platform",
                      tech: "React, Node.js, MongoDB",
                      description: "A full-stack e-commerce solution with real-time inventory management.",
                    },
                    {
                      name: "Task Management App",
                      tech: "Vue.js, Firebase",
                      description: "A collaborative task management tool with real-time updates.",
                    },
                    {
                      name: "Social Media Dashboard",
                      tech: "React, D3.js, Express",
                      description: "An analytics dashboard for social media performance tracking.",
                    },
                    {
                      name: "Fitness Tracker",
                      tech: "React Native, GraphQL",
                      description: "A mobile app for tracking workouts and nutrition with personalized insights.",
                    },
                  ].map((project, index) => (
                    <motion.div
                      key={index}
                      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <h3 className="text-xl font-semibold mb-2 dark:text-white">{project.name}</h3>
                      <p className="text-sm text-purple-600 dark:text-purple-400 mb-2">{project.tech}</p>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                      <Button
                        variant="outline"
                        className="text-purple-600 border-purple-600 hover:bg-purple-50 dark:text-purple-400 dark:border-purple-400 dark:hover:bg-purple-900"
                      >
                        View Project <ExternalLink size={16} className="ml-2" />
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === "Contact" && (
              <div>
                <h2 className="text-3xl font-bold mb-6 dark:text-white">Contact Me</h2>
                <form className="space-y-4 max-w-md mx-auto">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-white"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-white"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-white"
                  ></textarea>
                  <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    Send Message
                  </Button>
                </form>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}