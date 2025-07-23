import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav id="nav-bar">
      <div className="nav-buttons">
        <Link to="/">
          <Button className="nav-button">Home</Button>
        </Link>
        <Link to="/aboutme">
          <Button className="nav-button">About Me</Button>
        </Link>
        <Link to="/skills">
          <Button className="nav-button">Skills</Button>
        </Link>
        <Link to="/certifications">
          <Button className="nav-button">Certifications</Button>
        </Link>
        <Link to="/experience">
          <Button className="nav-button">Experience</Button>
        </Link>
        <Link to="/portfolio">
          <Button className="nav-button">Portfolio</Button>
        </Link>
        <Link to="/contact">
          <Button className="nav-button">Contact</Button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
