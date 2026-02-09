"use client";

import { motion } from "motion/react";

const values = [
  "Product Design",
  "User-Centric",
  "Business Impact",
  "Design Thinking",
  "Problem Solving",
  "Immediate Joiner",
];

export default function ValueMarquee() {
  return (
    <section className="relative overflow-hidden py-16">
      {/* angled strip wrapper */}
      <div className="relative -rotate-3">
        <div className="overflow-hidden bg-lime-400 py-3 text-black">
          <motion.div
            className="flex w-max gap-8 text-sm font-medium whitespace-nowrap md:text-base"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 18,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {/* duplicated content for seamless loop */}
            {[...values, ...values].map((item, index) => (
              <span key={index} className="flex items-center gap-8">
                <span>✦</span>
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
