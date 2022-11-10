import { Modal } from 'components/Modal/ModalSkillsAdd';
import { useState } from 'react';

import { SideBarTitle } from '../SideBar/SideBar.styled';
import {
  Btn,
  SkillsItem,
  SkillsList,
  SkillsSection,
  SkillsText,
  SkillsTitleWrap,
} from './Skills.styled';

export const Skills = ({ title, skills }) => {
  const [isModalOpen, setiIsModalOpen] = useState(false);
  const [skillsList, setskillsList] = useState(skills);

  const openModal = () => {
    setiIsModalOpen(true);
  };
  const closeModal = () => {
    setiIsModalOpen(false);
  };

  // const skillAdder = id => {
  //   this.setState(prevState => ({}));
  // };

  const skillCleaner = id => {
    console.log(skills);
    console.log(id);
    setskillsList(skillsList.filter(skill => skill.id !== id));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // setNewSkill(e.currentTarget.newSkill.value);

    setskillsList([
      ...skillsList,
      {
        id: e.currentTarget.newSkill.value,
        skill: e.currentTarget.newSkill.value,
      },
    ]);
    console.log(skillsList);
    e.currentTarget.reset();
  };

  // useEffect(() => {
  //   handleSubmit();
  // }, [handleSubmit]);

  return (
    <SkillsSection>
      <SkillsTitleWrap>
        <SideBarTitle>{title}</SideBarTitle>
        <Btn onClick={openModal}>+</Btn>
        {isModalOpen && (
          <Modal
            handleSubmit={handleSubmit}
            skillsxxx={{ SkillsList }}
            onClose={closeModal}
          />
        )}
      </SkillsTitleWrap>
      <SkillsList>
        {skillsList.map(({ id, skill }) => {
          return (
            <SkillsItem key={id}>
              <SkillsText>{skill}</SkillsText>
              <Btn onClick={() => skillCleaner(id)}>-</Btn>
            </SkillsItem>
          );
        })}
      </SkillsList>
    </SkillsSection>
  );
};
