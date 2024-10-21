
import { Link } from "react-router-dom";

const PortfolioList = () => {
  return (
    <div id="portfolio-list">

      <h2>Portfolio</h2>

      <h3>A selection of projects I have worked on whilst progressing in my software development journey. I am constantly learning and have become proficient in a wide range of web programming technologies, whilst using a variety of different languages and frameworks.</h3>

      <div className="portfolio-piece">
        <h3>Newslett</h3>
        <img src="/newslett-fe.png" alt="Newslett Front End application thumbnail" className="rounded-corners"></img>
        <img src="/nc-news-be.png" alt="NC News Back End application thumbnail" className="rounded-corners margin-left-50"></img>
        <section>
          <div className="app-info">
          <p><strong>Links:</strong> <Link to="https://thomas-mullen-nc-news.netlify.app/" target="blank">Hosted Site</Link> | <Link to="https://nc-news-evv6.onrender.com/api" target="blank">Hosted API</Link> | <Link to="https://github.com/thomasmullen9999/nc-news" target="blank">GitHub Repo (Back End)</Link> | <Link to="https://github.com/thomasmullen9999/fe-nc-news" target="blank">GitHub Repo (Front End)</Link></p>
            <p><strong>Description: </strong>A website in the style of Reddit or Quora, which allows users to browse a selection of articles, topics and comments, connected to an API. This project is composed of two smaller projects, both of which were created during the front-end and back-end portions of my time studying at the Northcoders Software Development Bootcamp.</p>
            <p>The back end of the site is a database of articles, topics, comments and users, created using PostgreSQL with Express.js and Node.js. It is a server-side application, mimicking the back-end of a news website. Many tests were performed during this portion of the project, primarily using Jest and SuperTest, and can all be found in the GitHub repo.</p>
            <p>The front end uses React.js with Bootstrap to pull data from the online API, and is hosted with Netlify. The site was designed to be viewable on a variety of devices, and accessibility was an important factor when designing the site.</p>
            <p><strong>Languages/Frameworks Used:</strong></p>
            <ul>
              <li>Back-End: Javascript, Node.js, PostgreSQL</li>
              <li>Front-End: HTML/CSS, Javascript, React.js, Bootstrap, Netlify</li>
            </ul>
          </div>
        </section>
      </div>

      <div className="portfolio-piece">
        <h3>Fit and Strong</h3>
        <section>
          
        <img src="/fit-and-strong.png" alt="Fit and Strong application thumbnail" className="rounded-corners"></img>
        <div className="app-info">
        <p><strong>Links: </strong><Link to="https://thomasmullen9999.pythonanywhere.com/login" target="blank">Hosted Site</Link> | <Link to="https://www.youtube.com/watch?v=eT_UZQMsg3o&feature=youtu.be" target="blank">Video Overview</Link> | <Link to="https://github.com/thomasmullen9999/fit-and-strong" target="blank">GitHub Repo</Link></p>
        <p><strong>Description: </strong>A Flask application which allows users to view a list of gym exercises, log their own workouts, keep track of their food intake (including calories and other nutritional information) and keep track of their health statistics (e.g. weight, daily steps, etc.). The aim of this project was to combine features from other applications such as MyFitnessPal, Apple's Health app and gym/workout apps and store all the information in one place. Created as my final project submission for Harvard's CS50x Computer Science course.</p>
        <p><strong>Languages/Frameworks Used: </strong>Python, Flask, SQLite3</p>
        </div>
        </section>
      </div>

      <div className="portfolio-piece">
        <h3>Trek-It Travel</h3>
        <section>
          
        <img src="/trek-it.png" alt="Trek-It Travel application thumbnail" id="trek-it-image" className="rounded-corners"></img>
        <div className="app-info">
        <p><strong>Links: </strong><Link to="https://northcoders.com/project-phase/trek-it" target="blank">Video Overview</Link> | <Link to="https://github.com/thomasmullen9999/trek-it-travel" target="blank">GitHub Repo</Link></p>
        <p><strong>Description: </strong>A travel-themed application for mobile devices which allows users to create an account, browse a selection of holiday destinations, search for information about different cities (including restaurants, landmarks and attractions) and create itineraries. This was created in a group with several other students during the final project phase of my time at the Northcoders Software Development Bootcamp.</p>
        <p><strong>Languages/Frameworks Used: </strong>HTML/CSS, Javascript, React Native, Firebase, Firestore, Expo</p>
        </div>
        </section>
      </div>

      <div className="portfolio-piece">
        <h3>Mega Man Guide</h3>
        <section>
        <img src="/megaman-guide.png" alt="Mega Man Walkthrough Site application thumbnail" className="rounded-corners"></img>
        <div className="app-info">
        <p><strong>Links: </strong><Link to="https://thomasmullen9999.github.io/mega-man-walkthrough/introduction.html" target="blank">Hosted Site</Link> | <Link to="https://github.com/thomasmullen9999/mega-man-walkthrough" target="blank">GitHub Repo</Link></p>
        <p><strong>Description: </strong>A detailed walkthrough of a classic video game for the Nintendo Entertainment System, complete with rigorous information on enemies and bosses. Created purely with vanilla HTML5 and CSS, I wrote this entire guide from scratch as an ode to a beloved childhood game.</p>
        <p><strong>Languages/Frameworks Used: </strong>HTML/CSS, GitHub Pages</p>
        </div>
        </section>
      </div>

      <div className="portfolio-piece">
        <h3>Jukebox Database</h3>
        <section>
          
        <img src="/jukebox-db.png" alt="Jukebox.db thumbnail" className="rounded-corners"></img>
        <div className="app-info">
        <p><strong>Links: </strong><Link to="https://www.youtube.com/watch?v=hoeiUS9YI_c&feature=youtu.be" target="blank">Video Overview</Link> | <Link to="https://github.com/thomasmullen9999/jukebox-database" target="blank">GitHub Repo</Link></p>
        <p><strong>Description: </strong>A database which allows users to store information relating to bands, albums, songs, musicians and more. Created as my final project submission for Harvard University’s CS50 SQL course.</p>
        <p><strong>Languages/Frameworks Used: </strong>SQLite3</p>
        </div>
        </section>
      </div>

    </div>
  );
};

export default PortfolioList;