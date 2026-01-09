import { useState } from "react";
import wyreflowLogo from "/assets/images/wyreflow-logohigh.png";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(null);

    return (
        <header id="header">
        <div className="header-logo">
            <img src={wyreflowLogo} alt="logo" />
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <i className="bx bx-menu"></i>
        </div>

        <nav className={`navbar ${menuOpen ? "active" : ""}`}>
            <ul id="navbar-list-item">
            <li><a href="/">Home</a></li>

            <li className="dropdown">
                <a
                className="dropdown-toggle"
                onClick={() => setDropdownOpen(dropdownOpen === 0 ? null : 0)}
                >
                Services
                </a>
                {dropdownOpen === 0 && (
                <div className="dropdown-content services-dropdown">
                        <div className="dropdown-grid">
                            <a href="#">Artificial Intelligence</a>
                            <a href="#">Cloud</a>
                            <a href="#">Consulting</a>
                            <a href="#">Cybersecurity</a>
                            <a href="#">Cognitive Business Operations</a>
                            <a href="#">Data & Analytics</a>
                            <a href="#">Enterprise Solutions</a>
                            <a href="#">Network Solutions & Services</a>
                        </div>
                    </div>
                )}
            </li>

            <li><a href="/about">About Us</a></li>
            <li><a href="/career">Career</a></li>
            <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
        </header>
    );
};

export default Header;
