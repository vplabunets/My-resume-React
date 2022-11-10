import React from 'react';
import aboutme from '../../data/aboutme.json';
import {
  AboutMeProfessionTitle,
  AboutMeWrap,
  AboutMeText,
  AboutMeTitle,
} from './AboutMeSection.styled';

const AboutMeSection = () => {
  const { requestedPosition, name, aboutCandidateText } = aboutme;
  return (
    <AboutMeWrap>
      <AboutMeProfessionTitle>{requestedPosition}</AboutMeProfessionTitle>
      <AboutMeTitle>{name}</AboutMeTitle>
      <AboutMeProfessionTitle>About Me</AboutMeProfessionTitle>
      <AboutMeText>{aboutCandidateText}</AboutMeText>
    </AboutMeWrap>
  );
};

export default AboutMeSection;
