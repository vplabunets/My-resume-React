export const WorkExperienceItem = ({ compan }) => {
  const { position, company, workperiod, location, duties } = compan.user;
  return (
    <div className="my_work_experience_company_block">
      <h4 className="my_work_experience_position">
        {position}{' '}
        <span className="my_work_experience_company">
          {' '}
          <br /> {company}
        </span>
      </h4>
      <p className="my_work_experience_period">
        {workperiod} <span className="my_work_experience_devider">|</span>{' '}
        {location}
      </p>
      <ul className="my_work_experience_duties">
        {duties.map((dutie, index) => {
          return (
            <li key={index} className="my_work_experience_duty">
              {dutie}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
