import { NavDefProps } from '../Interfaces/NavDefProps';
import { Link } from 'react-router-dom';
import './Styles/Navbar.css';

const Navbar = (props:NavDefProps) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/projects">{props.navItem1}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/education">{props.navItem2}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">{props.navItem3}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/experience">{props.navItem4}</Link>
              </li>
              <hr />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

Navbar.defaultProps = {
  title: 'Vikas Meshram',
  navItem1: 'Projects',
  navItem2: 'Education',
  navItem3: 'Dashboard',
  navItem4: 'Experience',
};

export default Navbar;