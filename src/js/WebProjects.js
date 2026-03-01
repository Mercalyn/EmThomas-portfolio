import React, { 
    useState,
    lazy,
    Suspense,
    useEffect,
} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import { 
    Row, 
    Col, 
    Container,
    Button
} from 'react-bootstrap';
import {
    Link,
    Routes,
    Route
} from "react-router-dom";
import '../css/app.css';
import TitlePlate from './TitlePlate.js';

import ProjectDV from '../projects/dvnametags/js/App.js';
import ProjectDVHomePage from '../projects/dvnametags/js/HomePage.js';
import ProjectDVStatusPage from '../projects/dvnametags/js/StatusPage.js';
import ProjectDVCreatePage from '../projects/dvnametags/js/CreateTagPage.js';

const ProjectThis = lazy( () => import('../projects/this/Proj.js'));
const ProjectRune = lazy( () => import('../projects/rsgold/RSGold.js'));
const ProjectMarket = lazy( () => import('../projects/market/App.js'));

// lazy load spinner
const renderLoader = (
    <span className="sr-only">
        Loading...
    </span>
);

function WebProjects() {
    const projectListArray = [{
        label: "This Site",
        desc: "2022. Updated 2026.",
        url: "/",
    },{
        label: "Deer Valley",
        desc: "An internal website I made for Deer Valley Ski Resort Employees to order nametags. 2019-present.",
        url: "dv",
    },{
        label: "Runescape",
        desc: "A site I made for some family and myself to sell in game currency. 2014.",
        url: "rs",
    },{
        label: "Market Game",
        desc: "A pseudo-market game where you can trade a fake currency. 2022.",
        url: "mkt",
    }];


    // dynamically set description and change .active class on link button
    const[description, setDescription] = useState("");
    const[btnActiveIndex, setBtnActiveIndex] = useState(0);
    const changeActivePage = (description, indexOfElement) => {
        setDescription(description);
        setBtnActiveIndex(indexOfElement);
    };

    return (
        <Container>
            <TitlePlate text="Web Projects" icon={faNetworkWired} variant="float-up-down-a" />
            <Row>
                <Col xs={2} id="project-list-parent">
                {
                    projectListArray.map((item, index) => 
                        <Row key={index}>
                            <Link to={item.url} onClick={() => changeActivePage(item.desc, index)} className={"btn button-border w-100 mt-2 pt-2 pb-0" + (index === btnActiveIndex ? " active" : "")}>
                                <h4>
                                    {item.label}
                                </h4>
                            </Link>
                        </Row>
                    )
                }
                </Col>
                <Col xs={10} id="active-page-parent" className="p-0">
                    <Routes>
                        <Route path="/" element={
                            <Suspense fallback={ renderLoader }>
                                <ProjectThis />
                            </Suspense>
                        } />
                        <Route path="/dv" element={<ProjectDV />}>
                            <Route path="" element={<ProjectDVHomePage />} />
                            <Route path="status" element={<ProjectDVStatusPage />} />
                            <Route path="create/:id" element={<ProjectDVCreatePage />} />
                        </Route>
                        <Route path="/rs" element={
                            <Suspense fallback={ renderLoader }>
                                <ProjectRune />
                            </Suspense>
                        } />
                        <Route path="/mkt" element={
                            <Suspense fallback={ renderLoader }>
                                <ProjectMarket />
                            </Suspense>
                        } />
                    </Routes>
                </Col>
            </Row>
        </Container>
    );
}
  
  export default WebProjects;
  