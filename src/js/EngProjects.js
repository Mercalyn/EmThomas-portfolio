import React, { 
    useState,
    lazy,
    Suspense,
    useEffect,
} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGears } from '@fortawesome/free-solid-svg-icons';
import { 
    Row, 
    Col, 
    Container,
    Button
} from 'react-bootstrap';
import '../css/app.css';
import TitlePlate from './TitlePlate.js';

const ProjectJoystick = lazy( () => import('../engprojects/hotas/Joystick.js'));
const ProjectML = lazy( () => import('../engprojects/ml/MachineLearn.js'));
const ProjectHotCold = lazy( () => import('../engprojects/gpu/HotCold.js'));

// lazy load spinner
const renderLoader = (
    <span className="sr-only">
        Loading...
    </span>
);

function Projects() {
    const projectListArray = [{
        label: "Flight Controller",
        url: "hotas",
        page: <ProjectJoystick />
    },{
        label: "Machine Learning",
        url: "ml",
        page: <ProjectML />
    },{
        label: "PC Heat Delete",
        url: "gpu",
        page: <ProjectHotCold />
    }];


    // dynamically set description and change .active class on link button
    const[btnActiveIndex, setBtnActiveIndex] = useState(0);
    const[activePage, setActivePage] = useState(projectListArray[0].page);
    
    const changeActivePage = (listIndex) => {
        const thisObj = projectListArray[listIndex];
        
        setBtnActiveIndex(listIndex);
        setActivePage(thisObj.page);
    };

    return (
        <Container className="w-100">
            <TitlePlate text="Engineering Projects" icon={faGears} variant="float-up-down-b" />
            <Row>
                <Col xs={3} id="project-list-parent">
                {
                    projectListArray.map((item, index) => 
                        <Row key={index}>
                            <Button onClick={() => changeActivePage(index)} className={"button-border w-100 mt-2 pt-2 pb-0" + (index === btnActiveIndex ? " active" : "")}>
                                <h4>
                                    {item.label}
                                </h4>
                            </Button>
                        </Row>
                    )
                }
                </Col>
                
                <Col xs={9} id="active-page-parent" className="p-0">
                    {activePage}
                </Col>
            </Row>
        </Container>
    );
}
  
  export default Projects;
  