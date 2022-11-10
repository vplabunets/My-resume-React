import React from 'react';
import { useState } from 'react';
import { Btn } from 'components/SideBarSection/Skills/Skills.styled';

const AddSkillForm = ({ onClick, onClose, skillsxxx, handleSubmit }) => {
  // console.log(hskills);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Btn onClick={onClose}>X </Btn>
        <input name="newSkill" type="text"></input>
        <button type="submit">Add Skill</button>
      </form>
    </div>
  );
};

export default AddSkillForm;
