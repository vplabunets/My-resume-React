export const Skills = ({ skills, className }) => {
  return (
    <ul className="soft_skills_list">
      {skills.map(({ id, skill }) => {
        return (
          <li key={id} className={className}>
            <span className="soft_skills_item_text">{skill}</span>
          </li>
        );
      })}
    </ul>
  );
};
