import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Typewriter from "typewriter-effect";
import './Home.css';

function Home() {
  return (
    <section style={{ paddingBottom: '60px' }}> 
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content" style={{ marginBottom: '40px', textAlign: 'center' }}>
              {/* Unique Greeting */}
              <h1 className="greeting-text">
               Greetings, I'm 
              </h1>

              {/* Name with Unique Animation */}
              <h1 className="animated-name">
                <span className="glow-text">Ayantika Nandi</span>
              </h1>

              {/* Typewriter Effect - Below Name */}
              <h2 className="typewriter-text" style={{ marginBottom: '40px', overflow: 'hidden', textAlign: 'center' }}>
                <Typewriter
                  options={{
                    strings: [
                      "An Innovative Thinker",
                      "A Passionate Data Engineer",
                      "A Cloud Enthusiast",
                      "An AI & ML Explorer",
                      "A Problem Solver",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    delay: 75,
                  }}
                />
              </h2>

              {/* Separator Line */}
              <hr className="separator-line" />

              {/* Tagline - Centered */}
              <p className="tagline" style={{ marginTop: '20px' }}>
                Data Engineer & Analyst with 3+ years of experience in building scalable data pipelines,  
                optimizing cloud solutions, and leveraging AI/ML for real-time analytics,  
                data visualization, and business intelligence.
              </p>

         
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
