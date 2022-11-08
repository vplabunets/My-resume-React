import React from 'react';
import {
  AboutMeProfessionTitle,
  AboutMeWrap,
  AboutMeText,
  AboutMeTitle,
} from './AboutMeSection.styled';

const AboutMeSection = () => {
  return (
    <div>
      {' '}
      <AboutMeWrap>
        <AboutMeProfessionTitle>Front-End Developer</AboutMeProfessionTitle>
        <AboutMeTitle>Volodymyr Labunets</AboutMeTitle>
        <AboutMeProfessionTitle>About Me</AboutMeProfessionTitle>
        <AboutMeText>
          Hard-working and detail-oriented Frontend developer seeking an
          entry-level position to apply my skills in coding, projects developing
          for company's and my profit.
        </AboutMeText>
      </AboutMeWrap>
    </div>
  );
};

export default AboutMeSection;
