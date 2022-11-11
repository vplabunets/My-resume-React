import React from 'react';
import { CgClose } from 'react-icons/cg';
import { Btn } from 'components/SideBarSection/Skills/Skills.styled';

const AddSkillForm = ({ onClose, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Btn onClick={onClose}>
        <CgClose width={10} height={10} />
      </Btn>
      <input name="newSkill" type="text"></input>
      <button type="submit">Add Skill</button>
    </form>
  );
};

export default AddSkillForm;
