import workexperience from '/Projects/My-resume-React/src/data/workexperience.json';
import { EducationSection } from 'components/EducationSection/EducationSection';
import WorkExperienceBlock from 'components/WorkExperienceBlock/WorkExperienceBlock';
import SideBarSection from 'components/SideBarSection/SideBar/SideBar';
import MyProjectsSection from 'components/MyProjectsSection/MyProjectsSection';
import AboutMeSection from 'components/AboutMeSection/AboutMeSection';

import { MainContainer, MainContent } from './Resume.styled';

export const Resume = () => {
  return (
    <>
      {/* <!--Main conatiner--> */}
      <MainContainer>
        {/* <!--Main content section--> */}
        <MainContent>
          {/* <!--About me container section--> */}
          <AboutMeSection />
          {/* <!--My projects section--><a> </a> */}
          <MyProjectsSection />
          {/* <!--My work experience section--> */}
          <WorkExperienceBlock workexperience={workexperience} />
          {/* <!--Education section--> */}
          <EducationSection />
        </MainContent>
        {/* <!--Sidebar section--> */}
        <SideBarSection />
      </MainContainer>
    </>
  );
};
