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
        <h1 className="dark:text-primary my-10 text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
          My Tech Stack
        </h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
          {skills.map((skill) => {
            const fullStars = Math.floor(skill.rating);
            const hasHalfStar = skill.rating % 1 !== 0;

            return (
              <motion.li
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex flex-col items-center text-center"
              >
                <Card className="p-5 w-full flex flex-col items-center shadow-md rounded-lg transform transition-transform hover:scale-105 h-full">
                  <CardHeader>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <CardTitle className="dark:text-primary text-lg font-semibold">
                        {skill.title}
                      </CardTitle>
                    </motion.div>
                  </CardHeader>
                  <CardContent className="text-center flex-grow">
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                      className="text-sm text-muted-foreground"
                    >
                      {skill.description}
                    </motion.p>
                  </CardContent>
                  <CardFooter className="flex gap-1 justify-center flex-wrap mt-3">
                    {Array.from({ length: 10 }).map((_, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.1 }}
                        transition={{
                          duration: 0.2,
                          ease: "easeOut",
                        }}
                        className="w-5 h-5"
                      >
                        {idx < fullStars ? (
                          <Star className="w-5 h-5 fill-current text-yellow-500" />
                        ) : idx === fullStars && hasHalfStar ? (
                          <div className="relative w-5 h-5">
                            <Star className="absolute w-5 h-5 fill-current text-yellow-500 opacity-50" />
                            <div className="absolute top-0 left-0 w-2.5 h-full bg-yellow-500" />
                          </div>
                        ) : (
                          <Star className="w-5 h-5 stroke-current text-gray-300" />
                        )}
                      </motion.div>
                    ))}
                  </CardFooter>
                </Card>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SkillsPage;
