import React, { useState } from 'react';
import '../css/skills.styl';

const data = {
  Languages: ['Javascript', 'HTML5/CSS3', 'GraphQL', 'Java', 'Python'],
  'Frameworks/Runtimes': ['Nodejs', 'Expressjs', 'Gatsbyjs', 'React Native'],
  'Libraries/Tools': [
    'Reactjs',
    'Redux',
    'Redux Thunk',
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
      <select onChange={handleChange}>
        <option>Languages</option>
        <option>Frameworks/Runtimes</option>
        <option>Libraries/Tools</option>
      </select>
      <ul>
        {data[domain].map((item, idx) => {
          return <li key={idx}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Skills;
