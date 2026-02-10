"use client";

import { motion } from "motion/react";
import Container from "../Container";

export default function Cta() {
  return (
    <Container className="flex flex-col justify-center space-y-4 py-16 md:py-24">
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="max-w-xl text-3xl leading-tight tracking-tight md:text-4xl md:leading-tight lg:text-5xl"
      >
        Available for
        <br />
        New Challenges.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.45,
          delay: 0.08,
          ease: "easeOut",
        }}
        className="text-muted-foreground max-w-md text-sm font-medium md:text-base"
      >
        Open to new roles, feedback, or a simple coffee chat.
      </motion.p>
    </Container>
  );
}
