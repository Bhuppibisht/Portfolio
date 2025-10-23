"use client"

import { motion, useScroll, useSpring, useTransform, AnimatePresence } from "motion/react"
import React, { useRef, useState } from "react"
import {
  CPPIcon,
  CSSIcon,
  ExpressIcon,
  GithubIcon,
  GitIcon,
  GraphQLIcon,
  HTMLIcon,
  JavaSciptIcon,
  MongoDBIcon,
  NextJsIcon,
  NodeJsIcon,
  PostgresIcon,
  PostmanIcon,
  PrismaIcon,
  ReactIcon,
  ReduxIcon,
  TailwindIcon,
  TypeScriptIcon,
  DrizzleIcon,
  JWTIcon,
  MySQLIcon,
  AceternityIcon,
  ShadCNIcon,
  DockerIcon,
  KubernetesIcon,
  AWSIcon,
  CICDIcon,
} from "./ui/icon"

interface Skill {
  name: string
  category: string
  icon: React.ReactNode
}

const skills: Skill[] = [
  { name: "JavaScript", category: "Programming Languages", icon: <JavaSciptIcon /> },
  { name: "TypeScript", category: "Programming Languages", icon: <TypeScriptIcon /> },
  { name: "C++", category: "Programming Languages", icon: <CPPIcon /> },

  { name: "HTML", category: "Frontend", icon: <HTMLIcon /> },
  { name: "CSS", category: "Frontend", icon: <CSSIcon /> },
  { name: "Tailwind CSS", category: "Frontend", icon: <TailwindIcon /> },
  { name: "React", category: "Frontend", icon: <ReactIcon /> },
  { name: "Next.js", category: "Frontend", icon: <NextJsIcon /> },
  { name: "Redux", category: "Frontend", icon: <ReduxIcon /> },

  { name: "Node.js", category: "Backend", icon: <NodeJsIcon /> },
  { name: "Express.js", category: "Backend", icon: <ExpressIcon /> },
  { name: "JWT", category: "Backend", icon: <JWTIcon /> },

  { name: "PostgreSQL", category: "Databases", icon: <PostgresIcon /> },
  { name: "MongoDB", category: "Databases", icon: <MongoDBIcon /> },
  { name: "Prisma", category: "Databases", icon: <PrismaIcon /> },
  { name: "MySQL", category: "Databases", icon: <MySQLIcon /> },
  { name: "Drizzle", category: "Databases", icon: <DrizzleIcon /> },

  { name: "Docker", category: "DevOps", icon: <DockerIcon /> },
  { name: "Kubernetes", category: "DevOps", icon: <KubernetesIcon /> },
  { name: "AWS", category: "DevOps", icon: <AWSIcon /> },
  { name: "CI/CD", category: "DevOps", icon: <CICDIcon /> },

  { name: "Git", category: "Tools & Platforms", icon: <GitIcon /> },
  { name: "GitHub", category: "Tools & Platforms", icon: <GithubIcon /> },
  { name: "Postman", category: "Tools & Platforms", icon: <PostmanIcon /> },
  { name: "Aceternity", category: "Tools & Platforms", icon: <AceternityIcon /> },
  { name: "ShadCN", category: "Tools & Platforms", icon: <ShadCNIcon /> },
//   { name: "GraphQL", category: "Tools & Platforms", icon: <GraphQLIcon /> },
]

const categories = [
  "All",
  "Programming Languages",
  "Frontend",
  "Backend",
  "Databases",
  "DevOps",
  "Tools & Platforms",
]

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const translateContent = useSpring(useTransform(scrollYProgress, [0, 1], [50, -50]), {
    stiffness: 120,
    damping: 24,
    mass: 0.8,
  })

  const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory)

  return (
    <motion.section
      ref={ref}
      style={{ y: translateContent }}
      id="skills"
      className="transition-colors duration-300 mx-auto flex flex-col gap-8 px-4 py-24 sm:px-10 md:px-20 lg:px-32"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-center mb-6"
      >
        <h1 className="text-4xl sm:text-5xl font-bold">Technical Skills</h1>
        <p className="text-gray-600 dark:text-gray-400 text-md">
          Technologies and frameworks I work with
        </p>
      </motion.div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
              selectedCategory === category
                ? "bg-black dark:bg-neutral-700 text-white"
                : "text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-neutral-800"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Icons Grid */}
      <motion.div
        layout
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 place-items-center"
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col items-center gap-2 text-center"
            >
              <motion.div
                className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center"
                whileHover={{ scale: 1.15, rotate: 3 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                {skill.icon}
              </motion.div>
              <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  )
}
