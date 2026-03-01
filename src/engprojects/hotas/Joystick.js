import React from 'react';
import {
    Container,
    Image,
    Row,
    Col,
} from 'react-bootstrap';
import JoystickAVid from './a.webm';
import JoystickBVid from './b.webm';
import JoystickCVid from './c.webm';

function Joystick() {
    return (
        <Container id="main-container-proj">
            <Row className="mb-3 justify-content-center">
                <video
                    autoPlay
                    loop    
                    muted   
                    playsInline
                    style={{width: '100%', borderRadius: '5px'}}
                >
                    <source src={JoystickAVid} type="video/webm" />
                    Your browser does not support WebM videos.
                </video>
            </Row>
            <Row>
                <Col className="">
                    <p>
                        This custom flight controller is powered via an Arduino Micro, built with a custom 3d-printed frame gimbal, and leftover electronics and cabling. It uses the Arduino Joystick library to interface with the computer as a standard gamepad.
                    </p>
                </Col>
            </Row>
            <Row className="mb-3 justify-content-center">
                <video
                    autoPlay
                    loop    
                    muted   
                    playsInline
                    style={{width: '100%', borderRadius: '5px'}}
                >
                    <source src={JoystickBVid} type="video/webm" />
                    Your browser does not support WebM videos.
                </video>
            </Row>
            <Row>
                <Col className="">
                    <p>
                        Working joystick in Flight Simulator 2020.
                    </p>
                </Col>
            </Row>
            <Row className="mb-3 justify-content-center">
                <video
                    autoPlay
                    loop    
                    muted   
                    playsInline
                    style={{width: '100%', borderRadius: '5px'}}
                >
                    <source src={JoystickCVid} type="video/webm" />
                    Your browser does not support WebM videos.
                </video>
            </Row>
            <Row>
                <Col className="">
                    <p>
                        Kerbal Space Program.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}
  
export default Joystick;
  