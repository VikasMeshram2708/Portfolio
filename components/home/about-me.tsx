"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Container from "../Container";

export default function AboutMe() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              A Bit About Me
            </h2>

            <div className="text-muted-foreground space-y-4 leading-relaxed">
              <p>
                I’m a Full Stack Developer focused on building scalable web
                applications and AI-powered products. My work centers around
                designing reliable systems, optimizing performance, and
                delivering end-to-end product experiences using React, Next.js,
                TypeScript, and modern backend technologies.
              </p>

              {/* <p>
                Professionally, I’ve worked on developing production-ready
                features across the full stack, improving application
                performance through architectural optimizations such as lazy
                loading, caching strategies, and efficient API design. I enjoy
                solving problems that sit at the intersection of product
                experience and engineering scalability — ensuring systems remain
                fast, maintainable, and resilient as they grow.
              </p>

              <p>
                Alongside professional experience, I actively build AI-driven
                applications that solve real-world problems. Projects like
                PashuCare focus on conversational AI and medical report
                analysis, while developer tools such as AI-assisted code
                completion explore practical integrations of AI into everyday
                workflows.
              </p> */}
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-10 pt-4 lg:grid-cols-3">
              {[
                { value: "02+", label: "Years of Experience" },
                { value: "10+", label: "Projects worked" },
                { value: "03+", label: "Companies / Products Built" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  className="space-y-1"
                >
                  <div className="text-4xl font-semibold tracking-tight text-[#d0ff71]">
                    {item.value}
                  </div>
                  <p className="text-muted-foreground text-sm">{item.label}</p>
                </motion.div>
              ))}
            </div>

            {/* CONTACT */}
            <div className="flex flex-col gap-4 pt-6 text-sm md:flex-row md:gap-12">
              <div>
                <p className="font-medium">Contact</p>
                <p className="text-muted-foreground">+91 9359301387</p>
              </div>

              <div>
                <p className="font-medium">Email</p>
                <p className="text-muted-foreground">
                  meshramvikas108@gmail.com
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="flex justify-center md:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative aspect-[4/5] w-full max-w-[260px] overflow-hidden rounded-[160px] border-4 border-[#d0ff71] sm:max-w-[300px] md:max-w-[340px]"
            >
              <Image
                src="/pics/me-hero.jpg"
                alt="Vikas Meshram"
                fill
                sizes="(max-width: 768px) 70vw, 340px"
                className="object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
