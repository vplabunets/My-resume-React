import React from 'react';
import workexperience from '../../data/workexperience.json';
import { WorkExperienceItem } from 'components/WorkExperinceItem/WorkExperienceItem';
import { Section } from 'components/ui.styled';
import { WorkExperienceTitle } from './WorkExperienceBlock.styled';

const WorkExperienceBlock = () => {
  return (
    <Section>
      <WorkExperienceTitle className="main_content_title">
        Professional Experience
      </WorkExperienceTitle>
      {workexperience.map((work, index) => {
        return <WorkExperienceItem key={index} workPlace={work} />;
      })}
    </Section>
  );
};

export default WorkExperienceBlock;
