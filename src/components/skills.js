import React, { useState } from 'react';
import '../css/skills.styl';

const data = {
  Languages: ['Javascript', 'HTML5/CSS3', 'GraphQL', 'Java', 'Python'],
  'Frameworks/Runtimes': ['Nodejs', 'Expressjs', 'Gatsbyjs', 'React Native'],
  'Libraries/Tools': [
    'Reactjs',
    'Redux',
    'Redux-Thunk',
    'Webpack',
    'Storybookjs',
    'Tailwind',
  ],
};

const Skills = _ => {
  const [domain, setDomain] = useState('Languages');

  const handleChange = e => setDomain(e.target.value);

  return (
    <div className="skills">
      <div>
        <select onChange={handleChange}>
          <option>Languages</option>
          <option>Frameworks/Runtimes</option>
          <option>Libraries/Tools</option>
        </select>
      </div>
      <div>
        <span>
          {data[domain].map((item, idx) => {
            return (
              <p class="skill-item" key={idx}>
                {item}
              </p>
            );
          })}
        </span>
      </div>
    </div>
  );
};

export default Skills;
