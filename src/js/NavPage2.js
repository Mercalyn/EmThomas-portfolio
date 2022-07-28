import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faHome, 
    faProjectDiagram,
    faBars,
    faEnvelope,
    faCaretSquareLeft,
    faCode
} from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '../css/nav.css';
import { NavLink } from "react-router-dom";

function NavPage() {
    const[ showColB, setShowColB ] = useState("hide");
    const toggleColB = () => {
        if( showColB === "hide" ){
            setShowColB("navbar-col-b");
        }else{
            setShowColB("hide");
        }
    }

    return (
    <div>
        <div id="navbar-bg">
            <div id="info-panel">
                
                <h4>Project Info</h4>
                <p>Name: </p>
                <p>Made With: </p>
                <p>Comments: </p>
                <Button variant="warning">
                    <FontAwesomeIcon icon={faCaretSquareLeft} />BACK
                </Button>
                <Button variant="success">
                    <FontAwesomeIcon icon={faCode} />SOURCE CODE
                </Button>
            </div>
        </div>
        <div id="navbar-container">
            <div className="navbar-row" id="hamburger-stack-container" onClick={toggleColB}>
                <div className="navbar-col-a">
                    <FontAwesomeIcon icon={faBars} className="navbar-icon" />
                </div>
            </div>
            <NavLink exact to="/" className="navbar-row" activeClassName="active-navbar-row">
                <div className="navbar-col-a">
                    <FontAwesomeIcon icon={faHome} className="navbar-icon" />
                </div>
                <div className={ showColB }>
                    <h4 className="navbar-h4">Home</h4>
                </div>
            </NavLink>
            <NavLink to="/projects" className="navbar-row" activeClassName="active-navbar-row">
                <div className="navbar-col-a">
                    <FontAwesomeIcon icon={faProjectDiagram} className="navbar-icon" />
                </div>
                <div className={ showColB }>
                    <h4 className="navbar-h4">Projects</h4>
                </div>
            </NavLink>
            <a href="https://github.com/Mercalyn" target="_blank" className="navbar-row" activeClassName="active-navbar-row">
                <div className="navbar-col-a">
                    <FontAwesomeIcon icon={faGithub} className="navbar-icon" />
                </div>
                <div className={ showColB }>
                    <h4 className="navbar-h4">Github</h4>
                </div>
            </a>
            <NavLink to="/contact" className="navbar-row" activeClassName="active-navbar-row">
                <div className="navbar-col-a">
                    <FontAwesomeIcon icon={faEnvelope} className="navbar-icon" />
                </div>
                <div className={ showColB }>
                    <h4 className="navbar-h4">Contact</h4>
                </div>
            </NavLink>
        </div>
    </div>
    );
  }
  
  export default NavPage;
  