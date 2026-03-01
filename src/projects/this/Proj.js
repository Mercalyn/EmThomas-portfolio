import React from 'react';
import {
    Container,
    Image,
    Row,
    Col,
} from 'react-bootstrap';
import './main.css';
import EImg from './faviconlg2.png';

function Projects() {
    return (
        <Container id="main-container-proj">
            <Row className="mt-3 mb-3 align-items-center">
                <Col xs={2} className="mr-0 pr-0">
                    <Image fluid src={EImg} />
                </Col>
                <Col className="">
                    <p>
                        This site was programmed using <span className="emphasis-proj">REACT </span>
                        for the functionality and quick loading times, and
                        <span className="emphasis-proj"> BOOTSTRAP</span> for the responsive layout. 
                        <span className="emphasis-proj"> PHOTOSHOP </span> was utilized for the spaceship and all images.
                    </p>
                    <p>
                        The website hosts as much interactivity as could be delivered on a strict time budget of 2 weeks. Please enjoy your space coffee while you peruse my projects!
                    </p>
                </Col>
            </Row>
        </Container>
    );
}
  
export default Projects;
  