import React from 'react';
import { 
    Container,
    Row,
    Col,
    Button
} from 'react-bootstrap';
import {
    Link
} from "react-router-dom";
import '../css/nav.css';
import CreatePreviewImage from './CreatePreviewImage.js';


function HomePage() {
    // here is where we list out the starting tags, data format first
    const startingTags = [{
        colorCode: 1,
        name: "Green Tag",
        secondLine: "Indoor",
        thirdLine: ""
    },{
        colorCode: 2,
        name: "Green Tag Deerhead",
        secondLine: "Indoor",
        thirdLine: ""
    },{
        colorCode: 3,
        name: "Bronze Tag",
        secondLine: "Indoor Lodges",
        thirdLine: ""
    },{
        colorCode: 15,
        name: "Black Tag",
        secondLine: "Indoor",
        thirdLine: ""
    },{
        colorCode: 14,
        name: "Black Diamond Tag",
        secondLine: "-----------------------------",
        thirdLine: "Black Diamond Lodge"
    },{
        colorCode: 16,
        name: "Club 1981 Tag",
        secondLine: "Club 1981",
        thirdLine: ""
    },{
        colorCode: 4,
        name: "Outdoor Velcro Tag",
        secondLine: "Regular Outdoor",
        thirdLine: ""
    },{
        colorCode: 12,
        name: "Ski Patrol",
        secondLine: "Ski Patrol Only",
        thirdLine: ""
    },{
        colorCode: 13,
        name: "Old Black Card Tags",
        secondLine: "Old Under Armour Window Tags",
        thirdLine: ""
    }];

    return (
        <Container className="mt-1 justify-content-center">
            <Row className="justify-content-center nav-h4-bar-bg">
                <Col xs="auto">
                    <h4 className="nav-h4-bar">
                        CLICK TAG TYPE TO GET STARTED or GOTO
                    </h4>
                </Col>
                <Col xs="auto">
                    <Link to="status">
                        <Button>
                            ORDER STATUS
                        </Button>
                    </Link>
                </Col>
            </Row>
            <Row className="justify-content-between mt-3">
                {
                    startingTags.map(( mapItem, index ) => 
                        <Col className="p-0 mb-1 justify-content-center start-tag-container" xs="auto" key={ index }>
                            <div className="start-tag">
                                <Link to={"create/" + mapItem.colorCode}>
                                    <CreatePreviewImage data={ mapItem } />
                                </Link>
                            </div>
                        </Col>
                    )
                }
            </Row>
        </Container>
    );
}
  
export default HomePage;