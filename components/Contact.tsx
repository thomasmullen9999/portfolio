import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const Contact = () => {
  return (
    <div id="contact">
      <h2>Contact Me!</h2>

      <div className="contact-detail">
        <img src="/gmaillogo.png" className="contact-icon"></img>
        <h3><Link to="mailto:thomasmullen9999@gmail.com">thomasmullen9999@gmail.com</Link></h3>
      </div>
      <br></br>
      <div className="contact-detail">
        <img src="/githublogo.png" className="contact-icon"></img>
        <h3><Link to="https://www.github.com/thomasmullen9999" target="blank">thomasmullen9999</Link></h3>
      </div>
      <br></br>
      <div className="contact-detail">
        <img src="/linkedinlogo.png" className="contact-icon"></img>
        <h3><Link to="https://www.linkedin.com/in/thomas-mullen-2591932b2/" target="blank">https://www.linkedin.com/in/thomas-mullen-2591932b2/</Link></h3>
      </div>
    </div>
  );
};

export default Contact;