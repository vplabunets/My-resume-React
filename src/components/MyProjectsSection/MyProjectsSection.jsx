import { Section } from 'components/ui.styled';
import React from 'react';
import projects from '../../data/projects.json';
import {
  ProjectsBrackets,
  ProjectsLink,
  ProjectsItem,
  ProjectsText,
  ProjectsList,
  ProjectsTitle,
} from './MyProjectsSection.styled';
const MyProjectsSection = () => {
  return (
    <Section>
      <ProjectsTitle>Projects</ProjectsTitle>
      <ProjectsList>
        {projects.map((project, index) => {
          return (
            <ProjectsItem key={index}>
              <div>
                <div>
                  <ProjectsLink href={project.projectLink}>
                    {project.projectName}
                  </ProjectsLink>
                  <ProjectsText>
                    <ProjectsBrackets>[</ProjectsBrackets>
                    {project.technologies.join(', ')}
                    <ProjectsBrackets>]</ProjectsBrackets>
                  </ProjectsText>
                </div>
                <ProjectsText>{project.projectDescription} </ProjectsText>
              </div>
            </ProjectsItem>
          );
        })}
      </ProjectsList>
    </Section>
  );
};

export default MyProjectsSection;
