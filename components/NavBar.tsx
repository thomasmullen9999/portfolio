
import { Button, ButtonGroup } from "react-bootstrap";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav id="nav-bar">
      <ButtonGroup>
          <Link to="/"><Button>Home</Button></Link>
          <Link to="/skills"><Button>Skills</Button></Link>  
          <Link to="/certifications"><Button>Certifications</Button></Link>  
          <Link to="/portfolio"><Button>Portfolio</Button></Link>    
          <Link to="/contact"><Button>Contact</Button></Link>    
      </ButtonGroup>
    </nav>
  );
};

export default NavBar;