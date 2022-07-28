import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import '../css/nav.css';
import '../css/app.css';

function NavPage() {
    return (
        <Container className="title-banner-container print-hide">
            <Navbar id="title-banner-dv">
                <h3 id="banner-h3-dv">
                    Deer Valley Nametags
                </h3>
                <p id="under-banner-dv">
                    (Demo Only)
                </p>
            </Navbar>
        </Container>
    );
  }
  
  export default NavPage;
  