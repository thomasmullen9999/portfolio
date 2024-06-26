
import { Link } from "react-router-dom";

const PortfolioList = () => {
  return (
    <div id="portfolio-list">

      <h2>Portfolio</h2>

      <p><strong>A selection of projects I have worked on whilst progressing in my software development journey. I am constantly learning and have become proficient in a wide range of web programming technologies, whilst using a variety of different languages and frameworks.</strong></p>

      <div className="portfolio-piece">
        <h3>NC News - Back End</h3>
        <section>
          <img src="/nc-news-be.png" alt="NC News Back End application thumbnail"></img>
          <div className="app-info">
          <p><strong>Links:</strong> <Link to="https://nc-news-evv6.onrender.com/api" target="blank">Hosted API</Link> | <Link to="https://github.com/thomasmullen9999/nc-news" target="blank">GitHub Repo</Link></p>
            <p><strong>Description: </strong>A website in the style of Reddit or Quora, which draws information from a database of users, articles, topics and comments. It is a server-side application, mimicking the back-end of a news website. Created during the back-end portion of my time studying at the Northcoders Software Development Bootcamp.</p>
            <p><strong>Languages/Tech Stack:</strong> Javascript, Node.js, PostgreSQL</p>
          </div>
        </section>
      </div>

      <div className="portfolio-piece">
        <h3>NC News - Front End</h3>
        <section>
          
        <img src="/nc-news-fe.png" alt="NC News Front End application thumbnail"></img>
        <div className="app-info">
        <p><strong>Links: </strong><Link to="https://thomas-mullen-nc-news.netlify.app/" target="blank">Hosted Site</Link> | <Link to="https://github.com/thomasmullen9999/fe-nc-news" target="blank">GitHub Repo</Link></p>
        <p><strong>Description: </strong>A website which allows users to browse a selection of articles, topics and comments, connected to my NC back-end project. The site was designed to be viewable on a variety of devices, and accessibility was an important factor when designing the site. Created during the front-end portion of my time studying at the Northcoders Software Development Bootcamp.</p>
        <p><strong>Languages/Tech Stack: </strong>HTML/CSS, Javascript, React.js, Bootstrap, Netlify</p>
        
        </div>
        </section>
      </div>

      <div className="portfolio-piece">
        <h3>Jukebox Database</h3>
        <section>
          
        <img src="/jukebox-db.png" alt="Jukebox.db thumbnail"></img>
        <div className="app-info">
        <p><strong>Links: </strong><Link to="https://www.youtube.com/watch?v=hoeiUS9YI_c&feature=youtu.be" target="blank">Video Overview</Link> | <Link to="https://github.com/thomasmullen9999/jukebox-database" target="blank">GitHub Repo</Link></p>
        <p><strong>Description: </strong>A database which allows users to store information relating to bands, albums, songs, musicians and more. Created as my final project submission for Harvard University’s CS50 SQL course.</p>
        <p><strong>Languages/Tech Stack: </strong>SQLite3</p>
        </div>
        </section>
      </div>

      <div className="portfolio-piece">
        <h3>Mega Man Guide</h3>
        <section>
        <img src="/megaman-guide.png" alt="Mega Man Walkthrough Site application thumbnail"></img>
        <div className="app-info">
        <p><strong>Links: </strong><Link to="https://thomasmullen9999.github.io/mega-man-walkthrough/introduction.html" target="blank">Hosted Site</Link> | <Link to="https://github.com/thomasmullen9999/mega-man-walkthrough" target="blank">GitHub Repo</Link></p>
        <p><strong>Description: </strong>A detailed walkthrough of a classic video game for the Nintendo Entertainment System, complete with rigorous information on enemies and bosses. Created purely with HTML5 and CSS, I wrote this entire guide from scratch as an ode to a great game.</p>
        <p><strong>Languages/Tech Stack: </strong>HTML/CSS, GitHub Pages</p>
        </div>
        </section>
      </div>

      <div className="portfolio-piece">
        <h3>Trek-It Travel</h3>
        <section>
          
        <img src="/trek-it.png" alt="Trek-It Travel application thumbnail" id="trek-it-image"></img>
        <div className="app-info">
        <p><strong>Links: </strong><Link to="https://northcoders.com/project-phase/trek-it" target="blank">Video Overview</Link> | <Link to="https://github.com/thomasmullen9999/trek-it-travel" target="blank">GitHub Repo</Link></p>
        <p><strong>Description: </strong>A travel-themed application for mobile devices which allows users to create an account, browse a selection of holiday destinations, search for information about different cities (including restaurants, landmarks and attractions) and create itineraries. This was created in a group with several other students during the final project phase of my time at the Northcoders Software Development Bootcamp.</p>
        <p><strong>Languages/Tech Stack: </strong>HTML/CSS, Javascript, React Native, Firebase, Firestore, Expo</p>
        </div>
        </section>
      </div>

      <div className="portfolio-piece">
        <h3>Fit and Strong</h3>
        <section>
          
        <img src="/fit-and-strong.png" alt="Fit and Strong application thumbnail"></img>
        <div className="app-info">
        <p><strong>Links: </strong><Link to="https://thomasmullen9999.pythonanywhere.com/login" target="blank">Hosted Site</Link> | <Link to="https://www.youtube.com/watch?v=eT_UZQMsg3o&feature=youtu.be" target="blank">Video Overview</Link> | <Link to="https://github.com/thomasmullen9999/fit-and-strong" target="blank">GitHub Repo</Link></p>
        <p><strong>Description: </strong>A Flask application which allows users to view a list of gym exercises, log their own workouts, keep track of their food intake (including calories and other nutritional information) and keep track of their health statistics (e.g. weight, daily steps, etc.). The aim of this project was to combine features from other applications such as MyFitnessPal, Apple's Health app and gym/workout apps and store all the information in one place. Created as my final project submission for Harvard's CS50x Computer Science course.</p>
        <p><strong>Languages/Tech Stack: </strong>Python, Flask, SQLite3</p>
        </div>
        </section>
      </div>

      <div className="portfolio-piece">
        <h3>Portfolio Site</h3>
        <section>
        <img src="/portfolio-site.png" alt="Portfolio site application thumbnail"></img>
        <div className="app-info">
        <p><strong>Links: </strong><Link to="https://thomas-mullen-portfolio.vercel.app/" target="blank">Hosted Site</Link> | <Link to="https://github.com/thomasmullen9999/portfolio" target="blank">GitHub Repo</Link></p>
        <p><strong>Description: </strong>This very website; a showcase of my web development and programming skills, complete with descriptions and examples of all the various projects I have worked on.</p>
        <p><strong>Languages/Tech Stack: </strong>HTML/CSS, Typescript, React, Bootstrap, Vercel</p>
        
        
        </div>
        </section>
      </div>

    </div>
  );
};

export default PortfolioList;