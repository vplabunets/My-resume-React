import { Skills } from 'components/SoftSkills/Skills';
import { HardSkillsSection } from './HardSkillsSection.styled';
import sskills from '/Projects/My-resume-React/src/data/data/sskills.json';

export const Hardskills = ({ softskills }) => {
  return (
    <HardSkillsSection className="soft_skills_section">
      <h3 className="sidebar_title">Soft Skills</h3>
      <Skills skills={sskills} className={'soft_skills_item'} />
    </HardSkillsSection>
  );
};
