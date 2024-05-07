import React from 'react';

const Skills = () => {
  return (
    <div id="skills">
      <h2>Skills</h2>
      <h3>Languages: C, Python, Javascript (using Node.js and browsers as runtime environment), Typescript</h3>
      <h3>Testing: Test Driven Development (TDD), Jest, Supertest</h3>
      <h3>Back-end: SQL, PostgreSQL, SQLite, Express, database seeding, migrations</h3>
      <h3>Front-end: HTML, CSS, React, React Native, Lighthouse, other accessibility tools</h3>
      <h3>Hosting: Netlify, Cloudflare, GitHub Pages</h3>
      <h3>Soft skills: Technical communication, paired programming, SDL, agile and SCRUM Methodologies</h3>

      <img src="../images/html5.png" className="icon"></img>
      <img src="../images/css.png" className="icon"></img>
      <img src="../images/javascript.png" className="icon"></img>
      <img src="../images/typescript.png" className="icon"></img>
      <img src="../images/sql.png" className="icon"></img>
      <img src="../images/sqlite.png" className="icon"></img>
      <img src="../images/postgres.png" className="icon"></img>
      <img src="../images/python.png" className="icon"></img>
      <img src="../images/flask.png" className="icon"></img>
      <img src="../images/node.png" className="icon"></img>
      <img src="../images/react.png" className="icon"></img>
      <img src="../images/jest.png" className="icon"></img>
      <img src="../images/netlify.png" className="icon"></img>
      <img src="../images/github.png" className="icon"></img>
      <img src="../images/c.png" className="icon"></img>

      <h2>Certifications</h2>

      <h3>Diploma of Higher Education (Level 5) - Computer Science - Manchester Metropolitan University</h3>
      <p></p>
      <img></img>

      <h3>Northcoders</h3>
      <p>In 2024 I attended Northcoders, a widely recognised coding bootcamp in the UK, and undertook their software development course. Here, I 
        cemented some of my already-existing skills such as use of HTML/CSS, Git and Javascript, and also learned how to apply different
        technologies in both front-end and back-end web design. In regards to back-end, I learned how to use SQL (specifically PostgreSQL) to seed a database and 
        integrate with an API using Node.js, with Test Driven Development. With front-end, I designed the user-facing side of a website with React.js and Bootstrap,
        which I hosted with Netlify. During the final project phase of the course, I worked as part of a small group of developers to create a mobile
        application (using React Native, Fireshare, Firestore and Expo) which allows user to view various travel destinations as well as relevant
        information about local landmarks, restaurants and tourist attractions.</p>
      <img src="../images/northcoderscert.png" alt="Northcoders certificate of completion"></img>

      <h3>CS50's Introduction to Computer Science</h3>
      <p>An intensive course with fantastic lectures delivered by Harvard University's David Malan. This course not only acts as an exceptional resource for
        learning about important theoretical Computer Science concepts, but also provides practical experience in a variety of programming languages, starting
        with the low-level C language and eventually moving on to more modern higher level languages such as Python, SQL, HTML and CSS. This course covers concepts
        a range of topics, including algorithms, data structures, databases, web programming, memory, artificial intelligence and cybersecurity, and culminates in a large final project. For my project, I produced a web-based fitness application with Flask (using Python/SQL) which allows to users to store information about gym exercises and 
        a list of their favourite foods. They can also track their workouks, keep a diary of their dietary intake and record personal daily statistics (weight, steps, etc.).
      </p>
      <img alt="CS50's Intro to Computer Science certificate of completion"></img>
      

      <h3>CS50 SQL</h3>
      <p>This course from Harvard University focusing on SQL was instrumental to my understanding of relational databases, and I learned about the CRUD (Create, Read, Update and Delete) methods which are used when manipulating data with software applications. During the course, I learned how to create queries for databases and join them together with junction tables and nested SELECT statements. I also learned how to optimise query searches with indexes, create views as shortcuts for frequently requested data, and write code to add new tables and append data to already existing tables. For my final project, I created a database called Jukebox.db which allows a user to record and edit data regarding bands, albums, musicians and more. This project was created in SQLite3 but I also learned how to use MySQL for scaling with larger sets of data.</p>
      <img src="../images/cs50sqlcert.png" alt="CS50's Introduction to Databases certificate of completion"></img>

    </div>
  );
};

export default Skills;