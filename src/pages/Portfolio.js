import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';

const Portfolio = () => (

  <Container style={{ marginTop: 30 }}>

    <Row className="row mb-3">
      <Col size="md-10 offset-1 page-heading">
        <h3>Portfolio</h3>
      </Col>
    </Row>

    <Row className="row">
      <Col size="md-10 offset-1">

        <CardDeck>
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src="http://placehold.it/250x150" />
            <Card.Body>
              <Card.Title>Match My Mood</Card.Title>
              <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <a href="https://bfeliz.github.io/match-my-mood/" className="btn btn-primary">Match My Mood</a>
            </Card.Body>
          </Card>

          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src="http://placehold.it/250x150" />
            <Card.Body>
              <Card.Title>Wild Kards</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to additional
            content.{' '}
              </Card.Text>
              <a href="#" className="btn btn-primary">Project 2</a>
            </Card.Body>
          </Card>

        </CardDeck>

      </Col>
    </Row>

    <br />
 
    <Row className="row">
      <Col size="md-10 offset-1">

        <CardDeck>
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src="http://placehold.it/250x150" />
            <Card.Body>
              <Card.Title>Work Day Scheduler</Card.Title>
              <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <a href="https://jimgreasley.github.io/work-day-scheduler/" className="btn btn-primary">Work Day Scheduler</a>
            </Card.Body>
          </Card>

          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src="http://placehold.it/250x150" />
            <Card.Body>
              <Card.Title>Weather Dashboard</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to additional
            content.{' '}
              </Card.Text>
              <a href="https://jimgreasley.github.io/Weather-Dashboard/" className="btn btn-primary">Weather Dashboard</a>
            </Card.Body>
          </Card>

        </CardDeck>

      </Col>
    </Row>

  </Container>

);

export default Portfolio;
