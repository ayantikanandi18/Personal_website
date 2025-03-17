import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png"; // Ensure correct path
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { FaBriefcase } from "react-icons/fa"; // Importing the new icon

function NavBar() {
  const [expand, updateExpanded] = useState(false);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      style={{
        background: "rgba(71, 66, 66, 0.8)", // Dark transparent background
        padding: "15px 20px",
      }}
    >
      <Container>
        {/* Logo Positioned to the Left & Smaller */}
        <Navbar.Brand
          href="/"
          style={{ display: "flex", alignItems: "center" }}
        >
          <img
            src={logo}
            alt="brand-logo"
            style={{
              height: "80px", // Smaller Logo
              width: "140px",
            }}
          />
        </Navbar.Brand>

        {/* Collapsible Menu */}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => updateExpanded(expand ? false : "expanded")}
          style={{
            backgroundColor: "transparent",
            border: "none",
          }}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {/* Home Link */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => updateExpanded(false)}
                style={{ color: "white" }}
              >
                <AiOutlineHome style={{ marginBottom: "1px" }} /> Home
              </Nav.Link>
            </Nav.Item>

           

            {/* Experience Link */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
                style={{ color: "white" }}
              >
                <FaBriefcase style={{ marginBottom: "1px" }} /> Experience
              </Nav.Link>
            </Nav.Item>

            {/* Projects Link */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
                style={{ color: "white" }}
              >
                <AiOutlineFundProjectionScreen style={{ marginBottom: "1px" }} />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            {/* Resume Link */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
                style={{ color: "white" }}
              >
                <CgFileDocument style={{ marginBottom: "1px" }} /> Resume
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
