import EducationItem from 'components/EducationItem/EducationItem';
import { EducationSectionWrap } from './EducationSection.styled';
import education from '../../data/education.json';

export const EducationSection = () => {
  return (
    <EducationSectionWrap className="my_education_section">
      <h3 className="main_content_title">Education Background</h3>
      {education.map(
        ({
          id,
          educationalInstitution,
          speciality,
          educationPeriod,
          location,
        }) => {
          return (
            <EducationItem
              key={id}
              educationalInstitution={educationalInstitution}
              speciality={speciality}
              educationPeriod={educationPeriod}
              location={location}
            />
          );
        }
      )}
    </EducationSectionWrap>
  );
};
