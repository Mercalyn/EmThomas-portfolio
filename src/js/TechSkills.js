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
        text: "I know common libraries such as NPM, Express, Axios, Socket.io, and Crypto(for hashing). I spend the majority of my time now in Node, analyzing market trends, or writing wrappers for CRUD utilities(create, read, update, and delete) for convenience to the coder.",
    },{
        title: "Database",
        text: "SQLite3 is my favourite go-to for light db requirements, I have also used MySQL, and Google Firestore in the past. The extent of my SQL knowledge extends through to table joining, as any data operation past this will most likely benefit from using GPU processing.",
    },{
        title: "Machine Learning",
        text: "Played around a lot with Supervised Machine Learning in tensorflow.js using n-dimensional tensors. I'm creating my own neuro-evolution library in Node.js that will use a slightly more dynamic neural network allowing for multiple squash functions for each different neuron, as well as a residual system that 'passes through' data on deeper layers when it is just starting out.",
    },{
        title: "GPU Processing in Node.js",
        text: "I plan data-heavy projects from the start using GPGPU(general purpose computing with graphics processing unit) and texture pipelining. This a speedy parallel-thread methodology instead of the slower, recursive loop methodology that only processes things one at a time. When you do data analysis, you want any kind of advantages there are for a reasonable cost.",
    },{
        title: "Graphing Insights",
        text: "Plotting and graphing data to create visual outputs is the best way to develop keen insights and correlations that any business might like to see. KPIs(Key Performance Indicators) for example must be derived from some form of data, and my belief is that while you generate reports you may as well generate any kind of insight that leadership likes to look at.",
    }];

    return (
        <Container>
            <Row className="align-items-center">
                <FontAwesomeIcon size="lg" icon={faListCheck} />
                <h2>Tech Skills</h2>
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
  