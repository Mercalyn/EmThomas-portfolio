import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faAddressCard
} from '@fortawesome/free-solid-svg-icons';
import { Image, Row, Col, Container, Spinner } from 'react-bootstrap';
import '../css/app.css';
import ProfilePic from '../img/ausprofile.jpg';
import CampPic from '../img/5.jpg';
import TitlePlate from './TitlePlate.js';


function Intro() {
    return (
        <Container className="mt-5">
            <TitlePlate text="About Me" icon={faAddressCard} variant="float-up-down-a" />
            <Row>
                
                <Col xs={0} xl={2}></Col>
                <Col xs={12} xl={4}>
                    <Row className="shaded-area mr-3">
                        <p>
                            Hello! I'm Em Thomas. 
                        </p>
                        <p>
                            I'm a technologist, coder, analyst, and explorer of how to make systems function on a budget. I have a passion for learning new things and solving problems. 
                        </p>
                        <p>
                            My family calls me the computer whisperer.
                        </p>
                    </Row>
                </Col>
                <Col xs={12} xl={6} id="profile-pic">
                    <Row className="align-items-center h-100">
                        <Image fluid src={CampPic} className="rounded-image" />
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}
  
  export default Intro;
  