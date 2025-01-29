"use client";

import { motion } from "motion/react"; // As per your request
import Link from "next/link";
import { Twitter, Linkedin, Github } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { lists } from "@/data";
import { cn } from "@/lib/utils";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full py-10 border-t"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 sm:px-8">
        {/* Logo & Navigation */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">
            <Link href="/">
              Vikas <span className="dark:text-primary">Meshram</span>
            </Link>
          </h1>
          <NavigationMenu className="flex gap-6 mt-4">
            <NavigationMenuList>
              {lists.map((list) => (
                <NavigationMenuItem key={list.url}>
                  <Link href={list.url} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "text-base transition-all hover:underline"
                      )}
                    >
                      {list.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-6 mt-4 md:mt-0">
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://x.com/mevikas1008"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://www.linkedin.com/in/vikas-meshram"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://github.com/VikasMeshram2708"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github size={20} />
          </motion.a>
        </div>

        {/* Copyright */}
        <p className="mt-6 md:mt-0 text-base text-center text-muted-foreground md:text-right">
          © {new Date().getFullYear()} Vikas Meshram. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
