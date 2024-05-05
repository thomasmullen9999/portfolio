import React from 'react';

const Skills = () => {
  return (
    <div>
            <table>
        <tr>
          <th>Languages</th>
          <th>Testing</th>
          <th>Back-end</th>
          <th>Front-end</th>
          <th>Hosting</th>
          <th>Version Control</th>
          <th>Soft Skills</th>
        </tr>
        <tr>
          <td>Python, Javascript (using Node.js and browsers as runtime environment), Typescript</td>
          <td>Test Driven Development (TDD), Jest, Supertest</td>
          <td>SQL, PostgreSQL, SQLite, Express, database seeding, migrations, Flask</td>
          <td>HTML, CSS, React, React Native, Lighthouse, other accessibility tools</td>
          <td>Netlify, Cloudflare, GitHub Pages</td>
          <td>Git, GitHub</td>
          <td>Technical communication, paired programming, SDL, agile and SCRUM 
Methodologies
</td>
        </tr>
        </table>
    </div>
  );
};

export default Skills;