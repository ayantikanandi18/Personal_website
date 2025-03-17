import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import myImg from "../../Assets/recent_pic.jpg";
import iulogo from "../../Assets/iu_logo.jpg";
import smitlogo from "../../Assets/smu_logo.jpg";
import backendImg from "../../Assets/dataengg.png"; 
import frontendImg from "../../Assets/dataana.jpg";
import aiImg from "../../Assets/business.jpg";
import cloudImg from "../../Assets/cloud.jpg";

function About() {
  return (
    <Container
      fluid
      id="about"
      style={{
        background: "linear-gradient(135deg, #10002b, #240046, #3c096c)",
        color: "#ffffff",
        paddingBottom: "50px",
      }}
    >
      <Container>

        {/* Add Space Before About Me */}
        <Row style={{ marginTop: "40px" }}></Row>

        {/* About Me Section */}
        <Row className="justify-content-center mb-4">
          <Col md={10}>
            <Card
              className="p-4 shadow-lg border-0 rounded"
              style={{
                background: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(10px)",
                color: "#ffffff",
                borderRadius: "15px",
              }}
            >
              <Row className="align-items-center">
                {/* Profile Image */}
                <Col md={4} className="d-flex justify-content-center">
                  <img
                    src={myImg}
                    className="img-fluid rounded-circle"
                    alt="avatar"
                    style={{
                      maxWidth: "350px",
                      border: "6px solid #ff6f61",
                      boxShadow: "0px 6px 15px rgba(255, 111, 97, 0.8)",
                      padding: "5px",
                      backgroundColor: "#240046",
                    }}
                  />
                </Col>

                {/* About Text */}
                <Col md={8}>
                  <h1
                    style={{
                      fontSize: "3em",
                      fontWeight: "700",
                      color: "#ff6f61",
                      textAlign: "left",
                    }}
                  >
                    ABOUT ME
                  </h1>
                  <hr
                    style={{
                      width: "50px",
                      border: "2px solid #ff6f61",
                      marginBottom: "10px",
                    }}
                  />
                  <p style={{ fontSize: "1.3rem", lineHeight: "1.8", textAlign: "justify" }}>
                    I am a <b>Data Engineer</b> with a passion for analyzing <b>complex datasets</b>, 
                    optimizing <b>data pipelines</b>, and implementing <b>scalable solutions</b>. 
                    With hands-on experience in <b>Google Cloud, AWS, Apache Spark, Kafka, and Airflow</b>, 
                    I specialize in <b>Big Data processing, Machine Learning, and Cloud Computing</b>.
                  </p>
                  <p style={{ fontSize: "1.3rem", lineHeight: "1.8", textAlign: "justify" }}>
                    Currently pursuing my <b>Master of Science in Data Science</b> at 
                    <b> Indiana University Bloomington</b>, I have worked extensively with 
                    databases such as <b>PostgreSQL, MySQL, MongoDB, Snowflake, and Neo4j</b>.
                  </p>
                  <p style={{ fontSize: "1.3rem", lineHeight: "1.8", textAlign: "justify" }}>
                    My professional experience includes <b>building ETL pipelines</b>, 
                    automating <b>data workflows</b>, and analyzing <b>large-scale datasets</b> 
                    at <b>Cognizant Technology Solutions</b> and <b>Indiana University</b>.
                  </p>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

        {/* Experience Cards */}
        <Row className="justify-content-center text-center">
  {[
    {
      img: backendImg,
      title: "Data Engineering",
      desc: "Want to build scalable, high-performance data pipelines? With 4+ years of experience, I design and optimize ETL workflows, ensuring efficient data ingestion, transformation, and storage. Skilled in Python, SQL, Apache Spark, and cloud data solutions like AWS, Azure, and GCP, I turn raw data into structured gold."
    },
    {
      img: frontendImg,
      title: "Data Science & Machine Learning",
      desc: "Looking for data-driven intelligence? I craft machine learning models and predictive analytics solutions that power business decisions. From NLP to deep learning, I leverage Python, TensorFlow, and Scikit-learn to create scalable AI solutions. Data storytelling? I make complex insights simple with Matplotlib, Seaborn, and Tableau."
    },
    {
      img: aiImg,
      title: "Business Intelligence & Data Analytics",
      desc: "Numbers tell stories, and I bring them to life! With 4+ years of experience in data analysis, I clean, transform, and visualize insights using SQL, Python, and Power BI. Whether it’s ad-hoc analysis, A/B testing, or forecasting trends, I bridge the gap between raw data and actionable strategy."
    },
    {
      img: cloudImg,
      title: "Cloud Data Solutions & Big Data",
      desc: "Data at scale? No problem! I architect cloud-based data solutions using AWS Redshift, Google BigQuery, and Snowflake. With expertise in distributed computing, Spark, and Kubernetes, I ensure seamless integration, security, and efficiency for modern data platforms."
    }
  ].map((exp, idx) => (
    <Col md={3} key={idx} className="d-flex align-items-stretch">
      <Card className="p-4 shadow-lg border-0 rounded d-flex flex-column" style={{ background: "rgba(255, 255, 255, 0.15)", color: "#ffffff", height: "100%" }}>
        <img src={exp.img} alt={exp.title} className="mx-auto mb-3" style={{ width: "250px", height: "200px" }} />
        <h4 style={{ fontSize: "1.8rem", fontWeight: "bold" }}>{exp.title}</h4>
        <p className="flex-grow-1" style={{ fontSize: "1.2rem" }}>{exp.desc}</p>
      </Card>
    </Col>
  ))}
</Row>


        {/* Education Section */}
        <h2 style={{ color: "#ff6f61", fontWeight: "700", textAlign: "center", textTransform: "uppercase", marginTop: "50px" }}>
          Education
        </h2>

        {/* Education Cards */}
        {[
  {
    logo: iulogo,
    degree: "Master of Science, Data Science",
    school: "Indiana University Bloomington",
    link: "https://en.wikipedia.org/wiki/Indiana_University_Bloomington",
    date: "Aug 2023 – May 2025",
    coursework: [
      "Data Visualization",
      "Information Visualization",
      "Scientific Visualization",
      "Engineering Cloud Computing",
      "Social Media Mining",
      "Applied Algorithms",
      "Applied Machine Learning",
      "Applied Database Technologies",
      "Statistical Analysis & Predictive Modeling using R"
    ]
  },
  {
    logo: smitlogo,
    degree: "Bachelor of Technology, Computer Science and Engineering",
    school: "Sikkim Manipal University",
    link: "https://en.wikipedia.org/wiki/Sikkim_Manipal_University",
    date: "July 2017 – Aug 2021",
    coursework: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
      "Datawarehousing Concepts",
      "Data Analytics",
      "Internet of Things"
    ]
  }
].map((edu, idx) => (
  <Row className="justify-content-center mt-4" key={idx}>
    {/* Logo Card */}
    <Col md={2} className="d-flex justify-content-center align-items-center">
      <Card className="shadow-lg border-0 rounded p-3 d-flex justify-content-center align-items-center" 
        style={{ width: "120px", height: "120px", background: "rgba(255, 255, 255, 0.2)" }}>
        <img src={edu.logo} alt={edu.school} style={{ width: "100%", height: "auto", maxHeight: "100px" }} />
      </Card>
    </Col>

    {/* Degree & Details Card */}
    <Col md={8}>
      <Card className="p-4 shadow-lg border-0 rounded edu-card" 
        style={{ background: "rgba(255, 255, 255, 0.15)", color: "#ffffff" }}>
        <h3 style={{ fontSize: "1.8rem", fontWeight: "bold" }}>{edu.degree}</h3>
        <p style={{ fontSize: "1.4rem", marginBottom: "8px" }}>
          <b>
            <a href={edu.link} target="_blank" rel="noopener noreferrer" 
              style={{ color: "#FFD700", textDecoration: "none" }}>
              {edu.school}
            </a>
          </b> | {edu.date}
        </p>

        {/* Coursework Section */}
        <h4 style={{ fontSize: "1.5rem", fontWeight: "bold", marginTop: "10px", textAlign: "left" }}>
          Relevant Coursework:
        </h4>
        <ul style={{ fontSize: "1.3rem", textAlign: "left", paddingLeft: "20px", marginBottom: "0" }}>
          {edu.coursework.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </Card>
    </Col>
  </Row>
))}

        

        {/* Contact Section */}
<h2 style={{ color: "#ff6f61",fontWeight: "700", textAlign: "center", marginTop: "50px" }}>LET'S TALK</h2>
<Row className="justify-content-center text-center mt-4">
  {[
    { 
      icon: <AiOutlineMail size={30} color="#ff6f61" />, 
      text: "ayantikanandi18@gmail.com", 
      link: "mailto:ayantikanandi18@gmail.com" 
    },
    { 
      icon: <AiOutlinePhone size={30} color="#ff6f61" />, 
      text: "(930)-333-4913", 
      link: "tel:+19303334913" 
    },
    { 
      icon: <FaLinkedinIn size={30} color="#ff6f61" />, 
      text: "LinkedIn", 
      link: "https://www.linkedin.com/in/ayantika-nandi"
    }
  ].map((contact, idx) => (
    <Col md={3} key={idx}>
      <Card 
        className="p-3 shadow-lg border-0 rounded d-flex align-items-center justify-content-center" 
        style={{ background: "rgba(255, 255, 255, 0.1)", cursor: "pointer" }}
      >
        <a 
          href={contact.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center", gap: "10px" }}
        >
          {contact.icon} 
          <span style={{ fontSize: "1rem", fontWeight: "500" }}>{contact.text}</span>
        </a>
      </Card>
    </Col>
  ))}
</Row>


      </Container>
    </Container>
  );
}

export default About;
