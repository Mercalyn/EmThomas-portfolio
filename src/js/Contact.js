import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faMessage,
    faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import { Button, Row, Col, Container } from 'react-bootstrap';
import { 
    faGithub,
    faLinkedin,
    faInstagram,
    faSteamSymbol,
} from '@fortawesome/free-brands-svg-icons';
import '../css/contact.css';
import '../css/app.css';

function Contact() {
    const contactArray = [{
        icon: faGithub,
        name: "Github",
        link: "https://github.com/Mercalyn",
    },{
        icon: faLinkedin,
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/emily-thomas-05416547/",
    },{
        icon: faInstagram,
        name: "Instagram",
        link: "https://www.instagram.com/rave_donut/",
    },{
        icon: faSteamSymbol,
        name: "Steam",
        link: "https://steamcommunity.com/id/Mercalus/",
    }];/*,{
        icon: faEnvelope,
        name: "Email",
        link: "abcd.com",
    }];*/

    return (
        <Container>
            <Row className="align-items-center">
                <Col xs={"auto"}>
                    <FontAwesomeIcon size="lg" icon={faMessage} />
                </Col>
                <Col xs={"auto"}>
                    <h2>Contact Me</h2>
                </Col>
                <Col>
                    <Row className="justify-content-around mt-2">
                        {
                            contactArray.map((item, index) => 
                                <Col xs={2} className="link-col p-0" key={"contact-" + index}>
                                    <a href={item.link} target="_blank">
                                        <Row className="justify-content-center">
                                            <FontAwesomeIcon size="xl" icon={item.icon} />
                                        </Row>
                                        <Row className="justify-content-center">
                                            <h3>{item.name}</h3>
                                        </Row>
                                    </a>
                                </Col>
                            )
                        }
                    </Row>
                
                </Col>
            </Row>
        </Container>
    );
}
  
  export default Contact;
  