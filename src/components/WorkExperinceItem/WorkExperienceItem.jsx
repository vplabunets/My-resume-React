import {
  WorkExperienceCompanyBlock,
  WorkExperiencePosition,
  WorkExperienceCompany,
  WorkExperiencePeriod,
  WorkExperienceDevider,
  WorkExperienceDuties,
  WorkExperienceDuty,
} from './WorkExperienceItem.styled';

export const WorkExperienceItem = ({ compan }) => {
  const { position, company, workperiod, location, duties } = compan.user;
  return (
    <WorkExperienceCompanyBlock className="my_work_experience_company_block">
      <WorkExperiencePosition className="my_work_experience_position">
        {position}{' '}
        <WorkExperienceCompany className="my_work_experience_company">
          {' '}
          <br /> {company}
        </WorkExperienceCompany>
      </WorkExperiencePosition>
      <WorkExperiencePeriod className="my_work_experience_period">
        {workperiod}{' '}
        <WorkExperienceDevider className="my_work_experience_devider">
          |
        </WorkExperienceDevider>{' '}
        {location}
      </WorkExperiencePeriod>
      <WorkExperienceDuties className="my_work_experience_duties">
        {duties.map((dutie, index) => {
          return (
            <WorkExperienceDuty key={index} className="my_work_experience_duty">
              {dutie}
            </WorkExperienceDuty>
          );
        })}
      </WorkExperienceDuties>
    </WorkExperienceCompanyBlock>
  );
};
