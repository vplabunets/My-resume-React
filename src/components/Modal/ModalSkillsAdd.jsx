import AddSkillForm from 'components/AddSkillForm/AddSkillForm';
import { Btn } from 'components/SoftSkills/Skills.styled';
import { useEffect } from 'react';
import { ModalWindow, Overlay } from './ModalSkillsAdd.styled';

// $(document).keyup(function (e) {
//   if (e.keyCode == 27) {
//     // escape key maps to keycode `27`
//     // <DO YOUR WORK HERE>
//   }
// });

export const Modal = ({ onClose }) => {
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
        <AddSkillForm onClose={onClose} />
      </ModalWindow>
    </Overlay>
  );
};
