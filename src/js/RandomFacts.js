import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faShuffle,
    faPersonSkiing,
    faGamepad,
    faFilm
} from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Container } from 'react-bootstrap';
import '../css/app.css';

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
                <h2>Other Random Facts &nbsp;&#10097;&#10097;&nbsp;</h2>
            </Row>
            <Row>
                <p className="grey-text">
                    (since you are still reading)
                </p>
            </Row>
            {
                factsArray.map((item, index) => 
                    <Row className="align-items-center" key={index}>
                        <Col xs={1}>
                            <Row className="justify-content-end">
                                <FontAwesomeIcon size="sm" icon={item.icon} />
                            </Row>
                        </Col>
                        <Col xs={11}>
                            <p>{item.text}</p>
                        </Col>
                    </Row>
                )
            }
        </Container>
    );
}
  
  export default Contact;
  