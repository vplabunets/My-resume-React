import React from 'react';
import {
  EducationPlaceName,
  EducationSpeciality,
  EducationPeriod,
  EducationTime,
} from './EducationItem.styled';

const EducationItem = ({
  educationalInstitution,
  speciality,
  educationPeriod,
  location,
}) => {
  return (
    <div>
      <EducationPlaceName>{educationalInstitution}t</EducationPlaceName>
      <EducationSpeciality>{speciality}</EducationSpeciality>
      <EducationPeriod>
        {educationPeriod}
        <EducationTime>|</EducationTime>
        {location}
      </EducationPeriod>
    </div>
  );
};

export default EducationItem;
