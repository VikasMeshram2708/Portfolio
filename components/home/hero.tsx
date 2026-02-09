"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="min-h-screen">
      <div className="flex h-screen items-center px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid w-full grid-cols-1 items-center gap-10 selection:bg-neutral-400 selection:text-white md:grid-cols-2"
        >
          {/* LEFT CONTENT */}
          <div className="space-y-6">
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-5xl leading-[1.05] font-semibold tracking-tight md:text-7xl"
            >
              <span className="text-neutral-500">{"I'm"} a</span>
              <br />
              <span className="text-white">Full Stack Developer</span>
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.45 }}
              className="max-w-xl text-sm leading-relaxed text-neutral-400 md:text-base"
            >
              Also I do exploring places, collecting ideas, and chasing
              inspiration.
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="relative inline-flex h-12 overflow-hidden rounded-full p-px focus:outline-none"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

              <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-4 text-sm font-medium text-white backdrop-blur-3xl">
                About Me
                <motion.span
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ArrowRight className="ml-2 size-5" />
                </motion.span>
              </span>
            </motion.button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center md:justify-end">
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative h-[60vh] w-105 md:w-120"
            >
              <Image
                src="/pics/tr.png"
                alt="Avatar"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
