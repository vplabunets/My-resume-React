import contacts from '../../../data/contacts.json';
import sskills from '../../../data/sskills.json';
import hskills from '../../../data/hskills.json';
import { Contacts } from 'components/SideBarSection/Contacts/Contacts';
import { Skills } from 'components/SideBarSection/Skills/Skills';
import React from 'react';
import { SideBar } from './SideBar.styled';

const SideBarSection = () => {
  return (
    <div>
      <SideBar>
        <Contacts contacts={contacts[0]} />
        {/* <!--Tech skills section--> */}
        <Skills skills={hskills} title={'Hard Skills'} />
        {/* <!--Soft skills section--> */}
        <Skills skills={sskills} title={'Soft Skills'} />
      </SideBar>
    </div>
  );
};

export default SideBarSection;
