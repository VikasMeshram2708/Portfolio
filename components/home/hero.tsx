"use client";

import { motion } from "motion/react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import myImg from "@/public/me/me.jpg";

export default function Hero() {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-6 py-2 flex flex-col justify-center lg:flex-row items-center gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4"
        >
          <h1 className="text-5xl font-extrabold tracking-tight">
            Build Smarter,{" "}
            <span className="dark:text-primary">Scale Faster</span>
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Passionate Full-Stack Developer crafting AI-powered, scalable web
            apps with the latest technologies. Experienced in MERN stack, cloud
            deployment, and performance optimization.
          </p>
          <Button size="lg" className="rounded-lg w-64 font-semibold">
            <Link href="/projects">View Projects</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="rounded-full border-4 lg:border-primary">
            <Image
              src={myImg}
              alt="Vikas Meshram Portfolio"
              className="bg-cover lg:rounded-full"
              placeholder="blur"
              width={350}
              height={350}
              priority
            />
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
