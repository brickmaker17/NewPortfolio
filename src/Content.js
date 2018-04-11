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
                            <p className="aboutText">I am a VSchool Graduate who learned the Mern Stack. I am currently interning at a company called Live Auctioneers. My passion for Web Development comes from the challenge and reward that it brings when you are able to overcome the problems that are presented.</p>
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