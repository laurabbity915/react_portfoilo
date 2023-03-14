import React from 'react';
import { Link } from 'react-router-dom';


export default function NarBar() {


  return (
    <nav className="nav">
      <Link className="site-title" to="/">Home</Link>
      <ul>
        <li>
          <Link to="/project-page">Project</Link>
        </li>
        <li>
          <Link to="/contact-page">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}