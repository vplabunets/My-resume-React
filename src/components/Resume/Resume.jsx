import { Skills } from '../SoftSkills/Skills';
import { Contacts } from 'components/Contacts/Contacts';
import sskills from '/Projects/My-resume-React/src/data/data/sskills.json';
import hskills from '/Projects/My-resume-React/src/data/data/hskills.json';
import contacts from '/Projects/My-resume-React/src/data/data/contacts.json';
import workexperience from '/Projects/My-resume-React/src/data/data/workexperience.json';

import { Component } from 'react';
import { EducationSection } from 'components/EducationSection/EducationSection';
import { WorkExperienceBlock } from 'components/WorkExperinceBlock/WorkExperienceBlock';

export class Resume extends Component {
  state = { sskills: sskills, hskills: hskills };

  skillAdder = id => {
    this.setState(prevState => ({}));
    // console.log(this.state.sskills);
  };

  skillCleaner = id => {
    this.setState(prevState => ({
      sskills: prevState.sskills.filter(skill => skill.id !== id),
      hskills: prevState.hskills.filter(skill => skill.id !== id),
    }));
    // console.log(this.state.sskills);
  };
  render() {
    console.log(this.state);
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
                    reviewer. Developed hero section. Reveiwed team members
                    code.
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
                    <span className="my_projects_brackets">
                      [
                    </span> JavaScrip{' '}
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
              {/* {{ workexperience }.map((work, index) => (
                <WorkExperienceBlock compan={work[index]} />
              ))} */}

              {/* <!--Company 3--> */}
              <WorkExperienceBlock compan={workexperience[2]} />
              {/* <!--Company 2--> */}
              <WorkExperienceBlock compan={workexperience[1]} />
              {/* <!--Company 1--> */}
              <WorkExperienceBlock compan={workexperience[0]} />
            </div>
            {/* <!--Education section--> */}
            <EducationSection />
          </div>
          {/* <!--Sidebar section--> */}
          <aside className="sidebar_section">
            <Contacts contacts={contacts[0]} />
            {/* <!--Tech skills section--> */}
            <Skills
              skills={this.state.hskills}
              className={'tech_skills_item'}
              title={'Hard Skills'}
              skillCleaner={this.skillCleaner}
            />
            {/* <!--Soft skills section--> */}
            <Skills
              skills={this.state.sskills}
              className={'soft_skills_item'}
              title={'Soft Skills'}
              skillCleaner={this.skillCleaner}
            />
          </aside>
        </div>
      </>
    );
  }
}
