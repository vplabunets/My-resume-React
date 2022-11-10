import AddSkillForm from 'components/SideBarSection/AddSkillForm/AddSkillForm';
import { Btn } from 'components/SideBarSection/Skills/Skills.styled';
import { useEffect } from 'react';
import { ModalWindow, Overlay } from './ModalSkillsAdd.styled';

export const Modal = ({ onClose, skillsxxx, handleSubmit }) => {
  useEffect(() => {
    const xxx = e => {
      console.log(e);
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', xxx);
    return () => {
      window.removeEventListener('keydown', xxx);
    };
  }, [onClose]);

  return (
    <Overlay
      onClick={event => {
        if (event.currentTarget === event.target) {
          onClose();
        }
      }}
    >
      {/* onClick={e => e.stopPropagation()} */}
      <ModalWindow>
        <AddSkillForm
          handleSubmit={handleSubmit}
          skillsxxx={skillsxxx}
          onClose={onClose}
        />
      </ModalWindow>
    </Overlay>
  );
};
