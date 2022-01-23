import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Nav() {
    const [expand, updateEpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);

    return (
        <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
        classname={navColour ? "sticky" : "navbar"}
        >
            <Container>

            </Container>
        </Navbar>
    )
}