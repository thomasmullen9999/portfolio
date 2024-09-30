import { Link } from "react-router-dom";
import NCLogo from '../images/northcoders.png'
import MCLogo from '../images/maddison-clarke.png'

const Experience = () => {
  return (
    <div id="experience">
      
      <h2>Experience</h2>
      <h3>A selection of relevant experience in the software/web development industry</h3>

      <div className="job-role">
        <h3>Junior Web Developer - Maddison Clarke</h3>
        <section className="exp-top">
          <img id="mc-logo" src={MCLogo} alt="Maddison Clarke company logo"></img>
          <p>At Maddison Clarke, a subsidiary of J3 Debt Solutions Limited, I have gained valuable industry experience in a commercial web development role which has enabled me to work alongside a senior developer. Together, we co-operated closely with the marketing team, conferring often to decide what the best options would be going forward in terms of the functionality of our applications, as well as streamlining the UX/UI for a convenient user experience. I was primarily tasked with assisting in the production of forms which enabled users to make claims regarding equal pay and faulty diesel emissions systems in cars, as well as several other smaller projects.</p> 
        </section>
          <p>Before becoming employed here, I was only vaguely familiar with some of the software and frameworks used at the company, such as Next.js, Prisma and Cypress. I saw this as a great opportunity to deepen my knowledge of different tech stacks, and gain proficiency in a wider range of development tools. I quickly integrated myself into the team and received positive feedback for my approach to the position. Some of my achievements in this role have included:
          <ul>
            <li>Utilising Prisma (an Object-Relational Mapper, or ORM) to facilitate database interactions in Next.js</li>
            <li>Producing end-to-end tests with Cypress, for performing tests in-browser</li>
            <li>Implementing new features on the admin side, such as pagination and graphs/charts to display information regarding lead and campaign data</li>
            <li>Assisting with the creation of user forms for legal claims (transferring company systems from proprietary to self-developed software)</li>
            <li>Frequently employing Git (both in CLI and GUI form with GitHub Desktop) for sharing code, as well as for the creation of feature branches and hotfixes, to later be merged into the main branch</li>
          </ul>
          </p>
          <p>Working at Maddison Clarke has given me greater confidence in my professional development abilities and has provided me with a strong path into the software industry.</p>
      </div>

      <div className="job-role">
        <h3>Trainee Software Developer - Northcoders</h3>
        <section className="exp-top">
          <img id="nc-logo" src={NCLogo} alt="Northcoders company logo"></img>
          <p>In 2024 I attended a software development course with Northcoders, a company which offers training in several industries, including not only software but also data and cloud engineering. Northcoders is well known for being one of the best providers of this style of course, and is renowned for offering highly relevant and up-to-date teaching which reflects current industry trends, enabling students to easily and seamlessly enter a jobs market in which standards and technologies are constantly shifting. After completing the required pre-course content, I was accepted into the course after achieving a perfect score of 100% on the entry challenge, a series of coding tasks designed to test applicants on their understanding of key Javascript concepts and problem-solving abilities. </p> 
        </section>
          <p>The course was thirteen weeks long, and was an intense bootcamp during which new ideas and concepts were taught almost every day, via online lectures and seminars. After every lesson, we completed more coding challenges and small projects to consolidate our knowledge and ensure that we were progressing through the course content at a healthy speed. After the introductory week, the remainder of the course was divided into four blocks of three-week-long sections: fundamentals, front-end, back-end and a final group project. At Northcoders I learned how to:
            <ul>
              <li>Use the command line for navigating through system directories, opening/running software files and creating/deleting files and folders</li>
              <li>Use Git/GitHub for sharing code, backing up existing projects and forking/cloning remote repositories, and creating pull requests to be reviewed by senior developers</li>
              <li>Work together efficiently with fellow developers, employing pair programming methods in which two people take turns in 'navigating' and 'driving'</li>
              <li>Perform unit tests with Jest and SuperTest, using Test Driven Development to ensure code is bug-free and runs smoothly</li>
              <li>Interact with APIs, retrieving data using Express.js and displaying it in an appropriate format</li>
              <li>Design the front-end, user-facing sections of a web application, taking accessibility and user-friendliness into consideration</li>
              <li>Work as part of a team to create an application in a short period of time, delegating roles to different members of the group according to skills and specialties</li>
            </ul>
          </p>
          <p>By the end of the course, I had produced several major projects, including both the front-end and back-end of a news application, and a mobile application called Trek-It Travel; all of these can be found in my <em><Link to="/portfolio">Portfolio</Link></em>.</p>
          <p>Overall, my time at Northcoders was incredibly valuable and has been paramount in launching my career in software.</p>
      </div>

    </div>
  );
};

export default Experience;