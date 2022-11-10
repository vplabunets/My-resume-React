import { WorkExperienceItem } from 'components/WorkExperinceItem/WorkExperienceItem';
import React from 'react';
import workexperience from '../../data/workexperience.json';

const WorkExperienceBlock = () => {
  return (
    <div className="my_work_experience_section">
      <h3 className="main_content_title">Professional Experience</h3>
      {workexperience.map((work, index) => {
        // console.log(work);
        return <WorkExperienceItem key={index} compan={work} />;
      })}
    </div>
  );
};

export default WorkExperienceBlock;
