import { Modal } from 'components/Modal/ModalSkillsAdd';
import { useState } from 'react';
import {
  Btn,
  SkillsItem,
  SkillsList,
  SkillsSection,
  SkillsText,
  SkillsTitle,
  SkillsTitleWrap,
} from './Skills.styled';

export const Skills = ({ skills, title, skillCleaner }) => {
  const [isModalOpen, setiIsModalOpen] = useState(false);
  const openModal = () => {
    setiIsModalOpen(true);
  };
  const closeModal = () => {
    setiIsModalOpen(false);
  };
  return (
    <SkillsSection>
      <SkillsTitleWrap>
        <SkillsTitle>{title}</SkillsTitle>
        <Btn onClick={openModal}>+</Btn>
        {isModalOpen && <Modal onClose={closeModal} />}
      </SkillsTitleWrap>
      <SkillsList>
        {skills.map(({ id, skill }) => {
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
