

const Certifications = () => {
  return (
    <div id="certifications">
      
      <h2>Certifications</h2>

      <p><strong>A selection of my achievements and qualifications related to computer science, software development and programming.</strong></p>

      <div className="certification">
        <h3>Diploma of Higher Education (Level 5) - Computer Science - Manchester Metropolitan University</h3>
        <section>
        <img className="img-right diphe" src="/diphecert.png" alt="Manchester Metropolitan University Computer Science Diploma of Higher Education certificate of completion"></img>
        <p>At MMU I began my journey in Computer Science and programming, and it was here that I grasped many of the concepts which are fundamental to coding such as 
          functional programming vs. object-oriented programming, use of conditionals with if/else if/else statements, and procedural loops (for, while, do while). I 
          developed an understanding of data structures such as linked lists, binary trees and stacks/queues, and worked with other colleagues in a professional development module to create a group project. I learned about Entity Relationship Diagrams and how these can be used to represent relational databases. I also learned 
          about assembly code and machine language, and how human-readable code is converted into machine code which computers can interpret and understand.
        </p>
        </section>
      </div>

      <div className="certification">
      <h3>Northcoders Software Development Bootcamp</h3>
      <section>
      <img className="img-right" src="/northcoderscert.png" alt="Northcoders certificate of completion"></img>
      <p>In 2024 I attended Northcoders, a widely recognised coding bootcamp in the UK, and undertook their software development course. Here, I 
        cemented some of my already-existing skills such as use of HTML/CSS, Git and Javascript, and also learned how to apply different
        technologies in both front-end and back-end web design. In regards to back-end, I learned how to use SQL (specifically PostgreSQL) to seed a database and 
        integrate with an API using Node.js and Express, using Test Driven Development to perform unit tests. With front-end, I designed the user-facing side of a website with React.js and Bootstrap, which I hosted with Netlify. During the final project phase of the course, I worked as part of a small group of developers to create a mobile
        application (using React Native, Fireshare, Firestore and Expo) which allows a user to view various travel destinations as well as relevant
        information about local landmarks, restaurants and tourist attractions.</p>
      </section>
      </div>

      <div className="certification">
      <h3>Harvard CS50's Introduction to Computer Science</h3>
      <section>
      <img className="img-right" src="/cs50xcert.png" alt="CS50's Intro to Computer Science certificate of completion"></img>
      <p>An intensive course with fantastic lectures delivered by Harvard University's David Malan. This course not only acted as an exceptional resource for
        learning about important theoretical Computer Science concepts, but also provides practical experience in a variety of programming languages, starting
        with the low-level C language and eventually moving on to more modern higher level languages such as Python, SQL, HTML and CSS. This course covers
        a range of topics, including algorithms, data structures, databases, web programming, memory, artificial intelligence and cybersecurity, and culminates in a large final project. For my project, I produced a web-based fitness application with Flask (using Python/SQL) which allows users to store information about gym exercises and a list of their favourite foods. They can also track their workouks, keep a diary of their dietary intake and record personal daily statistics (weight, steps, etc.).
      </p>
      </section>
      </div>

      <div className="certification">
      <h3>Harvard CS50's Introduction to Databases With SQL</h3>
      <section>
      <img className="img-right" src="/cs50sqlcert.png" alt="CS50's Introduction to Databases certificate of completion"></img>
      <p>This course from Harvard University focusing on SQL was instrumental to my understanding of relational databases, and I learned about the CRUD (Create, Read, Update and Delete) methods which are used when manipulating data with software applications. During the course, I learned how to create queries for databases and join them together with junction tables and nested SELECT statements. I also learned how to optimise query searches with indexes, create views as shortcuts for frequently requested data, and write code to add new tables and append data to already existing tables. For my final project, I created a database called Jukebox.db which allows a user to store and alter data about bands, albums, musicians and more. This project was created in SQLite3 but I also learned how to use MySQL for scaling with larger sets of data.</p>
      </section>
      </div>

    </div>
  );
};

export default Certifications;