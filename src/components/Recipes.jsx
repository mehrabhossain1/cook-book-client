import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Recipes = () => {
  const [recipesData, setRecipesData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allData")
      .then((res) => res.json())
      .then((data) => setRecipesData(data));
  }, []);

  console.log(recipesData);

  return (
    <div>
      <Header></Header>
      {/* all recipes */}
      <Container>
        <Row xs={1} md={2} className="g-4">
          {Array.from({ length: 10 }).map((_, idx) => (
            <Col>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                  <Link>
                    <Button variant="outline-warning">Details</Button>{" "}
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Footer></Footer>
    </div>
  );
};

export default Recipes;
