import React, { lazy, Suspense, useEffect } from 'react';
import '../css/app.css';
import { 
    Container, 
    Row, 
    Col,
    Spinner
} from 'react-bootstrap';
import Contact from './Contact.js';
import TechSkills from './TechSkills.js';
import Status from './Status.js';
import PersonalHobbies from './PersonalHobbies.js';
import PageInfo from './PageInfo.js';


// lazy imports
const WebProjects = lazy(() => import('./WebProjects.js'));
const EngProjects = lazy(() => import('./EngProjects.js'));
const Intro = lazy(() => import('./Intro.js'));
const SVGSpaceship = lazy(() => import('./SVGSpaceship.js'));

// lazy load spinner
const renderLoader = (
    <Spinner variant="danger" animation="border" role="status">
      <span className="sr-only">
        Loading...
      </span>
    </Spinner>
);


function App(){
    return(
        <Container fluid>
            <Row>
                <Col className="d-flex" xs={12} md={3}>
                    <Suspense fallback={renderLoader}>
                        <SVGSpaceship />
                    </Suspense>
                </Col>
                
            </Row>
            <Row className="d-flex flex-row justify-content-center">
                <Col className="p-0 m-0 d-flex flex-column justify-content-between" xs={12} md={9} id="main-content">
                    <Suspense fallback={renderLoader}>
                        <Intro />
                    </Suspense>
                    <Contact />
                    
                    <Suspense fallback={renderLoader}>
                        <WebProjects />
                    </Suspense>
                    <Suspense fallback={renderLoader}>
                        <EngProjects />
                    </Suspense>
                    
                    <Status />
                    <Contact />
                    <PersonalHobbies />
                    <PageInfo />
                </Col>
            </Row>
        </Container>
    );
}

export default App;
