import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import Particle from "../Particle";

// Importing project images
import bloomingtonRentals from "../../Assets/bloomingtonRentals.jpg";
import resumeMaker from "../../Assets/resumeMaker.jpg";
import sentimentAnalysis from "../../Assets/sentimentAnalysis.jpg";
import ldaProject from "../../Assets/ldaProject.jpg";
import layoffKafka from "../../Assets/layoffKafka.jpg"; // Update with actual image path

const projects = [
  {
    imgPath: layoffKafka,
    title: "Layoff Trends - Kafka & Real-time Processing",
    category: "Data Engineering",
    description: "A real-time data pipeline that tracks and analyzes global tech layoffs by ingesting, processing, and visualizing streaming data. Uses Apache Kafka for high-throughput message streaming, Docker for containerized deployment, and Grafana with Prometheus for real-time monitoring and interactive analytics dashboards. Implements Kafka Producers and Consumers for efficient data flow, Pandas for preprocessing, and MySQL for structured data storage and query optimization. Integrates with APIs to collect live layoff data, applies data wrangling techniques for trend detection, and utilizes alerting mechanisms to notify users of significant industry shifts.",
    techStack: "Python, Apache Kafka, Docker, Grafana, Prometheus, Pandas, MySQL, REST APIs, Data Streaming, Kafka Producers & Consumers, Visual Studio Code",
    ghLink: "https://github.com/ayantikanandi18/Layoff_Kafka",
  },
  {
    imgPath: bloomingtonRentals,
    title: "Bloomington Rentals - Geospatial Analysis",
    category: "Data Analysis",
    description: "A geospatial analysis project exploring rental price trends in Bloomington, using Python, GeoPandas, and Shapely for mapping rental distributions, geospatial transformations, and boundary overlays. It leverages Folium and Plotly for interactive maps, Matplotlib and Seaborn for static visualizations, Google Maps API for geocoding, Pandas and NumPy for data wrangling, scikit-learn for clustering and trend prediction, Prophet for time-series forecasting, and stores data in CSV, SQLite, and Google BigQuery after extraction with BeautifulSoup and Selenium.",
    techStack: "Python, Pandas,NumPy,GeoPandas,BeautifulSoup,scikit-learn, Folium,Bokeh, Matplotlib, Google Colab",
    ghLink: "https://github.com/ayantikanandi18/Bloomington_Rentals",
  },
  {
    imgPath: resumeMaker,
    title: "AI Resume Maker - NLP & Automation",
    category: "AI & NLP",
    description: "An AI-powered platform that tailors resumes based on job listings by extracting key skills and optimizing content for better applicant tracking system (ATS) compatibility. Integrates Google Gemini AI for advanced NLP-driven resume recommendations and keyword extraction from job descriptions. Uses SerpAPI to scrape real-time job postings and applies TF-IDF and Named Entity Recognition (NER) for skill extraction. Implements Flask for a user-friendly interface where users can upload resumes and receive AI-enhanced suggestions. Stores processed data in MySQL for structured analysis and utilizes Pandas for data preprocessing and formatting.",
    techStack: "Python, Flask, Google Gemini AI, SerpAPI, NLP, TF-IDF, Named Entity Recognition (NER), MySQL, Pandas, Resume Parsing, ATS Optimization",
    ghLink: "https://github.com/ayantikanandi18/Resume_Maker",
  },
  {
    imgPath: sentimentAnalysis,
    title: "Tech Layoffs Sentiment Analysis",
    category: "AI & NLP",
    description: "Analyzes online discussions about tech layoffs using natural language processing to extract sentiment trends and key insights from Reddit posts. Uses PRAW to scrape real-time discussions, preprocesses text with NLTK, and applies TF-IDF for keyword extraction. Implements VADER for rule-based sentiment classification and fine-tunes deep learning models using transformers for more accurate sentiment predictions. Applies topic modeling with Latent Dirichlet Allocation (LDA) to identify recurring themes and trends. Stores processed data in MySQL for structured querying and integrates data visualization tools like Matplotlib and Seaborn to generate sentiment trend reports.",
    techStack: "Python, PRAW (Reddit API), NLTK, TF-IDF, VADER, Transformers, LDA, Scikit-learn, MySQL, Matplotlib, Seaborn, Data Visualization",
    ghLink: "https://github.com/ayantikanandi18/SentimentAnalysis",
  },
  {
    imgPath: ldaProject,
    title: "Market Adaptation to AI - LDA & ML",
    category: "Machine Learning",
    description: "A research-driven study analyzing how industries adapt to AI innovations by extracting key discussion topics and predicting industry sentiment trends. Uses Latent Dirichlet Allocation (LDA) with Gensim for topic modeling to identify dominant themes in AI adoption and applies Random Forest for classification to categorize industry responses. Preprocesses textual data using NLTK and TF-IDF for feature extraction, leverages Scikit-learn for model training and evaluation, and employs MySQL for structured data storage. Integrates data visualization tools like Matplotlib and Seaborn to generate insightful trend reports and forecast AI adoption patterns across sectors.",
    techStack: "Python, Scikit-learn, Gensim, LDA, Random Forest, NLTK, TF-IDF, MySQL, Matplotlib, Seaborn, Data Visualization",
    ghLink: "https://github.com/ayantikanandi18/LDA",
  },
  
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading" style={{ fontSize: "2.8rem", fontWeight: "bold", textAlign: "center" }}>
          A few of my <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white", fontSize: "1.5rem", fontWeight: "500", textAlign: "center" }}>
          Showcasing my expertise in <b>Data Engineering, Data Analytics and AI, ML</b>.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
          {projects.map((project, idx) => (
            <Col md={5} className="project-card" key={idx}>
              <Card className="p-4 shadow-lg border-0 rounded text-center" style={{ background: "rgba(170, 112, 167, 0.23)", color: "white", borderRadius: "15px" }}>
                <Card.Img
                  variant="top"
                  src={project.imgPath}
                  alt={project.title}
                  className="img-fluid"
                  style={{ borderRadius: "10px", opacity: "0.85" }}
                />
                <Card.Body>
                  {/* Category Badge */}
                  <span className="badge bg-light text-dark mb-2" style={{ fontSize: "0.9rem", padding: "5px 10px", borderRadius: "10px" }}>
                    {project.category}
                  </span>

                  {/* Project Title */}
                  <Card.Title style={{ fontSize: "1.6rem", fontWeight: "bold", color: "#FFD700" }}>
                    {project.title}
                  </Card.Title>

                  {/* Project Description */}
                  <Card.Text style={{ fontSize: "1rem", marginBottom: "10px", color: "#DDD", lineHeight: "1.5" }}>
                    {project.description}
                  </Card.Text>

                  {/* Tech Stack */}
                  <p style={{ fontSize: "0.9rem", color: "#AAA", fontStyle: "italic" }}>
                    <strong>Tech Stack:</strong> {project.techStack}
                  </p>

                  {/* GitHub Button */}
                  <Button variant="outline-light" href={project.ghLink} target="_blank" className="mt-2">
                    <FaGithub size={20} style={{ marginRight: "5px" }} /> GitHub
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
