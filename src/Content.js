import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import brands from '@fortawesome/fontawesome-free-brands'
import ScrollAnimation from 'react-animate-on-scroll';
import Me from './images/me.JPG';
import "animate.css/animate.min.css";
import './App.css';


const Content = () => {
    return (
        <div className="main">
            <div className="aboutMe">
                <ScrollAnimation className="meContainer" animateIn="fadeIn" animateOut="fadeOut">
                    <div className="textWrapper">
                        <section className="text">
                            <h1 className="aboutHead">About Me</h1>
                            <p className="aboutText">I'm a V School Graduate with a background in the JavaScript MERN stack (Mongo, Express, ReactJS, Node.js). Currently interning with Live Auctioneers in Salt Lake City, Utah. My passion for Web Development stems from the challenge and rewards that come after overcoming a problem.</p>
                        </section>
                    </div>
                    <div className="aboutImageWrapper">
                        <img className="aboutImage" src={Me} alt="" />
                    </div>
                    <div className="linksWrapper">
                        <div className="links">
                            <a href="https://github.com/brickmaker17"><FontAwesomeIcon size="2x" icon={["fab", "github"]} /></a>
                            <a href="https://www.linkedin.com/in/lukebarrett1/"><FontAwesomeIcon size="2x" icon={["fab", "linkedin"]} /></a>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    )

}

export default Content;