import React from 'react';
import {
  EducationPlaceName,
  EducationSpeciality,
  EducationPeriod,
  EducationDevider,
} from './EducationItem.styled';

const EducationItem = ({
  educationalInstitution,
  speciality,
  educationPeriod,
  location,
}) => {
  return (
    <div>
      <EducationPlaceName>{educationalInstitution}</EducationPlaceName>
      <EducationSpeciality>{speciality}</EducationSpeciality>
      <EducationPeriod>
        {educationPeriod}
        <EducationDevider> | </EducationDevider>
        {location}
      </EducationPeriod>
    </div>
  );
};

export default EducationItem;
