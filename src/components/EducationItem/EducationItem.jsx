import React from 'react';

const EducationItem = ({
  educationalInstitution,
  speciality,
  educationPeriod,
  location,
}) => {
  return (
    <div>
      <h4 className="my_education_place_name">{educationalInstitution}t</h4>
      <h4 className="my_education_speciality">{speciality}</h4>
      <p className="my_education_period">
        {educationPeriod}
        <span className="my_education_time_devider">|</span>
        {location}
      </p>
    </div>
  );
};

export default EducationItem;
