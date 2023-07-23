import React, { useRef } from 'react';
import { Image, Col, Row, Container } from 'react-bootstrap';
import '../css/svgspaceship.css';
import Spaceship from '../img/SpaceshipReactSVG.js';
import EarthCorner from '../img/SkyCornerMinC.png';
import EarthLand from '../img/LandAMin.png';
import UpperClouds from '../img/UpperCloudsMin.png';
import LowerClouds from '../img/LowerCloudsMin.png';

/* Holy shit, do you know how I finally got React, SVG and keep IDs to work?? I did the command line interface 
and did disable svgo, like so:
npx @svgr/cli --no-svgo src/img/Spaceship.svg > src/img/SpaceshipReactSVG.js
then open up the js file and delete the svgs height and width props
unbelievable how long that took to figure out!
*/


function SVG() {
    return (
        <Container>
            <Image src={EarthLand} id="land-png" />
            <Image src={EarthLand} id="landb-png" />
            <Image src={UpperClouds} id="upperclouds-png" />
            <Image src={LowerClouds} id="lowerclouds-png" />
            <Image src={EarthCorner} id="earth-png" />
            <Spaceship id="spaceship-svg" />
        </Container>
    );
}
  
  export default SVG;
  