import React from "react";
import { projectData } from "@/data";
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

  const data = projectData.find((item) => item.id === id);

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
              <BreadcrumbPage>{data?.title ?? "Project"}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

        {/* Project Card */}
        {data && <ProjectCard data={data} />}
      </div>
    </div>
  );
};

export default ProjectDetails;
