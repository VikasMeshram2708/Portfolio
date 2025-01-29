import { projectData } from "@/data";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ProjectCard from "@/components/projects/project-card";

type ProjectDetailsProps = {
  params: Promise<{ id: string }>;
};
const ProjectDetails = async ({ params }: ProjectDetailsProps) => {
  const { id } = await params;

  const data = projectData.filter((item) => {
    console.log("cid", id);
    const filteredItem = item.id === id;
    console.log("filt", filteredItem);
    return filteredItem;
  });

  return (
    <div className="min-h-screen w-full">
      <div className="container mx-auto px-6 py-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{data[0]?.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Project Card */}
        <ProjectCard data={data} />
      </div>
    </div>
  );
};

export default ProjectDetails;
