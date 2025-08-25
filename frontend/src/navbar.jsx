import React from 'react';
import './navbar.css'  // Fixed import path

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container"> 
                <div className="navbar-brand">
                    <a href="#home">NFederis._</a>
                </div>
                <ul className="navbar-menu">
                    <li className="navbar-item">  {/* Fixed: was navbar=item */}
                        <a href="#home" className="navbar-link">
                            // home
                        </a>
                    </li>
                    <li className="navbar-item">  {/* Fixed: was navbar=item */}
                        <a href="#expertise" className="navbar-link">
                            // expertise
                        </a>
                    </li>
                    <li className="navbar-item">  {/* Fixed: was navbar=item */}
                        <a href="#work" className="navbar-link">
                            // work
                        </a>
                    </li>
                    <li className="navbar-item">  {/* Fixed: was navbar=item */}
                        <a href="#experience" className="navbar-link">
                            // experience
                        </a>
                    </li>
                    <li className="navbar-item">  {/* Fixed: was navbar=item */}
                        <a href="#contact" className="navbar-link">
                            // contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;