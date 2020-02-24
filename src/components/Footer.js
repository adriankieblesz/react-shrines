import React from 'react';
import './Footer.scss';
const Footer = () => {
    return (
        <footer>
            <ul>
                <li>
                    <p>
                        Majority of icons were taken from <a className="icons" href="https://icons8.com/">icons8.com</a>
                    </p>
                </li>
                <li>
                    <p>All pictures of temples has been made by author of website</p>
                </li>
                <li>
                    <p className="repository-info">
                        <img src={require(`../images/Icons/github.png`)} alt="github-icon" />
                        <a className="repository-link" href="https://github.com/adriankieblesz/react-shrines">Github repository for this project</a>
                    </p>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;