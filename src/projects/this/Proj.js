import React from 'react';
import {
    Container,
    Image,
    Row,
    Col,
} from 'react-bootstrap';
import './main.css';
import EImg from './faviconlg.png';

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
                        (hooks) for the functionality and quick loading times, 
                        <span className="emphasis-proj"> BOOTSTRAP</span> for the responsive layout, 
                        <span className="emphasis-proj"> SVG + CSS ANIMATIONS</span> for the animated spaceship and background, and
                        <span className="emphasis-proj"> FONTAWESOME + GOOGLE FONTS</span> for the custom fonts and icons.
                    </p>
                    <p className="green-text">
                        Please view my projects in the left-hand panel!
                    </p>    
                </Col>
            </Row>
        </Container>
    );
}
  
export default Projects;
  