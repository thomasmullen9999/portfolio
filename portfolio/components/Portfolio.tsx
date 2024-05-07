import React from 'react';
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div id="portfolio">

      <h2>A selection of projects I have worked on during my trainee/junior developer journey. I have aimed to become proficient in a wide range of web programming technologies, and have  used a variety of different languages and frameworks.</h2>

      <table>
        <tr>
          <th>Name</th>
          <th className="desc">Description</th>
          <th>Languages/Frameworks Used</th>
          <th>Links</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>NC News - Back End</td>
          <td>A server-side application, mimicking the back-end of a news website, similarly to Reddit or Quora. This is an API which draws information from a database of users, articles, topics and comments. Created during the back-end portion of my time studying at the Northcoders Software Development Bootcamp.</td>
          <td>Javascript, Node.js, PostgreSQL</td>
          <td>
            <p>Hosted API: <Link to="https://nc-news-evv6.onrender.com/api">https://nc-news-evv6.onrender.com/api</Link></p>
            <p>GitHub Repo: <Link to="https://github.com/thomasmullen9999/nc-news">https://github.com/thomasmullen9999/nc-news</Link></p>
          </td>
          
          
          <td>Complete</td>
        </tr>
        <tr>
          <td>NC News - Front End</td>
          <td>A website which allows users to browse a selection of articles, topics and comments, connected to my NC back-end project. The site was designed to be viewable on a variety of devices, and accessibility was an important factor when designing the site. Created during the front-end portion of my time studying at the Northcoders Software Development Bootcamp.</td>
          <td>HTML/CSS, Javascript, React.js, Bootstrap, Netlify</td>
          <td>
            <p>Hosted Site: <Link to="https://thomas-mullen-nc-news.netlify.app/">https://thomas-mullen-nc-news.netlify.app/</Link></p>
            <p>GitHub Repo: <Link to="https://github.com/thomasmullen9999/fe-nc-news">https://github.com/thomasmullen9999/fe-nc-news</Link></p>
          </td>
          <td>Complete</td>
        </tr>
        <tr>
          <td>Jukebox.db</td>
          <td>A database which allows users to store information relating to bands, albums, songs, musicians and more. Created as my final project submission for Harvard University’s CS50 SQL course.</td>
          <td>SQLite3</td>
          <td>
            <p>GitHub Repo: <Link to="https://github.com/thomasmullen9999/jukebox-database">https://github.com/thomasmullen9999/jukebox-database</Link></p>
          </td>
          <td>Complete</td>
        </tr>
        <tr>
          <td>Mega Man Guide</td>
          <td>A detailed walkthrough of a classic video game for the Nintendo Entertainment System, complete with rigorous information on enemies and bosses. Created purely with HTML5 and CSS, I wrote this entire guide from scratch as an ode to a great game.</td>
          <td>HTML/CSS, GitHub Pages</td>
          <td>
            <p>Hosted Site: <Link to="https://thomasmullen9999.github.io/mega-man-walkthrough/introduction.html">https://thomasmullen9999.github.io/mega-man-walkthrough/introduction.html</Link></p>
            <p>GitHub Repo: <Link to="https://github.com/thomasmullen9999/mega-man-walkthrough">https://github.com/thomasmullen9999/mega-man-walkthrough</Link></p>
          </td>
          <td>Complete</td>
        </tr>
        <tr>
          <td>Trek-It Travel</td>
          <td>A travel-themed application which allows users to create an account, browse a selection of holiday destinations, search for information about different cities (including restaurants, landmarks and attractions) and create itineraries. This was created in a group with several other students during the final project phase of my time at the Northcoders Software Development Bootcamp.</td>
          <td>HTML/CSS, Javascript, React Native, Firebase, Firestore, Expo</td>
          <td>
            <p>GitHub Repo: <Link to="https://github.com/thomasmullen9999/trek-it-trave">https://github.com/thomasmullen9999/trek-it-trave</Link></p>
          </td>
          <td>Complete</td>
        </tr>
        <tr>
          <td>Fit and Strong</td>
          <td>A Flask application which allows users to view a list of gym exercises, log their own workouts, keep track of their food intake (including calories and other nutritional information) and keep track of their health statistics (e.g. weight, daily steps, etc.). The aim of this project was to combine features from other applications such as MyFitnessPal, Apple's Health app and gym/workout apps and store all the information in one place. Created as my final project submission for Harvard's CS50x Computer Science course.</td>
          <td>Python, Flask, SQLite3</td>
          <td>
            <p>GitHub Repo: <Link to="https://github.com/thomasmullen9999/fit-and-strong">https://github.com/thomasmullen9999/fit-and-strong</Link></p>
          </td>
          <td>In development</td>
        </tr>
        <tr>
          <td>Portfolio Site</td>
          <td>This very website; a showcase of my web development and programming skills, complete with descriptions and examples of all the various projects I have worked on.</td>
          <td>HTML/CSS, Typescript, React, Bootstrap, Netlify</td>
          <td>
            <p>GitHub Repo: <Link to="https://github.com/thomasmullen9999/portfolio">https://github.com/thomasmullen9999/portfolio</Link></p>
          </td>
          <td>In development</td>
        </tr>
        
      </table>

      <h2>Coming Soon - Future Projects</h2>
      <table>
        <tr>
          <th>Name</th>
          <th className="desc">Description</th>
          <th>Languages/Frameworks Used</th>
          <th>Links</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>FF7 Guide - Back End</td>
          <td>A server-side application containing a multitude of information about the PlayStation 1 game Final Fantasy VII, with information on bosses, enemies, locations, characters and more.</td>
          <td>Javascript, Node.js, PostgreSQL</td>
          <td></td>
          <td>Not yet started</td>
        </tr>
        <tr>
          <td>FF7 Guide - Front End</td>
          <td>A detailed walkthrough of the PS1 game Final Fantasy VII.</td>
          <td>Javascript, Angular</td>
          <td></td>
          <td>Not yet started</td>
        </tr>
        </table>
    </div>
  );
};

export default Portfolio;