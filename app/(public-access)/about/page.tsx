"use client"

import { NextPage } from 'next'
import React from 'react'
import { motion } from 'motion/react'

const AboutPage: NextPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="p-8 max-w-6xl mx-auto"
    >
      {/* Header Section */}
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-5xl font-bold text-center mb-4 dark:text-primary"
      >
        Vikas Meshram
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-2xl text-center mb-8 text-muted-foreground"
      >
        Full-Stack Web Developer 🚀
      </motion.h2>

      {/* About Section */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-lg leading-relaxed text-muted-foreground"
      >
        Passionate and results-driven developer with 9 months of experience crafting scalable, high-performance web applications. I specialize in Next.js, React.js, Node.js, TypeScript, MongoDB, PostgreSQL, and AI-driven solutions, building seamless user experiences and robust back-end architectures.
      </motion.p>

      {/* Skills Section */}
      <motion.div
        className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
        }}
      >
        {[
          { title: "Frontend Excellence", desc: "Next.js, React, Tailwind CSS – crafting sleek, responsive UIs." },
          { title: "Backend Mastery", desc: "Node.js, Express, PostgreSQL, MongoDB – building scalable APIs." },
          { title: "Cloud & DevOps", desc: "AWS, Vercel, Docker – ensuring seamless deployment and CI/CD." },
          { title: "AI & Automation", desc: "Integrating AI-powered features for smarter applications." },
        ].map((skill, index) => (
          <motion.div
            key={index}
            className="p-6 border rounded-lg shadow-md"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h3 className="text-2xl font-semibold dark:text-primary">{skill.title}</h3>
            <p className="text-lg text-muted-foreground">{skill.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Closing Statement */}
      <motion.p
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-center text-xl font-medium mt-8 text-muted-foreground"
      >
        Committed to pushing the boundaries of modern web development, I strive to build innovative digital solutions that redefine efficiency and user engagement. Let’s build something amazing together! 🌟
      </motion.p>
    </motion.div>
  )
}

export default AboutPage
