"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "motion/react";
import { Github, View } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

type ProjectCardProps = {
  data: Project;
};

export default function ProjectCard({ data }: ProjectCardProps) {
  // console.log("g", data.github_url);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="my-10 max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-center text-xl md:text-2xl lg:text-4xl font-bold dark:text-primary">
            <motion.h1
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {data.title}
            </motion.h1>
          </CardTitle>
          <CardDescription className="text-base leading-relaxed">
            {data.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex items-center gap-2 justify-between">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button variant={"outline"} asChild>
              <Link href={data.github_url} target="_blank">
                <Github />
                Github
              </Link>
            </Button>
          </motion.div>
          {data.demo_url && (
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button className="rounded-full" asChild>
                <Link href={data.demo_url} target="_blank">
                  <View />
                  Demo
                </Link>
              </Button>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
