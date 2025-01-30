/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "motion/react";
import { NextPage } from "next";
import React from "react";

const HireMePage: NextPage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center px-5 py-10">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center max-w-3xl"
      >
        <h1 className="text-4xl font-bold dark:text-primary">
          Let's Work Together
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Need a skilled developer with expertise in UI/UX, performance
          optimization, and scalable web applications? I'm here to bring your
          vision to life.
        </p>
      </motion.div>

      {/* Why Hire Me Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        className="mt-10 max-w-4xl"
      >
        <h2 className="text-3xl font-bold text-center dark:text-primary">
          Why Hire Me?
        </h2>
        <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2">
          {[
            {
              title: "Scalable Solutions",
              description:
                "I build high-performance applications with modern frameworks like Next.js, ensuring scalability and efficiency.",
            },
            {
              title: "SEO & Performance",
              description:
                "Optimized websites for speed, SEO, and best practices to improve visibility and user engagement.",
            },
            {
              title: "Clean & Maintainable Code",
              description:
                "I write structured, maintainable code that ensures long-term project success and easy updates.",
            },
            {
              title: "User-Centric Approach",
              description:
                "Focused on intuitive UI/UX designs to enhance user experience and engagement.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="p-4 border rounded-lg shadow-md"
            >
              <h3 className="text-lg font-semibold dark:text-primary">
                {item.title}
              </h3>
              <p className="mt-2 text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-16 w-full max-w-lg text-center border p-6 rounded-lg shadow-md"
      >
        <h2 className="text-3xl font-bold dark:text-primary">Get in Touch</h2>
        <p className="mt-3 text-muted-foreground">
          Let's discuss how I can help with your project.
        </p>

        <div className="mt-6 flex flex-col items-center space-y-4">
          <div className="text-lg font-bold">
            <span className="block dark:text-primary">Email:</span>
            <a
              href="mailto:meshramvikas108@gmail.com"
              className="text-lg text-muted-foreground"
            >
              meshramvikas108@gmail.com
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HireMePage;
