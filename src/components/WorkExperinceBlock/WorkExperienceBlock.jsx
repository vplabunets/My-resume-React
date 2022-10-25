export const WorkExperienceBlock = ({ compan }) => {
  const { position, company, workperiod, location, duties } = compan.user;
  console.log(duties);
  return (
    <div className="my_work_experience_company_block">
      <h4 className="my_work_experience_position">
        {position} <span className="my_work_experience_company">{company}</span>
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
        {/* <li className="my_work_experience_duty">}
        Negotiation with suppliers /Key Customers
      </li>
      <li className="my_work_experience_duty">Sales/Purchases analysys</li>
      <li className="my_work_experience_duty">Working with claims</li> */}
      </ul>
    </div>
  );
};
