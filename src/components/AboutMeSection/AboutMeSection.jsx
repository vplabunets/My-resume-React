import React from 'react';
import aboutme from '../../data/aboutme.json';
import { Section } from 'components/ui.styled';
import {
  AboutMeProfessionTitle,
  AboutMeText,
  AboutMeTitle,
} from './AboutMeSection.styled';

const AboutMeSection = () => {
  const { requestedPosition, name, aboutCandidateText } = aboutme;
  return (
    <Section>
      <AboutMeProfessionTitle>{requestedPosition}</AboutMeProfessionTitle>
      <AboutMeTitle>{name}</AboutMeTitle>
      <AboutMeProfessionTitle>About Me</AboutMeProfessionTitle>
      <AboutMeText>{aboutCandidateText}</AboutMeText>
    </Section>
  );
};

export default AboutMeSection;
