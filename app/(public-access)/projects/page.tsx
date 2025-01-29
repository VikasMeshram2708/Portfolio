"use client";

import { NextPage } from "next";
import React from "react";
import { motion } from "motion/react";
import { projectData } from "@/data";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ProjectsPage: NextPage = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="container mx-auto p-5 mt-10">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-center dark:text-primary py-5">
          Personal Projects
        </h1>
        <motion.ul
          className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {projectData.map((item) => (
            <motion.li
              key={item.github_url}
              className="relative hover:shadow-primary overflow-hidden rounded-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <Link href={`/projects/${item.id}`}>
                  <CardHeader>
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <CardTitle className="line-clamp-1 dark:text-primary">
                        {item.title}
                      </CardTitle>
                    </motion.div>
                    <CardDescription className="line-clamp-3 text-base leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                </Link>
                <CardFooter>
                  <Button variant="outline">
                    <Link href={`/projects/${item.id}`}>View More</Link>
                    <ArrowRight />
                  </Button>
                </CardFooter>
              </Card>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default ProjectsPage;
