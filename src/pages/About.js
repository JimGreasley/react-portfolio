import React from "react";
//import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Button from 'react-bootstrap/Button';

function About() {
  return (
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-10 offset-1 mb-3 page-heading">
          <h3>About Me</h3>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col size="md-10 offset-1">
          <img src="./public/images/myphoto2.png" className="img-fluid float-left mr-3" alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae error eum sint doloremque perspiciatis maxime
          quo nobis neque repellendus corrupti, modi eius maiores dignissimos ea esse fuga possimus. Delectus, expedita.
          Minima voluptas ex assumenda commodi tempora! Alias labore rerum, nisi modi fugit voluptatibus obcaecati, amet
          facere eveniet a, voluptates dicta quo. Distinctio tenetur commodi ipsum, quod quidem maxime repudiandae
            ratione.</p>
          <p>Similique delectus quis assumenda fugit cupiditate veritatis ullam, labore deleniti quod. Enim iusto vel
            vitae sint ad eos nulla libero, ea repellat eveniet velit? Vitae, fugit. Eveniet tempora eos cupiditate.</p>
          <p>Similique delectus quis assumenda fugit cupiditate veritatis ullam, labore deleniti quod. Enim iusto vel
            vitae sint ad eos nulla libero, ea repellat eveniet velit? Vitae, fugit. Eveniet tempora eos cupiditate.</p>
        </Col>
      </Row>
      <br />
      <Row className="row justify-content-center">
        {/* <div className="row justify-content-center"> */}
        <Col size="md-3">
          <Button variant="outline-primary" href="https://github.com/JimGreasley">GitHub</Button>
          {/* <a href="https://github.com/JimGreasley" target="_blank" rel="noopener noreferrer">GitHub</a> */}
        </Col>
        <Col size="md-2">
        </Col>
        <Col size="md-3">
          <Button variant="outline-primary" href="https://linkedin.com/in/jimgreasley" target="_blank">LinkedIn</Button>
          {/* <a href="https://linkedin.com/in/jimgreasley" target="_blank" rel="noopener noreferrer">LinkedIn</a> */}
        </Col>
      </Row>
    </Container>

  );
}

export default About;
