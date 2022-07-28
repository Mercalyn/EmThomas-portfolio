import React, { 
    useState,
    useEffect,
    Suspense,
    lazy
} from 'react';
import { 
    Container, 
    Button,
    Row,
    Col,
    Spinner,
    InputGroup,
    FormControl
} from 'react-bootstrap';
import { 
    Link,
} from "react-router-dom";
import '../css/nav.css';
import '../css/tags.css';
import '../css/admin.css';


// lazy loads
const CreatePreviewImage = lazy( () => import('./CreatePreviewImage.js'));


// lazy load spinner
const renderLoader = (
    <Spinner variant="danger" animation="border" role="status">
      <span className="sr-only">
        Loading...
      </span>
    </Spinner>
);


function StatusPage(){
    // demo: preload with data
    const[dataRow, setDataRow] = useState([{
        id: 0,
        data: {
            color: 3,
            name: "Max Powers",
            titlecity: "Lodging",
            comments: "",
            requestor: "max in lodging",
            status: "Still Working...",
            statusClass: "status-yellow",
            daysAgo: 0.2,
            quantity: "1-PIN + 1-MAGNET",
        }
    },{
        id: 1,
        data: {
            color: 12,
            name: "Lisa Livesaver",
            titlecity: "Head Safety Supervisor",
            comments: "ski patrol at silver lake thx",
            requestor: "Felice",
            thirdline: "Ski Patrol",
            status: "Still Working...",
            statusClass: "status-yellow",
            daysAgo: 1.7,
            quantity: "3-VELCRO",
        }
    },{
        id: 2,
        data: {
            color: 2,
            name: "Dodge Chefman",
            titlecity: "Empire Chef",
            comments: "",
            requestor: "keep @ emp",
            status: "Done!",
            statusClass: "status-green",
            daysAgo: 2.4,
            quantity: "2-PINS",
        }
    }]);

    const clearLocalStorage = () => {
        // clear actual localStorage
        localStorage.clear();

        // emulate clearing tags by setting dataRow to nothing
        setDataRow();
    };

    /*
    useEffect(() => {
    }, [dataRow]);
    */

    // grab localStorage objects after page done
    useEffect(() => {
        // grab any data and jsonify
        let tagData = JSON.parse(localStorage.getItem("tagData"));
        let innerDataRow = [];

        // null catch
        if(tagData == null){
            // no local storage, do nothing
        }else{
            // data exists
            for(let i = 0; i < tagData.length; i++){
                // catch double tag
                innerDataRow.push({
                    id: (3 + i),
                    data: {
                        color: tagData[i].colorCode,
                        name: tagData[i].name,
                        titlecity: tagData[i].titlecity,
                        comments: tagData[i].comments,
                        requestor: tagData[i].requestor,
                        status: "Still working...",
                        statusClass: "status-yellow",
                        daysAgo: 0.1,
                        quantity: tagData[i].quantity,
                    },
                });
            };
            /*
            console.log(oldDataRow);
            */
            setDataRow(current => [...innerDataRow, ...current]);
        };
    }, []);

    // return
    return (
        <Container>
            <Row className="justify-content-between mt-1 nav-h4-bar-bg print-hide">
                <Col className="p-0">
                    <Link to="/dv/">
                        <Button>
                            HOME
                        </Button>
                    </Link>
                </Col>
                <Col>
                    <h4 className="nav-h4-bar">
                        STATUS for UNFINISHED TAGS:
                    </h4>
                </Col>
                <Col className="p-0">
                <InputGroup id="status-search-bar" className="w-100">
                    <FormControl
                        placeholder="search disabled for demo"
                        aria-label="Search"
                        aria-describedby="basic-addon1"
                        id="status-search-bar-inner"
                    />
                </InputGroup>
                </Col>
            </Row>
            {
                (dataRow != undefined) &&
                dataRow.map((mapItem, index) => 
                    <Row className="mt-1 justify-content-between status-row" key={ "status-" + index }>
                        <Col xs={ 12 } md={ 6 } className="px-0">
                            <Suspense fallback={ renderLoader }>
                                <CreatePreviewImage data={{ 
                                    name: mapItem.data.name,
                                    secondLine: mapItem.data.titlecity,
                                    thirdLine: mapItem.data.thirdline,
                                    colorCode: mapItem.data.color
                                }} />
                            </Suspense>
                        </Col>
                        <Col xs={ 12 } md={ 4 } className="px-0">
                            <Row>
                                <Col>
                                    <p className="status-b-col-text">Requestor: { mapItem.data.requestor }</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p className="status-b-col-text">Requested: { mapItem.data.daysAgo } Days Ago</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p className="status-b-col-text">Quantity: { mapItem.data.quantity }</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p className="status-b-col-text">Comments: { mapItem.data.comments }</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={ 12 } md={ 2 } className={mapItem.data.statusClass}>
                            <p>STATUS: {mapItem.data.status}</p>
                        </Col>
                    </Row>
                )
            }
            {
                (dataRow == undefined) &&
                <Row className="justify-content-center py-3">
                    <h3>
                        There are no tags in the system!

                    </h3>
                </Row>
            }
            <Row className="justify-content-center">
                <Button onClick={() => clearLocalStorage()}>Clear Demo local storage</Button>
            </Row>
        </Container>
    );
  }
  
  export default StatusPage;