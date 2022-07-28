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
import Employer from './Employer.js';
import RandomFacts from './RandomFacts.js';
import PageInfo from './PageInfo.js';
//import SVGSpaceship from './SVGSpaceship.js';
//import Projects from '';


// lazy imports
const Projects = lazy(() => import('./Projects.js'));
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
            <Row className="d-flex flex-row justify-content-left">
                <Col className="d-none d-md-flex" xs={0} md={3}>
                    <Suspense fallback={renderLoader}>
                        <SVGSpaceship />
                    </Suspense>
                </Col>
                <Col className="p-0 m-0 d-flex flex-column justify-content-between" xs={12} md={9} id="main-content">
                    <Suspense fallback={renderLoader}>
                        <Intro />
                    </Suspense>
                    <Contact />
                    <Suspense fallback={renderLoader}>
                        <Projects />
                    </Suspense>
                    <TechSkills />
                    <Employer />
                    <Contact />
                    <RandomFacts />
                    <PageInfo />
                </Col>
            </Row>
        </Container>
    );
}

export default App;
