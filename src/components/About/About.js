import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

// Importing Logos
import pythonLogo from "../../Assets/pythonLogo.jpg";
import javaLogo from "../../Assets/javaLogo.jpg";
import cLogo from "../../Assets/cLogo.jpg";
import cppLogo from "../../Assets/cppLogo.jpg";
import scalaLogo from "../../Assets/scalaLogo.jpg";
import javascriptLogo from "../../Assets/javascriptLogo.jpg";

import sqlLogo from "../../Assets/sqlLogo.jpg";
import mongodbLogo from "../../Assets/mongodbLogo.jpg";
import neo4jLogo from "../../Assets/neo4jLogo.jpg";
import postgresqlLogo from "../../Assets/postgresqlLogo.jpg";
import snowflakeLogo from "../../Assets/snowflakeLogo.jpg";
import sqliteLogo from "../../Assets/sqliteLogo.jpg";
import bigqueryLogo from "../../Assets/bigqueryLogo.jpg";

import sparkLogo from "../../Assets/sparkLogo.jpg";
import airflowLogo from "../../Assets/airflowLogo.jpg";
import hadoopLogo from "../../Assets/hadoopLogo.jpg";

import awsLogo from "../../Assets/awsLogo.jpg";
import gcpLogo from "../../Assets/gcpLogo.jpg";
import dockerLogo from "../../Assets/dockerLogo.jpg";
import gitLogo from "../../Assets/gitLogo.jpg";

import reactLogo from "../../Assets/reactLogo.jpg";
import nodejsLogo from "../../Assets/nodejsLogo.jpg";

import tableauLogo from "../../Assets/tableauLogo.jpg";
import powerbiLogo from "../../Assets/powerbiLogo.jpg";
import paraviewLogo from "../../Assets/paraviewLogo.jpg";
import stiboLogo from "../../Assets/stiboLogo.jpg";

import kafkaLogo from "../../Assets/kafkaLogo.jpg";
import luddyLogo from "../../Assets/luddyLogo.jpg";
import mslLogo from "../../Assets/law_logo.jpg";
import cognizantLogo from "../../Assets/cognizant_logo.jpg";

// Experience data including the internship
const experiences = [
  {
    logo: luddyLogo,
    title: "Lead Associate Instructor",
    company: "Luddy School of Computing, Engineering and Informatics, Indiana University Bloomington",
    duration: "Jan 2025 – Present",
    description: [
      "Supporting 100+ students in INFO-I 513 to design, optimize, and deploy AI systems with a focus on real-world impact and responsible AI.",
      "Guiding students in mastering Python, ML workflows, NLP, and large-scale data analysis, ensuring hands-on experience beyond theoretical learning.",
      "Simplifying complex AI concepts, making models, data pipelines, and ethical AI principles practical.",
      "Assisting in fine-tuning models, optimizing performance by up to 30%, ensuring scalability and responsibility.",
      "Enabling students to build, refine, and apply AI models with industry-relevant skills."
    ],
  },
  {
    logo: mslLogo,
    title: "Research Data Engineer",
    company: "Maurer School of Law, Indiana University Bloomington",
    duration: "May 2024 – Present",
    description: [
      "Used spaCy for NER and Gensim for topic modeling, achieving 90% accuracy in classifying judicial documents.",
      "Analyzed judicial datasets with Apache Spark, identifying a 40% rise in redacted content.",
      "Developed data pipelines using PySpark and PostgreSQL to improve query performance.",
      "Built automated workflows integrating structured and unstructured data.",
    ],
  },
  {
    logo: cognizantLogo,
    title: "Data Engineer",
    company: "Cognizant Technology Solutions",
    duration: "Sept 2021 – April 2023",
    description: [
      "Integrated Hadoop with GCP & BigQuery, boosting efficiency by 20% and improving data insights by 40%.",
      "Designed scalable pipelines with Google Cloud tools to migrate 10TB+ data, reducing transfer time by 30%.",
      "Optimized BigQuery queries, cutting retrieval times by 30% and storage costs by 15%.",
      "Automated workflows using Cloud Functions, Cloud Composer, and Pub/Sub, reducing manual effort by 25%."
    ],
  },
  {
    logo: cognizantLogo,
    title: "Google Cloud Data Engineer Intern",
    company: "Cognizant Digital Business (CDB-AIA)",
    duration: "April 2021 – Sept 2021",
    description: [
      "Built ETL pipelines using Hadoop, Hive, Pig, and Spark, improving reporting accuracy by 25%.",
      "Designed automated workflows integrating Oracle, HDFS, and BigQuery for real-time analytics.",
      "Deployed optimized Spark tasks and Python scripts to improve pipeline scalability.",
    ],
  }
];

const skills = [
  { logo: pythonLogo, name: "Python" },
  { logo: javaLogo, name: "Java" },
  { logo: cLogo, name: "C" },
  { logo: cppLogo, name: "C++" },
  { logo: scalaLogo, name: "Scala" },
  { logo: javascriptLogo, name: "JavaScript" },
  { logo: sqlLogo, name: "MySQL" },
  { logo: mongodbLogo, name: "MongoDB" },
  { logo: neo4jLogo, name: "Neo4j" },
  { logo: postgresqlLogo, name: "PostgreSQL" },
  { logo: snowflakeLogo, name: "Snowflake" },
  { logo: sqliteLogo, name: "SQLite3" },
  { logo: bigqueryLogo, name: "Google BigQuery" },
  { logo: sparkLogo, name: "Apache Spark" },
  { logo: airflowLogo, name: "Apache Airflow" },
  { logo: hadoopLogo, name: "Hadoop" },
  { logo: awsLogo, name: "AWS" },
  { logo: gcpLogo, name: "GCP" },
  { logo: dockerLogo, name: "Docker" },
  { logo: kafkaLogo, name: "Apache Kafka" },
  { logo: gitLogo, name: "Git" },
  { logo: reactLogo, name: "React JS" },
  { logo: nodejsLogo, name: "Node.js" },
  { logo: tableauLogo, name: "Tableau" },
  { logo: powerbiLogo, name: "Power BI" },
  { logo: paraviewLogo, name: "ParaView" },
  { logo: stiboLogo, name: "Stibo Systems" }
];

const AboutMe = () => {
  return (
    <Container fluid className="about-me-section" style={{ backgroundColor: "#1a1d3a", color: "#fff", padding: "50px 0" }}>
      <Container className="mt-5">
        <Row className="justify-content-center">
          {/* Experience Section */}
          <Col xs={12} md={8}>
            {experiences.map((exp, idx) => (
              <Card key={idx} className="p-4 mb-4 shadow-lg border-0 rounded d-flex flex-row align-items-start" style={{ background: "rgba(255, 255, 255, 0.15)", color: "#ffffff" }}>
                <div style={{ marginRight: "20px" }}>
                  <Card className="p-3 shadow border-0 rounded" style={{ background: "rgba(255, 255, 255, 0.1)" }}>
                    <img src={exp.logo} alt={exp.company} style={{ width: "120px", height: "120px", objectFit: "contain" }} />
                  </Card>
                </div>
                <div style={{ textAlign: "left", flex: "1" }}>
                  <h4>{exp.title}</h4>
                  <h5 style={{ color: "#FFD700" }}>{exp.company}</h5>
                  <p>{exp.duration}</p>
                  <ul>
                    {exp.description.map((desc, index) => <li key={index}>{desc}</li>)}
                  </ul>
                </div>
              </Card>
            ))}
          </Col>

          {/* Skills Section */}
          <Col xs={12} md={4} className="text-center">
            <h2 style={{ color: "#ff6f61", fontWeight: "700" }}>Skills</h2>
            <Row className="justify-content-center">
              {skills.map((skill, idx) => (
                <Col xs={4} md={3} key={idx} className="mb-3">
                  <Card className="p-3 shadow border-0 rounded-circle d-flex align-items-center justify-content-center" style={{ width: "100px", height: "100px", background: "rgba(173, 164, 164, 0.7)" }}>
                    <img src={skill.logo} alt={skill.name} style={{ width: "60px", height: "60px" }} />
                  </Card>
                  <p>{skill.name}</p>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default AboutMe;
