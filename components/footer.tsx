"use client";

import { motion } from "motion/react";
import Container from "./Container";
import { ArrowUpRightIcon } from "lucide-react";
const socialsData = [
  {
    label: "X",
    url: "https://x.com/mevikas1008",
  },
  {
    label: "Instagram",
    url: "https://www.instagram.com/sudo_dnf_upgrade",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/vikas-meshram",
  },
  {
    label: "Github",
    url: "https://github.com/VikasMeshram2708",
  },
] as const;
export default function Footer() {
  return (
    <footer className="w-full">
      <Container className="px-4 py-6">
        <div className="flex items-center gap-8 text-sm">
          {socialsData.map((data) => (
            <motion.a
              key={data.label}
              href={data.url}
              target="_blank"
              rel="noopener noreferrer"
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="group flex items-center gap-2"
            >
              {/* Label */}
              <motion.span
                className="text-sm font-semibold tracking-wide text-pretty"
                variants={{
                  rest: { x: 0 },
                  hover: { x: 2 },
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                {data.label}
              </motion.span>
              {/* Arrow */}
              <motion.span
                variants={{
                  rest: { opacity: 0, x: -6 },
                  hover: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="flex items-center"
              >
                <ArrowUpRightIcon className="size-4" />
              </motion.span>
            </motion.a>
          ))}
        </div>
        <div className="mt-4 border-t" />
        <p className="mt-5 text-center text-neutral-400">
          @Vikas Meshram, 2026
        </p>
      </Container>
    </footer>
  );
}
