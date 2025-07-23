import { Link } from "react-router-dom";
import NCLogo from "../images/northcoders.png";
import MCLogo from "../images/maddison-clarke.png";

const Experience = () => {
  return (
    <div id="experience">
      <h2>Experience</h2>
      <h3>Professional roles I've held in web and software development</h3>

      <div className="job-role">
        <h3>Full-Stack Web Developer | Maddison Clarke (Jul 2024 - Present)</h3>
        <section className="exp-top">
          <img
            id="mc-logo"
            src={MCLogo}
            alt="Maddison Clarke company logo"
          ></img>

          <p>
            At Maddison Clarke, a legal claims firm and subsidiary of J3 Debt
            Solutions Ltd, I’ve held a key role as a commercial web developer,
            contributing directly to production-grade applications in
            collaboration with a senior developer. Together, we’ve worked
            closely with the marketing team to identify, scope, and implement
            functional improvements and UX/UI enhancements that streamline user
            interactions and drive engagement. My responsibilities have
            primarily involved developing dynamic, high-conversion form
            workflows for user onboarding across a variety of legal claim types,
            including equal pay disputes, mis-sold car finance, and
            emissions-related claims.
          </p>
        </section>
        <p>
          When I joined the company, I saw the opportunity to deepen my
          technical breadth by adopting tools and frameworks already in use —
          including Next.js, Prisma, and Cypress — and quickly became proficient
          in leveraging them to deliver high-quality, scalable solutions. I’ve
          consistently received positive feedback for my proactive mindset,
          technical contributions, and ability to ramp up quickly in a
          fast-paced, high-stakes environment. Notable achievements in this role
          have included:
          <ul>
            <li>
              Utilising Prisma (an Object-Relational Mapper, or ORM) to
              facilitate database interactions in Next.js
            </li>
            <li>
              Producing end-to-end tests with Cypress, for performing tests
              in-browser
            </li>
            <li>
              Implementing new features on the admin side, such as pagination
              and graphs/charts to display information regarding lead and
              campaign data
            </li>
            <li>
              Creating user forms for legal claims, and facilitating the storage
              of information retreived from each customer lead (alternating
              between third-party systems and self-developed software)
            </li>
            <li>
              Frequently employing Git (both in CLI form with Mac's Terminal,
              and GUI form with GitHub Desktop) for sharing code, as well as for
              the creation of feature branches and hotfixes, to later be merged
              into the main branch
            </li>
          </ul>
        </p>
        <h4>
          <u>Innovative Upgrades</u>
        </h4>
        <div className="upgrade-container">
          <div className="upgrade-text">
            <p>
              An example of one of my achievements in this role has included the
              implementation of short but unique IDs to be used in links for
              returning clients. Initially, the company used an ID string of 30+
              characters to identify each individual client who had signed up
              for a claim; this string was included in links for clients
              returning to complete forms where they had not yet accepted the
              necessary legal documentation. After conferring with the marketing
              team, it was decided that a shorter (but still unique) string
              would be preferred for sending texts and emails to clients; this
              would make the URL appear simpler and more aesthetically pleasing,
              and also would enable the company to expend less money on SMS
              costs.
            </p>
          </div>
          <img
            src="/short-link.png"
            alt="A comparison of a long and shorter link"
            className="upgrade-image"
          />
        </div>
        <p>
          As a solution to this issue, I proposed that we create a new type of
          ID field to be used for each lead, which was instead 5 characters in
          length, and would utilise the complete set of case-sensitive
          alphanumeric values (A-Z, a-z, 0-9). This meant that each character
          could be one of 62 different values, and therefore the use of a string
          which was just 5 characters in length with this new system would allow
          for a total of 62<sup>5</sup> (almost 1 billion) unique leads. This
          improvement is demonstrated in the image above.
        </p>

        <h4>
          <u>Solo Projects</u>
        </h4>
        <p>
          Several months into the role, I was tasked with producing a web form
          from scratch for one of the company's new campaigns, which would
          collect the user's personal and contact details, as well as a virtual
          signature (using a custom React component). This enabled us to
          transfer client traffic from an older form using third-party software
          to one which we could have more control over.
        </p>
        <p>
          A short time later, after positive feedback from the team on my solo
          work, I worked solo in the production of a brand new web form for
          funnelling potential clients for a car finance claim. This involved
          creating the front and back end of the site myself, sending client
          data to our CRM. This form was used during the launch of the claim.
        </p>

        <h4>
          <u>Career Progression</u>
        </h4>
        <p>
          A year into the role, our former lead developer left and I was offered
          the opportunity to step up in his place and take charge of all
          development and deployment processes. This was a huge responsiblity
          but I saw it as a great chance to rapidly improve my skills in a
          higher-level role. Since then I have overseen CI/CD and maintained all
          of our deployed projects. During this time, I was also offered a place
          on an MSc Degree Apprenticeship course with an external company, in
          partnership with Northumbria University. This enabled me to study
          part-time alongside my role and earn a high level qualification whilst
          gaining valuable experience.
        </p>
        <p>
          Working at Maddison Clarke has given me greater confidence in my
          professional development abilities and has provided me with a strong
          foothold in the software industry.
        </p>
      </div>

      <div className="job-role">
        <h3>
          Trainee Full-Stack Developer | Northcoders (Jan 2024 - Apr 2024)
        </h3>
        <section className="exp-top">
          <img id="nc-logo" src={NCLogo} alt="Northcoders company logo"></img>
          <p>
            In 2024 I attended a software development course with Northcoders, a
            company which offers training in several tech fields, including
            software, data and cloud engineering. Northcoders is well known for
            being one of the best providers of this type of educational
            programme, and is renowned for offering highly relevant and
            up-to-date teaching which reflects current industry trends, enabling
            students to easily and seamlessly transition into a jobs market in
            which standards and technologies are constantly shifting. I quickly
            and enthusiastically completed the required pre-course content, and
            was offered a place in the next available cohort after achieving a
            score of 100% on the entry challenge, a series of coding tasks
            designed to test applicants on their problem-solving abilities and
            understanding of key Javascript concepts.{" "}
          </p>
        </section>
        <p>
          The course was thirteen weeks long, and was an intense 'bootcamp'
          during which new ideas and concepts were taught every day, via online
          lectures and seminars. After every lesson, we completed more coding
          challenges and mini-projects to consolidate our knowledge and ensure
          that we were progressing through the course content at an appropriate
          rate. After the introductory week, the remainder of the course was
          divided into four blocks of three-week-long sections: fundamentals,
          front-end, back-end and a final group project. At Northcoders I
          learned how to:
          <ul>
            <li>
              Use the command line for navigating through system directories,
              opening/running files and creating/deleting files and folders
            </li>
            <li>
              Use Git/GitHub for sharing code, backing up existing projects and
              forking/cloning remote repositories, and creating pull requests to
              be reviewed by senior developers
            </li>
            <li>
              Work together efficiently with fellow developers, employing pair
              programming methods in which two people take turns in 'navigating'
              and 'driving'
            </li>
            <li>
              Perform unit tests with Jest and SuperTest, using Test Driven
              Development to ensure code is bug-free and runs smoothly
            </li>
            <li>
              Interact with APIs, retrieving data using Express.js and using
              object destructuring to display it in an appropriate format
            </li>
            <li>
              Design the front-end, user-facing sections of a web application,
              taking accessibility and user-friendliness into consideration
            </li>
            <li>
              Work as part of a team to create an application in a short period
              of time, delegating roles to different members of the group
              according to skills and specialties
            </li>
          </ul>
        </p>
        <p>
          By the end of the course, I had produced several major projects,
          including both the front-end and back-end of a news application, and a
          mobile application called Trek-It Travel; all of these can be found in
          my{" "}
          <em>
            <Link to="/portfolio">Portfolio</Link>
          </em>
          .
        </p>
        <p>
          Overall, my time at Northcoders was incredibly valuable and has been
          paramount in launching my career in software.
        </p>
      </div>
    </div>
  );
};

export default Experience;
