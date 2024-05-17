
import { Link } from "react-router-dom";

const PortfolioList = () => {
  return (
    <div id="portfolio-list">

      <h2>A selection of projects I have worked on during my trainee/junior developer journey. I have aimed to become proficient in a wide range of web programming technologies, and have  used a variety of different languages and frameworks.</h2>

      <div className="portfolio-piece">
        <h3>NC News - Back End</h3>
        <img src="/nc-news-be.png" alt="NC News Back End application thumbnail"></img>
        <p>Links: <Link to="https://nc-news-evv6.onrender.com/api">Hosted API</Link> | <Link to="https://github.com/thomasmullen9999/nc-news">GitHub Repo</Link></p>
        <p>A server-side application, mimicking the back-end of a news website, similarly to Reddit or Quora. This is an API which draws information from a database of users, articles, topics and comments. Created during the back-end portion of my time studying at the Northcoders Software Development Bootcamp.</p>
        <p>Languages/Frameworks Used: Javascript, Node.js, PostgreSQL</p>
        <p></p>
        <p></p>
        <p>Status: Complete</p>
      </div>

      <div className="portfolio-piece">
        <h3>NC News - Front End</h3>
        <img src="/nc-news-fe.png" alt="NC News Front End application thumbnail"></img>
        <p>A website which allows users to browse a selection of articles, topics and comments, connected to my NC back-end project. The site was designed to be viewable on a variety of devices, and accessibility was an important factor when designing the site. Created during the front-end portion of my time studying at the Northcoders Software Development Bootcamp.</p>
        <p>Languages/Frameworks Used: HTML/CSS, Javascript, React.js, Bootstrap, Netlify</p>
        <p><Link to="https://thomas-mullen-nc-news.netlify.app/">Hosted Site</Link></p>
        <p><Link to="https://github.com/thomasmullen9999/fe-nc-news">GitHub Repo</Link></p>
        <p>Status: Complete</p>
      </div>

      <div className="portfolio-piece">
        <h3>Jukebox.db</h3>
        <img src="/jukebox-db.png" alt="Jukebox.db thumbnail"></img>
        <p>A database which allows users to store information relating to bands, albums, songs, musicians and more. Created as my final project submission for Harvard University’s CS50 SQL course.</p>
        <p>Languages/Frameworks Used: SQLite3</p>
        <p><Link to="https://github.com/thomasmullen9999/jukebox-database">GitHub Repo</Link></p>
        <p><Link to="https://www.youtube.com/watch?v=hoeiUS9YI_c&feature=youtu.be">Video Overview</Link></p>
        <p>Status: Complete</p>
      </div>

      <div className="portfolio-piece">
        <h3>Mega Man Site</h3>
        <img src="/megaman-guide.png" alt="Mega Man Walkthrough Site application thumbnail"></img>
        <p>A detailed walkthrough of a classic video game for the Nintendo Entertainment System, complete with rigorous information on enemies and bosses. Created purely with HTML5 and CSS, I wrote this entire guide from scratch as an ode to a great game.</p>
        <p>Languages/Frameworks Used: HTML/CSS, GitHub Pages</p>
        <p><Link to="https://thomasmullen9999.github.io/mega-man-walkthrough/introduction.html">Hosted Site</Link></p>
        <p><Link to="https://github.com/thomasmullen9999/mega-man-walkthrough">GitHub Repo</Link></p>
        <p>Status: Complete</p>
      </div>

      <div className="portfolio-piece">
        <h3>Trek-It Travel</h3>
        <img src="/trek-it.png" alt="Trek-It Travel application thumbnail"></img>
        <p>A travel-themed application which allows users to create an account, browse a selection of holiday destinations, search for information about different cities (including restaurants, landmarks and attractions) and create itineraries. This was created in a group with several other students during the final project phase of my time at the Northcoders Software Development Bootcamp.</p>
        <p>Languages/Frameworks Used: HTML/CSS, Javascript, React Native, Firebase, Firestore, Expo</p>
        <p><Link to="https://github.com/thomasmullen9999/trek-it-travel">GitHub Repo</Link></p>
        <p><Link to="https://northcoders.com/project-phase/trek-it">Video Overview</Link></p>
        <p>Status: Complete</p>
      </div>

      <div className="portfolio-piece">
        <h3>Fit and Strong</h3>
        <img src="/fit-and-strong.png" alt="Fit and Strong application thumbnail"></img>
        <p>A Flask application which allows users to view a list of gym exercises, log their own workouts, keep track of their food intake (including calories and other nutritional information) and keep track of their health statistics (e.g. weight, daily steps, etc.). The aim of this project was to combine features from other applications such as MyFitnessPal, Apple's Health app and gym/workout apps and store all the information in one place. Created as my final project submission for Harvard's CS50x Computer Science course.</p>
        <p>Languages/Frameworks Used: Python, Flask, SQLite3</p>
        <p><Link to="https://thomasmullen9999.pythonanywhere.com/login">Hosted Site</Link></p>
        <p><Link to="https://github.com/thomasmullen9999/fit-and-strong">GitHub Repo</Link></p>
        <p><Link to="https://www.youtube.com/watch?v=eT_UZQMsg3o&feature=youtu.be">Video Overview</Link></p>
        <p>Status: Complete</p>
      </div>

      <div className="portfolio-piece">
        <h3>Portfolio Site</h3>
        <img src="/portfolio-site.png" alt="Portfolio site application thumbnail"></img>
        <p>This very website; a showcase of my web development and programming skills, complete with descriptions and examples of all the various projects I have worked on.</p>
        <p>Languages/Frameworks Used: HTML/CSS, Typescript, React, Bootstrap, Netlify</p>
        <p><Link to="https://thomas-mullen-portfolio.vercel.app/">Hosted Site</Link></p>
        <p><Link to="https://github.com/thomasmullen9999/portfolio">GitHub Repo</Link></p>
        <p>Status: Complete</p>
      </div>

    </div>
  );
};

export default PortfolioList;