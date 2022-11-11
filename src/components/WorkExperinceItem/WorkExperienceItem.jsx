import {
  WorkExperienceCompanyBlock,
  WorkExperiencePosition,
  WorkExperienceCompany,
  WorkExperiencePeriod,
  WorkExperienceDevider,
  WorkExperienceDuties,
  WorkExperienceDuty,
} from './WorkExperienceItem.styled';

export const WorkExperienceItem = ({ workPlace }) => {
  const { position, company, workperiod, location, duties } = workPlace.user;
  return (
    <WorkExperienceCompanyBlock>
      <WorkExperiencePosition>
        {position}
        <WorkExperienceCompany>{company}</WorkExperienceCompany>
      </WorkExperiencePosition>
      <WorkExperiencePeriod>
        {workperiod}
        <WorkExperienceDevider>|</WorkExperienceDevider>
        {location}
      </WorkExperiencePeriod>
      <WorkExperienceDuties>
        {duties.map((dutie, index) => {
          return <WorkExperienceDuty key={index}>{dutie}</WorkExperienceDuty>;
        })}
      </WorkExperienceDuties>
    </WorkExperienceCompanyBlock>
  );
};
