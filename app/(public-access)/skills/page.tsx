"use client";

import { motion } from "motion/react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { skills } from "@/data";
import { Star } from "lucide-react";
import { NextPage } from "next";
import React from "react";

const SkillsPage: NextPage = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="container mx-auto p-5">
        <h1 className="dark:text-primary my-10 text-center text-xl md:text-2xl lg:text-4xl font-bold">
          My Tech Stack
        </h1>
        <ul className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-10">
          {skills.map((skill) => {
            const fullStars = Math.floor(skill.rating);
            const hasHalfStar = skill.rating % 1 !== 0;

            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                // className="rounded-lg shadow-lg"
              >
                <Card className="p-6 cursor-pointer transition-transform ease-in-out transform hover:scale-105">
                  <CardHeader>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <CardTitle className="dark:text-primary">
                        {skill.title}
                      </CardTitle>
                    </motion.div>
                  </CardHeader>
                  <CardContent>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                      className="text-sm text-muted-foreground"
                    >
                      {skill.description}
                    </motion.p>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    {Array.from({ length: 10 }).map((_, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.3 }}
                        transition={{
                          duration: 0.2,
                          ease: "easeOut",
                        }}
                        className="relative"
                      >
                        {idx < fullStars ? (
                          <Star className="w-7 h-7 fill-current text-yellow-500" />
                        ) : idx === fullStars && hasHalfStar ? (
                          <div className="relative w-7 h-7">
                            <Star className="absolute w-7 h-7 fill-current text-yellow-500 opacity-50" />
                            <div className="absolute top-0 left-0 w-3.5 h-full bg-yellow-500" />
                          </div>
                        ) : (
                          <Star className="w-7 h-7 stroke-current text-gray-300" />
                        )}
                      </motion.div>
                    ))}
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SkillsPage;
