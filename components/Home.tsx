
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div id="home">
      <h2>Home</h2>
      <p>Welcome to my website! This site was created to act as a showcase of my web programming abilities, as well as provide links to several external websites and applications which I have created as part of my software development portfolio. Several of these projects were created whilst studying at a bootcamp or completing online courses, while others were created in my own personal time as an attempt to continue to hone my coding knowledge and broaden my skillset as a dev.</p>
      <p>This site has several sections which can be accessed through the navigation buttons above. <em><Link to="/aboutme">About Me</Link></em> contains some information about my hobbies and interests, as well as who I am as a person. The <em><Link to="/skills">Skills</Link></em> section displays a list of technical skills I am proficient in (languages, frameworks, etc.), whilst the <em><Link to="/certifications">Certifications</Link></em> section contains a selection of awards I have achieved in some relevant courses. The actual list of projects I have worked on can be found in the <em><Link to="/portfolio">Portfolio</Link></em> section.</p>
      <br></br>
      <img src="/webdesign.png" alt="Web design stock image featuring an Apple iMac"></img>
    </div>
  );
};

export default Home;