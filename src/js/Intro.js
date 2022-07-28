import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faAddressCard
} from '@fortawesome/free-solid-svg-icons';
import { Image, Row, Col, Container, Spinner } from 'react-bootstrap';
import '../css/app.css';
import ProfilePic from '../img/1000xxprofile.jpg';


function Intro() {
    return (
        <Container>
            <Row>
                <Col xs={12} xl={4} id="profile-pic">
                    <Row className="align-items-center h-100">
                        <Image fluid src={ProfilePic} className="rounded-image" />
                    </Row>
                </Col>
                <Col xs={12} xl={8}>
                    <Row className="align-items-center">
                        <FontAwesomeIcon size="lg" icon={faAddressCard} />
                        <h2>About Me &nbsp;&#10097;&#10097;&nbsp;</h2>
                    </Row>
                    <p>
                        Hello! I'm Emily Thomas or 'Em' for short.
                    </p>
                    <p className="grey-text ml-3">
                        (and I like to do lines of code at night)
                    </p>
                    <p>
                        I'm a Software Developer and I like exploring data and creating unique websites. 
                        I started programming about 14 years ago when I took my first web design course in High 
                        School. I've explored many topics since then, delving into web design, investigating 
                        how pages become responsive, quick, and better-looking (especially on mobile devices!). 
                        More recently I've been exploring data structures like machine learning, and creating 
                        behind-the-scenes utilities that are lightning fast, have a self-explained interface, 
                        and increase productivity in an organization. 
                    </p>
                    <p>
                        In short, I'm a full stack developer, and 
                        I'm able to fill many tech-oriented roles. I love learning new things 
                        and tackling challenges.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}
  
  export default Intro;
  