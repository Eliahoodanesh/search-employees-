import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#ff8c00' }}>
      <div className="container">
        <div className="mx-auto d-flex">
          <ul className="navbar-nav">
            <li className="nav-item mx-2">
              <Link className="nav-link text-white" to="/">דף הבית</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link text-white" to="/favorites">מועדפים</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;


