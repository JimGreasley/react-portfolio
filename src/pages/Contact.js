import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form'

const Contact = () => (
  <Container style={{ marginTop: 30 }}>
    <Row className="row justify-content-between mb-3">
      <Col size="md-3 offset-2">
        <h3>Contact</h3>
      </Col>
      <Col size="md-2">
        <DropdownButton id="dropdown-item-button" title="Phone and Email">
          <Dropdown.Item as="button">602-549-6238</Dropdown.Item>
          <Dropdown.Item as="button">azjimgreasley@gmail.com</Dropdown.Item>
        </DropdownButton>
      </Col>
    </Row>

    <Row className="row">
      <Col size="md-10 offset-1">
        <Form>
          <Form.Group controlId="formGroupText">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>

          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows="5" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>

        </Form>

      </Col>
    </Row> 

  </Container>

);

export default Contact;
