import EducationItem from 'components/EducationItem/EducationItem';
import { EducationSectionWrap } from './EducationSection.styled';
import education from '/Projects/My-resume-React/src/data/education.json';

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

      {/* <div>
        <h4 className="my_education_place_name">IT School Goit</h4>
        <h4 className="my_education_speciality">Full Stack Developer</h4>
        <p className="my_education_period">
          March 2021 - February 2022{' '}
          <span className="my_education_time_devider">|</span>Ukraine
        </p>

        <h4 className="my_education_place_name">
          Odessa National Academy of Food Technology
        </h4>
        <h4 className="my_education_speciality">
          Master of Production Process Automation
        </h4>
        <p className="my_education_period">
          September 2001 - June 2006{' '}
          <span className="my_education_time_devider">|</span>Ukraine
        </p>

        <h4 className="my_education_place_name">
          Odessa National Academy of Food Technology
        </h4>
        <h4 className="my_education_speciality">Operation Management</h4>
        <p className="my_education_period">
          September 2005 - June 2007{' '}
          <span className="my_education_time_devider">|</span> Ukraine
        </p>
      </div> */}
    </EducationSectionWrap>
  );
};
