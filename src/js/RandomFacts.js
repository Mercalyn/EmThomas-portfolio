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
        <Container>
            <Row className="align-items-center">
                <FontAwesomeIcon size="lg" icon={faShuffle} />
                <h2>Random Facts</h2>
            </Row>
            <Row>
                <p className="grey-text">
                    (since you are still reading)
                </p>
            </Row>
            <Row className="align-items-center mt-n5 p-4">
                <Col xs={12} lg={9}>
                    <p>Skiing is my all-time activity that I live for, and consider myself more of a winter person than a summer person. There is something magical about braving a cold, windy mountain while blasting ice crystals in your face at high speeds. Also, hot cocoa.</p>
                    <p>It's a challenging sport that always has me on edge(pun intended)!</p>
                </Col>
                <Col xs={12} lg={3}>
                    <Row className="justify-content-end">
                        <Image fluid src={SkiPic} className="rounded-image w-100" />
                    </Row>
                </Col>
            </Row>
            <Row className="align-items-center mt-n5 p-4">
                <Col xs={12} lg={3}>
                    <Row className="justify-content-end">
                        <Image fluid src={ScubaPic} className="rounded-image w-100" />
                    </Row>
                </Col>
                <Col xs={12} lg={9}>
                    <p>I'm a freshly certified diver who loves to just glide around with the fishies.</p>
                    <p>Don't ask me to navigate, though, you might end up in a different ocean than you started! </p>
                </Col>
            </Row>
            <Row className="align-items-center mb-4 mt-n5 p-4">
                <Col xs={12} lg={9}>
                    <p>Agricultural research is something I plan on moving towards eventually. The idea is to marry machine learning optimization methods to help solve some of the problems facing modern farmers, such as technological accessibility, modular and open-sourced agricultural software, and independence from expensive fertilizers.</p>
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
  