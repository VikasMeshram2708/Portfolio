"use client";

import { projectsData } from "@/app/projects/page";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "lucide-react";
import { motion } from "motion/react";
import Container from "../Container";

export default function Projects() {
  return (
    <Container className="space-y-6 p-4">
      <h1 className="text-2xl font-medium tracking-tight md:text-3xl lg:text-4xl">
        Featured Projects
      </h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projectsData.map((data, idx) => (
          <motion.div
            key={`card-${idx}`}
            whileHover="hover"
            initial="rest"
            animate="rest"
          >
            <Card className="border-none bg-transparent p-0 shadow-none">
              <CardContent className="overflow-hidden rounded-lg p-0">
                <motion.div
                  variants={{
                    rest: { scale: 1 },
                    hover: { scale: 1.03 },
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <Image
                    src={data.thumbnailUrl}
                    alt={data.title}
                    width={500}
                    height={500}
                    className="rounded object-cover"
                    priority
                  />
                </motion.div>
              </CardContent>

              <CardHeader className="space-y-1 p-0 pt-3">
                <CardTitle className="text-base leading-tight md:text-lg">
                  {data.title}
                </CardTitle>

                <CardDescription>Web app</CardDescription>

                <CardAction>
                  <Button type="button" variant="link">
                    <motion.span
                      variants={{
                        rest: { rotate: 0, x: 0 },
                        hover: { rotate: -45, x: 4 },
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      className="inline-flex"
                    >
                      <ArrowRightIcon className="size-6" />
                    </motion.span>
                  </Button>
                </CardAction>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}
