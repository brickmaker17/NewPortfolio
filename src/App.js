import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';
import ScrollMagic from 'scrollmagic';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Content from './Content';
import Backgrounds from './images/Background.png';
import Layer from './images/Layer.png';
import Layer1 from './images/Layer1.png';
import Layer2 from './images/Layer2.png';
import Layer3 from './images/Layer3.png';
import Layer4 from './images/Layer4.png';
import Layer5 from './images/Layer5.png';
import Moon from './images/Moon.png';
import './App.css';

library.add(fab);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.controller = new ScrollMagic.Controller();
    this.state = {
      isTop: ''
    };
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    var width = window.innerWidth,
    height = window.innerHeight;
    console.log( width + ' : ' + height );

    if (width >= 769) {
    new ScrollMagic.Scene({triggerElement: "#trigger", duration: 175})
        .on("enter leave", this.onScroll)
        .addTo(this.controller);
    } else if(width <= 768 && 376 < width) {
      new ScrollMagic.Scene({triggerElement: "#trigger", duration: 70})
        .on("enter leave", this.onScroll)
        .addTo(this.controller);
    } else if (width <= 375) {
      new ScrollMagic.Scene({triggerElement: "#trigger", duration: 42})
        .on("enter leave", this.onScroll)
        .addTo(this.controller);
    }
}

onScroll = (e) => {
    let newisTop = '';
    if (e.type === "enter") {
      newisTop = <img src={`${Layer5}`} />;
    }else {
      newisTop = <img src={`${Moon}`} />;
    }
    this.setState({ isTop: newisTop });
};

  render() {
    const {isTop} = this.state;
    return (
      <div>
        <div className="parallaxLayer">
          <img className="mountain" src={Backgrounds} alt="" />
        </div>
        <div className="back">
          {isTop}
        </div>
        <div className="parallaxLayer parallaxLayer1">
          <img className="mountain" src={Layer4} alt="" />
        </div>
        <div className="parallaxLayer parallaxLayer1">
          <img className="mountain" src={Layer3} alt="" />
        </div>
        <div className="parallaxLayer parallaxLayer2">
          <img className="mountain" src={Layer2} alt="" />
        </div>
        <Parallax strength={600}>
          <Background>
            <div className="heading">
              <div className="box">
                <h1 className="name">Luke Barrett</h1>
                <h4 className="title">Web Developer</h4>
              </div>
            </div>
          </Background>
          <div className="parallaxLayer parallaxLayer3">
            <img className="mountain" src={Layer1} alt="" />
          </div>
          <Parallax strength={400}>
            <Background>
              <img className="cloud" src={Layer4} alt="" />
            </Background>
            <img className="mountain" src={Layer} alt="" />
          </Parallax>
        </Parallax>
        <Content />

      </div>
    );
  }
}

