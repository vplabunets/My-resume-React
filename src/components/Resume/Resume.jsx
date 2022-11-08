import { Component } from 'react';

import sskills from '/Projects/My-resume-React/src/data/sskills.json';
import hskills from '/Projects/My-resume-React/src/data/hskills.json';
import contacts from '/Projects/My-resume-React/src/data/contacts.json';
import workexperience from '/Projects/My-resume-React/src/data/workexperience.json';

import { EducationSection } from 'components/EducationSection/EducationSection';
import WorkExperienceBlock from 'components/WorkExperienceBlock/WorkExperienceBlock';
import SideBarSection from 'SideBar/SideBar';
import MyProjectsSection from 'components/MyProjectsSection/MyProjectsSection';
import AboutMeSection from 'components/AboutMeSection/AboutMeSection';

import { MainContainer, MainContent } from './Resume.styled';

export class Resume extends Component {
  state = { sskills: sskills, hskills: hskills };

  skillAdder = id => {
    this.setState(prevState => ({}));
  };

  skillCleaner = id => {
    this.setState(prevState => ({
      sskills: prevState.sskills.filter(skill => skill.id !== id),
      hskills: prevState.hskills.filter(skill => skill.id !== id),
    }));
  };
  render() {
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
          <SideBarSection
            skillCleaner={this.skillCleaner}
            contacts={contacts}
            hskills={this.state.hskills}
            sskills={this.state.sskills}
          />
        </MainContainer>
      </>
    );
  }
}
