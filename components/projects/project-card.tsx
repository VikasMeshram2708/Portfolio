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

type ProjectCardProps = {
  data: Project[];
};

export default function ProjectCard({ data }: ProjectCardProps) {
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
              {data[0]?.title}
            </motion.h1>
          </CardTitle>
          <CardDescription className="text-base leading-relaxed">
            {data[0]?.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex items-center gap-2 justify-between">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button variant={"outline"} asChild>
              <a href={data[0]?.github_url} target="_blank">
                <Github />
                Github
              </a>
            </Button>
          </motion.div>
          {data[0]?.demo_url && (
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button className="rounded-full" asChild>
                <a href={data[0]?.demo_url} target="_blank">
                  <View />
                  Demo
                </a>
              </Button>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
