import React from 'react';
import '../css/skills.styl';

const SKILLS = [
  'Javascript',
  'HTML5/CSS3',
  'GraphQL',
  'Java',
  'Python',
  'Nodejs',
  'Expressjs',
  'Gatsbyjs',
  'React Native',
  'Reactjs',
  'Redux',
  'Redux-Thunk',
  'Webpack',
  'Apollo',
  'Storybookjs',
  'Tailwind',
];

const Skills = _ => {
  return (
    <div className="skills">
      <div>
        <span>
          {SKILLS.map((skill, idx) => {
            return (
              <p class="skill-item" key={idx}>
                {skill}
              </p>
            );
          })}
        </span>
      </div>
    </div>
  );
};

export default Skills;
