import { SoftSkills } from './SoftSkills';
const softskills = [
  'Motivation',
  'Focused on result',
  'Lean',
  'Enthusiasm and optimism',
  'Negotation',
  'Adaptibility',
  'Adaptibility',
  'Analytical thinking',
  'Critical thinking',
];
export const Resume = () => {
  return (
    <>
      {/* <!--Main conatiner--> */}
      <div className="main_container">
        {/* <!--Main content section--> */}
        <div className="main_content_section">
          {/* <!--About me container section--> */}
          <div className="about_me_section">
            <h2 className="about_me_profession">Front-End Developer</h2>
            <h1 className="my_name">Volodymyr Labunets</h1>
            <h2>About Me</h2>
            <p className="about_me_description">
              Hard-working and detail-oriented Frontend developer seeking an
              entry-level position to apply my skills in coding, projects
              developing for company's and my profit.
            </p>
            {/* <!--My projects section--><a> </a> */}
          </div>
          <div className="my_projects_section">
            <h3 className="main_content_title">Projects</h3>
            <ol className="my_projects_list">
              <li className="my_projects_item">
                <span className="my_projects_text">
                  <a
                    href="https://hellenglish.goit.global/"
                    className="my_projects_link"
                  >
                    https://hellenglish.goit.global/
                  </a>
                  A website with a responsive layout. Role: Developer/ Code
                  reviewer. Developed hero section. Reveiwed team members code.
                  <span className="my_projects_brackets">[</span> HTML5, CSS3{' '}
                  <span className="my_projects_brackets">]</span>
                </span>
              </li>
              <li className="my_projects_item">
                <span className="my_projects_text">
                  <a
                    href="https://cryptohub.goit.global/"
                    className="my_projects_link"
                  >
                    https://cryptohub.goit.global/
                  </a>
                  Searching for a movie application. Role: Developer / Code
                  reviewer. Developed search menu, pagination, film gallery
                  markup. Reveiwed team members code.
                  <span className="my_projects_brackets">[</span> JavaScrip{' '}
                  <span className="my_projects_brackets">]</span>
                </span>
              </li>
              <li className="my_projects_item">
                <span className="my_projects_text">
                  <a
                    href="https://kidslike.goit.global/"
                    className="my_projects_link"
                  >
                    https://kidslike.goit.global/
                  </a>
                  ...................
                  <span className="my_projects_brackets">[</span> React.js,
                  Node.js <span className="my_projects_brackets">]</span>
                </span>
              </li>
            </ol>
          </div>
          {/* <!--My work experience section--> */}
          <div className="my_work_experience_section">
            <h3 className="main_content_title">Professional Experience</h3>
            {/* <!--Company 3--> */}
            <div className="my_work_experience_company_block">
              <h4 className="my_work_experience_position">
                Deputy Supply Chain Manager{' '}
                <span className="my_work_experience_company">
                  Groupe Atlantic
                </span>
              </h4>
              <p className="my_work_experience_period">
                May 2011 - up to now{' '}
                <span className="my_work_experience_devider">|</span> Ukraine
              </p>
              <ul className="my_work_experience_duties">
                <li className="my_work_experience_duty">
                  External and internal logistic
                </li>
                <li className="my_work_experience_duty">Purchasing</li>
                <li className="my_work_experience_duty">Production planning</li>
                <li className="my_work_experience_duty">Project Management</li>
                <li className="my_work_experience_duty">Team managment</li>
                <li className="my_work_experience_duty">Budgeting</li>
              </ul>
            </div>
            {/* <!--Company 2--> */}
            <div className="my_work_experience_company_block">
              <h4 className="my_work_experience_position">
                Sales Manager{' '}
                <span className="my_work_experience_company">
                  Hilal Aluminium Ukraine LLC
                </span>
              </h4>
              <p className="my_work_experience_period">
                August 2010 - May 2011{' '}
                <span className="my_work_experience_devider">|</span> Ukraine
              </p>
              <ul className="my_work_experience_duties">
                <li className="my_work_experience_duty">
                  Working with a large product range.
                </li>
                <li className="my_work_experience_duty">
                  Regular visits to existing suppliers.
                </li>
                <li className="my_work_experience_duty">
                  Looking for new clients.
                </li>
                <li className="my_work_experience_duty">Sales reporting.</li>
              </ul>
            </div>
            {/* <!--Company 1--> */}
            <div className="my_work_experience_company_block">
              <h4 className="my_work_experience_position">
                Key Account Manager / Supply Manager{' '}
                <span className="my_work_experience_company">PI Begemot</span>
              </h4>
              <p className="my_work_experience_period">
                2007 - August 2011{' '}
                <span className="my_work_experience_devider">|</span> Ukraine
              </p>
              <ul className="my_work_experience_duties">
                <li className="my_work_experience_duty">
                  Negotiation with suppliers /Key Customers
                </li>
                <li className="my_work_experience_duty">
                  Sales/Purchases analysys
                </li>
                <li className="my_work_experience_duty">Working with claims</li>
              </ul>
            </div>
          </div>
          {/* <!--Education section--> */}
          <div className="my_education_section">
            <h3 className="main_content_title">Education Background</h3>
            <div>
              <h4 className="my_education_place_name">IT School Goit</h4>
              <h4 className="my_education_speciality">Full Stack Developer</h4>
              <p className="my_education_period">
                March 2021 - February 2022{' '}
                <span className="my_education_time_devider">|</span>Ukraine
              </p>

              <h4 className="my_education_place_name">
                Odessa National Academy of Food Technology
              </h4>
              <h4 className="my_education_speciality">
                Master of Production Process Automation
              </h4>
              <p className="my_education_period">
                September 2001 - June 2006{' '}
                <span className="my_education_time_devider">|</span>Ukraine
              </p>

              <h4 className="my_education_place_name">
                Odessa National Academy of Food Technology
              </h4>
              <h4 className="my_education_speciality">Operation Management</h4>
              <p className="my_education_period">
                September 2005 - June 2007{' '}
                <span className="my_education_time_devider">|</span> Ukraine
              </p>
            </div>
          </div>
        </div>
        {/* <!--Sidebar section--> */}
        <aside className="sidebar_section">
          {/* <img src="" width="370" alt="my photo" /> */}
          <div className="contacts_section">
            {/* <!--Contacts section--> */}
            <h3 className="sidebar_title">Contacts</h3>
            <div>
              <span className="contacts_section_type">C:</span>
              <a className="contacts_section_link" href="tel:+380964978385">
                +380 96 497 83 85
              </a>
            </div>
            <div>
              <span className="contacts_section_type">E:</span>
              <a
                className="contacts_section_link"
                href="mailto:vplabunets@gmail.com"
              >
                vplabunets@gmail.com
              </a>
            </div>
            <div>
              <span className="contacts_section_type">M:</span>
              <a className="contacts_section_link">Odesa, Ukraine</a>
            </div>
            <div>
              <span className="contacts_section_type">E:</span>
              <a
                className="contacts_section_link"
                href="https://github.com/vplabunets"
              >
                github.com/vplabunets
              </a>
            </div>
          </div>
          {/* <!--Tech skills section--> */}
          <div className="tech_skills_section">
            <h3 className="sidebar_title">Tech Skills</h3>
            <ul className="tech_skills_list">
              <li className="tech_skills_item">
                <span className="tech_skills_item_text">HTML/CSS/SASS</span>
              </li>
              <li className="tech_skills_item">
                <span className="tech_skills_item_text">
                  Responsive/Adaptive design
                </span>
              </li>
              <li className="tech_skills_item">
                <span className="tech_skills_item_text">GIT</span>
              </li>
              <li className="tech_skills_item">
                <span className="tech_skills_item_text">React</span>
              </li>
              <li className="tech_skills_item">
                <span className="tech_skills_item_text">REST API</span>
              </li>
              <li className="tech_skills_item">
                <span className="tech_skills_item_text">Webpack Parcel</span>
              </li>
              <li className="tech_skills_item">
                <span className="tech_skills_item_text">Node.js</span>
              </li>
            </ul>
          </div>
          {/* <!--Soft skills section--> */}
          <div className="soft_skills_section">
            <h3 className="sidebar_title">Soft Skills</h3>
            <SoftSkills softskills={softskills} />
          </div>
        </aside>
      </div>
    </>
  );
};
