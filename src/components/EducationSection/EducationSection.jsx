import EducationItem from 'components/EducationItem/EducationItem';
import { EducationSectionTitle } from './EducationSection.styled';
import education from '../../data/education.json';
import { Section } from 'components/ui.styled';

export const EducationSection = () => {
  return (
    <Section>
      <EducationSectionTitle>Education Background</EducationSectionTitle>
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
    </Section>
  );
};
