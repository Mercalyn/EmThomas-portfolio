import React from 'react';
import {
    Container,
    Image,
    Row,
    Col,
} from 'react-bootstrap';
import GPUImg from './gpuloop.jpg';
import VentImg from './vent.jpg';

function HotCold() {
    return (
        <Container id="main-container-proj">
            <Row className="mt-3 mb-3 align-items-center justify-content-center">
                <Col xs={11} className="mr-0 pr-0">
                    <Image fluid src={GPUImg} className="rounded-image" />
                </Col>
                <Col xs="auto">
                <p>
                    A custom water loop using a garden pump, a 240mm radiator, and 10mm tubing.
                </p>
                </Col>
            </Row>
            <Row className="mt-3 mb-3 align-items-start justify-content-center">
                <Col xs={4} className="mr-0 pr-0">
                    <Image fluid src={VentImg} className="rounded-image" />
                    
                </Col>
                <Col xs={8} className="">
                <p>
                    My PC gets hot. Then my room gets hot! Not so bad in winter, but egregious for summertime. I have constructed a custom 'heat delete' system for containing and ejecting my PC's hot air outside where it belongs!
                    
                    <ul className="ml-4 pt-0">
                        <li>
                            1. The garden pump circulates hot GPU water to the radiator which is mounted to the vent.
                        </li>
                        <li>
                            2. A large wooden box contains the entire PC so it can't spread its heat like contamination.
                        </li>
                        <li>
                            3. The radiator ejects the heat.
                        </li>
                    </ul>
                </p>
                <p>
                    The vent was made of pine and cedar, measured to slot right into the window frame. Built using scrap lumber from my dads woodshop. The slats are actually angled to prevent sprinkler water from getting in, and were 3d printed.
                </p>
                </Col>
            </Row>
        </Container>
    );
}
  
export default HotCold;
  