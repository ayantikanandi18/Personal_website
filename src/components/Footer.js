import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        {/* Left Section - Developed By */}
        <Col md="4" className="footer-copywright">
          <h3>Developed by AYANTIKA NANDI</h3>
        </Col>

        {/* Center Section - Copyright */}
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} AN</h3>
        </Col>

        {/* Right Section - Social Links */}
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            {/* GitHub Link */}
            <li className="social-icons">
              <a
                href="https://github.com/ayantikanandi18"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>

            {/* LinkedIn Link */}
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/ayantika-nandi"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
