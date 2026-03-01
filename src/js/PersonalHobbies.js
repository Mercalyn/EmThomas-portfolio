import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faShuffle,
    faPersonSkiing,
    faGamepad,
    faFilm
} from '@fortawesome/free-solid-svg-icons';
import { Image, Col, Row, Container } from 'react-bootstrap';
import '../css/app.css';
import SkiPic from '../img/ski.jpg';
import ScubaPic from '../img/scuba.jpg';
import FarmPic from '../img/farm.jpg';
import DesertPic from '../img/desert.jpg';
import TitlePlate from './TitlePlate.js';

function Contact() {
    const factsArray = [{
        icon: faPersonSkiing,
        text: "I love skiing and consider myself more of a winter person than a summer person! What I like most about skiing is the huge amount of variety there is, whether you are carving on a blue or hitting bumps on a black diamond. It's a challenging sport that always has me on edge(pun intended)!",
    },{
        icon: faGamepad,
        text: "I'm an avid PC gamer and will play just about anything, including GTA V, Borderlands, Stardew Valley, Farming Simulator, and Age of Empires."
    },{
        icon: faFilm,
        text: "I love screenwriting, animating, and editing, and I'm writing an animation utility that will help me automate some of the tedious animation so I can direct longer projects with less effort!"
    }];

    return (
        <Container className="mt-5">
            <TitlePlate text="Personal Hobbies" icon={faShuffle} variant="float-up-down-a" />
            
            <Row className="align-items-center mt-0 p-4">
                <Col xs={12}>
                    <Image fluid src={DesertPic} className="rounded-image w-100" />
                </Col>
            </Row>
            <Row className="justify-content-center mt-n4">
                <Col xs={7} className="justify-content-center shaded-area">
                    <p>Writing and Filmmaking are passions I often pursue in my free time. The photo is from an idea I had about the last pepper plant on Earth. (This July, things are going to get spicy!)</p>
                </Col>
            </Row>
            
            
            <Row className="align-items-center mt-0 p-4">
                <Col xs={12} lg={3}>
                    <Row className="justify-content-end">
                        <Image fluid src={ScubaPic} className="rounded-image w-100" />
                    </Row>
                </Col>
                <Col xs={12} lg={9}>
                    <Row className="shaded-area ml-3">
                        <p>I'm a freshly certified diver who loves to just glide around with the fishies.</p>
                        <p>Don't ask me to navigate, though, you might end up in a different ocean than you started! </p>
                    </Row>
                </Col>
            </Row>
            
            
            <Row className="align-items-center mb-4 mt-n5 p-4">
                <Col xs={12} lg={9}>
                    <Row className="shaded-area mr-3">
                        <p>Agricultural research is something I plan on moving towards eventually. The idea is to marry machine learning optimization methods to real life agricultural problems such as technological accessibility, modular and open-sourced agricultural software, and algae biofuels.</p>
                    </Row>
                </Col>
                <Col xs={12} lg={3}>
                    <Row className="justify-content-end">
                        <Image fluid src={FarmPic} className="rounded-image w-100" />
                    </Row>
                </Col>
            </Row>
            
            
        </Container>
    );
}
  
  export default Contact;
  