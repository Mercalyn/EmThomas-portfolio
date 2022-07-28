import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faListCheck
} from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Container } from 'react-bootstrap';
import { 
    faGithub,
    faLinkedin,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import '../css/app.css';

function Contact() {
    const techArray = [{
        title: "Front End Stack",
        text: "The great front-end foundation: HTML, CSS, LESS, and vanilla Javascript. I use many time-saving libraries such as Bootstrap and chart.js.",
    },{
        title: "Responsiveness",
        text: "I believe that websites should load almost instantaneously, and dynamically fit whatever size of monitor the user has.",
    },{
        title: "jQuery",
        text: "Some companies still rely on jQuery heavily, and those who learned jQuery back in the day will never forget how to use it.",
    },{
        title: "Node.js",
        text: "I know common libraries such as NPM, Express, Axios, Socket.io, and Crypto(for hashing). I spend the majority of my time now in Node, analyzing market trends, or writing wrappers for CRUD utilities(create, read, update, and delete).",
    },{
        title: "Database",
        text: "SQLite3 is a favorite for light db requirements, I have also used MySQL, and Google Firestore in the past. Currently learning GraphQL.",
    },{
        title: "Machine Learning",
        text: "Played around a lot with Supervised Machine Learning in tensorflow.js using 3 and 4-dimensional tensors. I plan on creating my own neuro-evolution library for node in the future.",
    },{
        title: "GPU Processing in Javascript",
        text: "I can create custom GPU kernels using GPU.js, allowing great data processing speed ups by running things in parallel.",
    },{
        title: "Graphing Insights",
        text: "I love graphing data to see what kind of insights can be learned.",
    },{
        title: "Fonts",
        text: "I have used Google Fonts and Font Awesome, which have been reliable fonts and icons.",
    }];

    return (
        <Container>
            <Row className="align-items-center">
                <FontAwesomeIcon size="lg" icon={faListCheck} />
                <h2>Tech Skills &nbsp;&#10097;&#10097;&nbsp;</h2>
            </Row>
            <Row className="d-flex justify-content-around">
                {
                    techArray.map((item, index) => 
                        <Col xs={12} sm={6} md={4} key={index
                        }>
                            <h3 className="tech-skills">{item.title}</h3>
                            <p>{item.text}</p>
                        </Col>
                    )
                }
            </Row>
        </Container>
    );
}
  
  export default Contact;
  