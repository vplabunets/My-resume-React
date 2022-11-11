import styled from 'styled-components';

/* CSS */
export const Btn = styled.button`
  margin-left: 5px;
  vertical-align: center;
  appearance: none;
  background-color: #fff;
  border-radius: 24px;
  border-style: none;
  box-shadow: rgba(0, 0, 0, 0.2) 0 3px 5px -1px,
    rgba(0, 0, 0, 0.14) 0 6px 10px 0, rgba(0, 0, 0, 0.12) 0 1px 18px 0;
  box-sizing: border-box;
  color: #3c4043;
  cursor: pointer;
  display: inline-flex;
  fill: currentcolor;
  font-family: 'Google Sans', Roboto, Arial, sans-serif;
  font-size: 20px;
  font-weight: 500;
  height: 15px;
  width: 15px;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.25px;
  line-height: normal;
  max-width: 100%;
  overflow: visible;
  padding: 4px;
  position: relative;
  text-align: center;
  text-transform: none;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 15ms linear 30ms, transform 270ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  will-change: transform, opacity;
  z-index: 0;

  &:hover {
    background: #f6f9fe;
    color: #174ea6;
  }
`;

export const SkillsSection = styled.div`
  margin: 20px 0 0 40px;
`;
export const SkillsTitleWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

export const SkillsList = styled.ul`
  padding: 0 0 0 17px;
  list-style: none;
`;
export const SkillsItem = styled.li`
  color: #fb6d3a;
  display: flex;
  align-items: center;
`;

export const SkillsText = styled.p`
  margin: 0;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  margin-right: 10px;
`;
