import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <h1>Student Attendance</h1>
      
          <Link  to="/Home">
          <button className="button1">Home</button>
          </Link>
        
          <Link to="/Student">
          <button className="button2">Student List</button>
          </Link>

          <Link to="/About">
          <button className="button3">About</button>
          </Link>
          <Link to="/Attendance">
          <button className="button3">Attendance</button>
          </Link>

          <Link to="/Atrecord">
          <button className="button4">Atrecord</button>
          </Link>
        
    </nav>
  );
};

export default Navbar;
