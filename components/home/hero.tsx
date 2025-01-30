"use client";

import { motion } from "motion/react";
import { Button } from "../ui/button";
import Link from "next/link";
import { RetroGrid } from "../ui/retro-grid";

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center py-32">
      <div className="container mx-auto px-6 flex flex-col items-center text-center space-y-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-extrabold tracking-tight"
        >
          Empowering Innovation, <span className="text-primary">Scaling Dreams</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg max-w-2xl text-muted-foreground"
        >
          Full-Stack Developer specializing in AI-powered solutions, cutting-edge web applications, and seamless user experiences.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button size="lg" className="rounded-lg w-64 font-semibold bg-primary hover:bg-primary-dark">
            <Link href="/projects">Explore My Work</Link>
          </Button>
        </motion.div>
      </div>
      <RetroGrid />

    </section>
  );
}
