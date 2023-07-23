import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faAddressCard
} from '@fortawesome/free-solid-svg-icons';
import { Image, Row, Col, Container, Spinner } from 'react-bootstrap';
import '../css/app.css';
import ProfilePic from '../img/ausprofile.jpg';


function Intro() {
    return (
        <Container>
            <Row className="align-items-center">
                <FontAwesomeIcon size="lg" icon={faAddressCard} />
                <h2>About Me</h2>
            </Row>
            <Row>
                <Col xs={12} xl={4} id="profile-pic">
                    <Row className="align-items-center h-100">
                        <Image fluid src={ProfilePic} className="rounded-image" />
                    </Row>
                </Col>
                <Col xs={12} xl={8}>
                    
                    <p>
                        Hello! I'm Emily Thomas but everyone I know calls me Em! 
                    </p>
                    <p className="grey-text ml-3">
                        (and I like to do lines of code at night)
                    </p>
                    <p>
                        I'm a Technologist, coder, analyst, and I love playing with technology and exploring how data and systems work together. This has involved everything from the hardware level, such as setting up headless crypto miners and wiring microcontrollers, to upper levels such as charting data for analysis.
                    </p>
                    <p className="mt-5">
                        It all started a long time ago, in a galaxy very, very close... 
                    </p>
                    <p>
                        My father would always let me take apart broken electronics to satisfy my curiosity. In school I would often code choose-your-own text adventure games using the built-in Windows BATCH. In the Army I learned basic electronics and signal-flow in the telecom field. After the Army I learned a good deal of front-end stack, Javascript, jQuery, leading on to React when it became popular. I worked as a freelance front-end website developer in between other jobs.
                    </p>
                    
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <p>
                        Since then I've worked odd jobs at Deer Valley Ski Resort where I wrote them a lightning-fast internal utility for their nametag system(demo below), and various construction and agriculture jobs where among other tasks, I would repair or install electrical devices(cameras, ethernet cable, dashboard switches). I've been learning machine learning and neuro-evolution, and am creating my own Node.js library from scratch just to prove I understand the base concepts.
                    </p>
                    <p className="mt-5">
                        And as you can imagine, I am the family's IT gal. They call me the computer whisperer.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}
  
  export default Intro;
  