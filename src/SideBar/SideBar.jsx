import { Contacts } from 'components/Contacts/Contacts';
import { Skills } from 'components/SoftSkills/Skills';
import React from 'react';
import { SideBar } from './SideBar.styled';

const SideBarSection = ({ contacts, sskills, hskills, skillCleaner }) => {
  return (
    <div>
      <SideBar>
        <Contacts contacts={contacts[0]} />
        {/* <!--Tech skills section--> */}
        <Skills
          skills={hskills}
          title={'Hard Skills'}
          skillCleaner={skillCleaner}
        />
        {/* <!--Soft skills section--> */}
        <Skills skills={sskills} title={'Soft Skills'} skillCleaner={sskills} />
      </SideBar>
    </div>
  );
};

export default SideBarSection;
