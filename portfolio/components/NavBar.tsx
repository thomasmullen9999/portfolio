import React from 'react';
import { Button, ButtonGroup } from "react-bootstrap";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav id="nav-bar">
      <ButtonGroup>
          <Link to="/"><Button>Home</Button></Link>
          <Link to="/skills"><Button>Skills/Certifications</Button></Link>  
          <Link to="/portfolio"><Button>Portfolio</Button></Link>    
          <Link to="/contact"><Button>Contact</Button></Link>    
      </ButtonGroup>
    </nav>
  );
};

export default NavBar;