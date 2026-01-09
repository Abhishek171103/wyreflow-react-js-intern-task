const Footer = () => {
    return (
        <footer id="Footer">
            <div className="footer-container">

                <div className="footer-social-container">
                    <div className="footer-social-heading">
                        <h1>Social</h1>
                        <h2>Follow us for the latest update</h2>
                    </div>

                    <div className="footer-social-media-container">

                        <a href="https://www.facebook.com/wyreflowtechnologies/">
                            <div className="social-media-content">
                                <img src="../assets/images/fb-image.png" alt="" className="social-media-img" />

                                <div className="social-media-text">
                                    <img src="../assets/images/wyreflow.image.png" alt="company-logo" />
                                    <p>Facebook</p>
                                </div>
                            </div>
                        </a>

                        <a href="https://www.instagram.com/wyreflow_technologies/">
                            <div className="social-media-content">
                                <img src="../assets/images/insta-image.png" alt="" className="social-media-img" />

                                <div className="social-media-text">
                                    <img src="../assets/images/wyreflow.image.png" alt="company-logo" />
                                    <p>Instagram</p>
                                </div>
                            </div>
                        </a>

                        <a href="https://www.youtube.com/@WyreflowTechnologies">
                            <div className="social-media-content">
                                <img src="../assets/images/yt-image.png" alt="" className="social-media-img" />

                                <div className="social-media-text">
                                    <img src="../assets/images/wyreflow.image.png" alt="company-logo" />
                                    <p>Youtube</p>
                                </div>
                            </div>
                        </a>

                        <a href="https://www.linkedin.com/company/wyreflow-technologies">
                            <div className="social-media-content">
                                <img src="../assets/images/linkedin-image.png" alt="" className="social-media-img" />

                                <div className="social-media-text">
                                    <img src="../assets/images/wyreflow.image.png" alt="company-logo" />
                                    <p>LinkedIn</p>
                                </div>
                            </div>
                        </a>

                    </div>
                </div>

                <div id="footer-middle-line"></div>

                <div className="footer-more-info-container">
                    <div className="more-info-list-item">
                        <h2>Industries</h2>
                        <ul>
                            <a href="/pages-html/banking.html">
                                <li>Banking </li>
                            </a>
                            <a href="/pages-html/industry-consulting.html">
                                <li>Consulting</li>
                            </a>
                            <a href="/pages-html/communication.html">
                                <li>Communications and Media</li>
                            </a>
                            <a href="/pages-html/e-commerce.html">
                                <li>E-commerce</li>
                            </a>
                            <a href="/pages-html/ed-tech.html">
                                <li>Ed-Tech / Education</li>
                            </a>
                            <a href="/pages-html/govt.html">
                                <li>Government & Public Services</li>
                            </a>
                            <a href="/pages-html/healthcare.html">
                                <li>HealthCare</li>
                            </a>
                            <a href="/pages-html/high-tech.html">
                                <li>High-Tech</li>
                            </a>
                            <a href="/pages-html/recrutiment.html">
                                <li>Recruitment</li>
                            </a>
                            <a href="/pages-html/software&platforms.html">
                                <li>Software and platforms</li>
                            </a>
                            <a href="/pages-html/transport.html">
                                <li>Transportation & Logistics</li>
                            </a>
                        </ul>
                    </div>

                    <div className="more-info-list-item">
                        <h2>Services</h2>
                        <ul>
                            <a href="/pages-html/artifical.html">
                                <li>Artificial Intelligence</li>
                            </a>
                            <a href="/pages-html/cloud.html">
                                <li>Cloud</li>
                            </a>
                            <a href="/pages-html/services-consulting.html">
                                <li>Consulting</li>
                            </a>
                            <a href="/pages-html/cybersec.html">
                                <li>Cybersecurity</li>
                            </a>
                            <a href="/pages-html/businessoper.html">
                                <li>Cognitive Business Operations</li>
                            </a>
                            <a href="/pages-html/data.html">
                                <li>Data & Analytics</li>
                            </a>
                            <a href="/pages-html/enterprises.html">
                                <li>Enterprises solution</li>
                            </a>
                            <a href="/pages-html/network.html">
                                <li>Network Solution and Services</li>
                            </a>
                        </ul>
                    </div>

                    <div className="more-info-list-item">
                        <h2>More Information</h2>
                        <ul>
                            <a href="/pages-html/about.html">
                                <li>About us </li>
                            </a>
                            <a href="/pages-html/career.html">
                                <li>Career</li>
                            </a>
                            <a href="/pages-html/contact.html">
                                <li>Contact us </li>
                            </a>
                            <a href="/pages-html/privacy.html">
                                <li>Privacy Notice </li>
                            </a>
                            <a href="/pages-html/disclaimer.html">
                                <li>Terms & Condition </li>
                            </a>
                        </ul>
                    </div>
                </div>


                <div className="footer-last-container">

                    <div className="footer-last-content">
                        <img src="../assets/images/wyreflow.image.png" alt="company-logo" />
                        <p>©️ 2026 Wyreflow. All Rights Reserved</p>
                    </div>

                    <div className="social-icon-container">
                        <span><a href="https://www.facebook.com/wyreflowtechnologies/"><img src="../assets/images/fb-image.png" alt="" /></a></span>
                        <span><a href="https://www.instagram.com/wyreflow_technologies/"><img src="../assets/images/insta-image.png" alt="" /></a></span>
                        <span><a href="https://www.youtube.com/@WyreflowTechnologies"><img src="../assets/images/yt-image.png" alt="" /></a></span>
                        <span><a href="https://www.linkedin.com/company/wyreflow-technologies"><img src="../assets/images/linkedin-image.png" alt="" /></a></span>
                    </div>
                </div>

            </div>

        </footer>
    );
};

export default Footer;

