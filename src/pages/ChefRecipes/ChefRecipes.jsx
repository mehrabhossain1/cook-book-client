import React from "react";
import { Button, Container } from "react-bootstrap";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const ChefRecipes = () => {
  // const { id } = useParams();
  const singleChef = useLoaderData();
  // console.log(singleChef.recipes);

  const {
    chef_name,
    chef_picture,
    bio,
    likes,
    num_of_recipes,
    years_of_experience,
  } = singleChef;

  // toast
  const notify = () => toast("Added to Favorite");

  return (
    <Container className='w-75'>
      <h2 className='text-center fw-bold mb-5 mt-3'>ChefRecipes</h2>

      {/* Banner */}
      <Card style={{ width: "" }}>
        <Card.Img
          className='w-25 mx-auto rounded'
          variant='top'
          src={chef_picture}
        />
        <Card.Body>
          <Card.Title>
            {" "}
            <span className='fw-bold'>Name:</span> {chef_name}
          </Card.Title>
          <Card.Text>
            <span className='fw-bold'>Description:</span> {bio}
          </Card.Text>
          <Card.Text>
            <span className='fw-bold'>Likes:</span> {likes}
          </Card.Text>
          <Card.Text>
            <span className='fw-bold'>Numbers of recipes:</span>{" "}
            {num_of_recipes}
          </Card.Text>
          <Card.Text>
            <span className='fw-bold'>Years of experience:</span>{" "}
            {years_of_experience} years
          </Card.Text>
        </Card.Body>
      </Card>

      {/* Chefs recipes */}
      <div className='mt-5'>
        <h2 className='text-center'>Recipes</h2>

        <div className='d-flex'>
          {singleChef.recipes.map((recipe) => {
            return (
              <Row className='g-4 w-100 '>
                <Col>
                  <Card>
                    <Card.Body>
                      <Card.Img
                        className='mb-4 mx-auto d-block'
                        style={{
                          borderRadius: "50%",
                          height: "200px",
                          width: "200px",
                        }}
                        variant='top'
                        src={recipe.img}
                      />
                      <Card.Title className='fw-bold pb-2'>
                        {recipe.recipe_name}
                      </Card.Title>
                      <Card.Text>
                        {" "}
                        <span className='fw-bold'>Ingredients: </span>{" "}
                        {recipe.ingredients}
                      </Card.Text>
                      <Card.Text>
                        {" "}
                        <span className='fw-bold'>
                          Method of cooking:{" "}
                        </span>{" "}
                        {recipe.cooking_method}
                      </Card.Text>
                      <Card.Text>
                        {" "}
                        <span className='fw-bold'>Rating: </span>{" "}
                        {recipe.rating}
                      </Card.Text>
                      <Button onClick={notify} className='btn btn-danger'>
                        Favorite
                      </Button>
                      <ToastContainer />
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            );
          })}
        </div>

        {/* <Row xs={1} md={3} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row> */}
      </div>
    </Container>
  );
};

export default ChefRecipes;
