"use client";

import Link from "next/link";
import Container from "./Container";
import { useMotionValueEvent, useScroll, motion } from "motion/react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export default function Header() {
  const { scrollY } = useScroll();

  const [hovered, setHovered] = useState<number>();
  const [isFloating, setIsFloating] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsFloating(latest > 40);
  });

  return (
    <header className="fixed top-0 z-50 w-full">
      <Container className="max-w-5xl">
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 260, damping: 26 }}
          className={`transition-all duration-300 ${
            isFloating
              ? "bg-background/80 mt-3 rounded-2xl px-4 py-2 shadow-lg backdrop-blur-lg md:px-6"
              : "px-0 py-4"
          }`}
        >
          {/* TOP ROW */}
          <div className="flex items-center justify-between">
            <Link href="/">
              <motion.h1
                layout
                className="text-xl font-medium tracking-tighter md:text-3xl"
              >
                Vikas Meshram
              </motion.h1>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden items-center gap-2 md:flex">
              {navLinks.map((link, index) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(undefined)}
                  className="relative px-3 py-1.5 text-sm"
                >
                  {hovered === index && (
                    <motion.span
                      layoutId="nav-pill"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                      className="absolute inset-0 rounded-full bg-neutral-700"
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              ))}
            </nav>

            {/* MOBILE MENU BUTTON */}
            <button
              className="md:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* MOBILE DROPDOWN */}
          <motion.div
            initial={false}
            animate={{
              height: menuOpen ? "auto" : 0,
              opacity: menuOpen ? 1 : 0,
            }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden md:hidden"
          >
            <div className="mt-3 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm hover:bg-neutral-800"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </header>
  );
}
