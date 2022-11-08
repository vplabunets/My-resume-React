import { Btn } from 'components/SoftSkills/Skills.styled';
import React from 'react';
import { useState } from 'react';

const AddSkillForm = ({ onClick, onClose }) => {
  const [newSkill, setNewSkill] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.currentTarget.newSkill.value);
    setNewSkill(e.currentTarget.newSkill.value);
    e.currentTarget.reset();
  };
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
