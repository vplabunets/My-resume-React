import React from 'react';
import projects from '../../data/projects.json';
import {
  ProjectsSection,
  ProjectsBrackets,
  ProjectsLink,
  ProjectsItem,
  ProjectsText,
  ProjectsList,
} from './MyProjectsSection.styled';
const MyProjectsSection = () => {
  return (
    <div>
      <ProjectsSection>
        <h3 className="main_content_title">Projects</h3>
        <ProjectsList>
          {projects.map((project, index) => {
            return (
              <ProjectsItem key={index}>
                <ProjectsText>
                  <ProjectsLink
                    href={project.projectLink}
                    className="my_projects_link"
                  >
                    {project.projectLink}
                  </ProjectsLink>
                  {project.projectDescription}
                  <ProjectsBrackets>[</ProjectsBrackets>
                  {project.technologies}
                  <ProjectsBrackets>]</ProjectsBrackets>
                </ProjectsText>
              </ProjectsItem>
            );
          })}
        </ProjectsList>
      </ProjectsSection>
    </div>
  );
};

export default MyProjectsSection;
