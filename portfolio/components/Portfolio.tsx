import React from 'react';
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div id="portfolio">

      <h2>A selection of projects I have worked on during my trainee/junior developer journey. I have aimed to become proficient in a wide range of technologies and have tried to use a variety of different languages and frameworks!</h2>

      <table>
        <tr>
          <th>Name</th>
          <th>Link</th>
          <th>GitHub Repo</th>
          <th>Languages/Tech Used</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>NC News - Back End</td>
          <td><Link to="https://nc-news-evv6.onrender.com/api">https://nc-news-evv6.onrender.com/api</Link></td>
          <td><a>https://github.com/thomasmullen9999/nc-news</a></td>
          <td>Javascript, Node.js, PostgreSQL</td>
          <td>A server-side application, mimicking the back-end of a news website, similarly to Reddit or Quora. This is an API which draws information from a database of users, articles, topics and comments. Created during the back-end portion of my time studying at the Northcoders Software Development Bootcamp.</td>
          <td>Complete</td>
        </tr>
        <tr>
          <td>NC News - Front End</td>
          <td><a>https://thomas-mullen-nc-news.netlify.app/</a></td>
          <td><a>https://github.com/thomasmullen9999/fe-nc-news</a></td>
          <td>HTML/CSS, Javascript, React.js, Bootstrap, Netlify</td>
          <td>A website which allows users to browse a selection of articles, topics and comments, connected to my NC back-end project. The site was designed to be viewable on a variety of devices, and accessibility was an important factor when designing the site. Created during the front-end portion of my time studying at the Northcoders Software Development Bootcamp.</td>
          <td>Complete</td>
        </tr>
        <tr>
          <td>Jukebox.db</td>
          <td><a></a></td>
          <td><a>https://github.com/thomasmullen9999/jukebox-database</a></td>
          <td>SQLite3</td>
          <td>A database which allows users to store information relating to bands, albums, songs, musicians and more. Created as my final project submission for Harvard University’s CS50 SQL course.</td>
          <td>Complete</td>
        </tr>
        <tr>
          <td>Mega Man Guide</td>
          <td><a>https://thomasmullen9999.github.io/mega-man-walkthrough/introduction.html</a></td>
          <td><a>https://github.com/thomasmullen9999/mega-man-walkthrough</a></td>
          <td>HTML/CSS, GitHub Pages</td>
          <td>A detailed walkthrough of a classic video game for the Nintendo Entertainment System, complete with rigorous information on enemies and bosses. Created purely with HTML5 and CSS, I wrote this entire guide from scratch as an ode to a great game.</td>
          <td>Complete</td>
        </tr>
        <tr>
          <td>Trek-It Travel</td>
          <td><a></a></td>
          <td><a>https://github.com/thomasmullen9999/trek-it-travel</a></td>
          <td>HTML/CSS, Javascript, React Native, Firebase, Firestore, Expo</td>
          <td>A travel-themed application which allows users to create an account, browse a selection of holiday destinations, search for information about different cities (including restaurants, landmarks and attractions) and create itineraries. This was created in a group with several other students during the final project phase of my time at the Northcoders Software Development Bootcamp.</td>
          <td>Complete</td>
        </tr>
        <tr>
          <td>Fit and Strong</td>
          <td><a></a></td>
          <td><a>https://github.com/thomasmullen9999/fit-and-strong</a></td>
          <td>Python, Flask, SQLite3</td>
          <td>A Flask application which allows users to view a list of gym exercises, log their own workouts, keep track of their food intake (including calories and other nutritional information) and keep track of their health statistics (e.g. weight, daily steps, etc.). The aim of this project was to combine features from other applications such as MyFitnessPal, Apple's Health app and gym/workout apps and store all the information in one place. Created as my final project submission for Harvard's CS50x Computer Science course.</td>
          <td>In development</td>
        </tr>
        <tr>
          <td>Portfolio Site</td>
          <td><a></a></td>
          <td><a>https://github.com/thomasmullen9999/portfolio</a></td>
          <td>HTML/CSS, Typescript, React, Bootstrap, Netlify</td>
          <td>This very website; a showcase of my web development and programming skills, complete with descriptions and examples of all the various projects I have worked on.</td>
          <td>In development</td>
        </tr>
        
      </table>

      <h2>Coming Soon - Future Projects</h2>
      <table>
        <tr>
          <th>Name</th>
          <th>Link</th>
          <th>GitHub Repo</th>
          <th>Languages/Tech Used</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>FF7 Guide - Back End</td>
          <td></td>
          <td></td>
          <td>Javascript, Node.js, PostgreSQL</td>
          <td>A server-side application containing a multitude of information about the PlayStation 1 game Final Fantasy VII, with information on bosses, enemies, locations, characters and more.</td>
          <td>Not yet started</td>
        </tr>
        <tr>
          <td>FF7 Guide - Front End</td>
          <td></td>
          <td></td>
          <td>Javascript, Angular</td>
          <td>A detailed walkthrough of the PS1 game Final Fantasy VII.</td>
          <td>Not yet started</td>
        </tr>
        </table>
    </div>
  );
};

export default Portfolio;