export const Skills = ({ skills, className, title, skillCleaner }) => {
  // console.log(skills);
  return (
    <div className="soft_skills_section">
      <h3 className="sidebar_title">{title}</h3>
      <span>
        <button>+</button>
      </span>
      <ul className="soft_skills_list">
        {skills.map(({ id, skill }) => {
          return (
            <li key={id} className={className}>
              <span className="soft_skills_item_text">{skill}</span>
              <span>
                <button onClick={() => skillCleaner(id)}>-</button>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
