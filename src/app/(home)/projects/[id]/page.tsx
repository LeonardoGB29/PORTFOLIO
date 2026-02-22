import { Metadata } from "next";
import { notFound } from "next/navigation";

import ProjectDetails from "@/src/components/project-details";
import { PROJECTS, getProjectBySlug } from "@/src/lib/data";

type Props = {
  params: Promise<{ id: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.slug
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectBySlug(id);

  if (!project) {
    return {
      title: "Project Not Found"
    };
  }

  return {
    title: project.name,
    description: project.description
  };
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const project = getProjectBySlug(id);

  if (!project) {
    return notFound();
  }

  return <ProjectDetails project={project} />;
}
