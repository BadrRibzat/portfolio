import { Github, Link as LinkIcon, Server } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Project } from '@/types/project';
import Image from 'next/image';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="hover:shadow-lg transition-shadow h-full flex flex-col bg-card text-card-foreground">
      <div className="relative h-48 overflow-hidden rounded-t-lg">
        <Image
          src={project.image}
          alt={project.title}
          width={320}
          height={320}
          className="w-full h-full object-cover rounded-t-lg"
          style={{ aspectRatio: '1 / 1' }}
        />
      </div>
      <CardHeader>
        <h3 className="text-xl font-bold">{project.title}</h3>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground dark:text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag: string) => (
            <Badge
              key={tag}
              className="bg-secondary text-secondary-foreground dark:bg-gray-700 dark:text-gray-200"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="gap-3">
        {project.links.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-primary dark:text-primary-dark hover:underline"
          >
            <LinkIcon className="h-4 w-4 mr-1" />
            Live Demo
          </a>
        )}
        {project.links.backend && (
          <a
            href={project.links.backend}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-muted-foreground dark:text-gray-300 hover:underline"
          >
            <Server className="h-4 w-4 mr-1" />
            API
          </a>
        )}
        <a
          href={project.links.code}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-medium text-muted-foreground dark:text-gray-300 hover:underline"
        >
          <Github className="h-4 w-4 mr-1" />
          Code
        </a>
      </CardFooter>
    </Card>
  );
}
