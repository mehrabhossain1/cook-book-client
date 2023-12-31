import React from "react";
import { Button, Container } from "react-bootstrap";
import Banner from "../Banner/Banner";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link, useLoaderData } from "react-router-dom";
import SpecialRecipes from "../SpecialRecipes/SpecialRecipes";
import OurServices from "../OurServices/OurServices";

const Home = () => {
  const chefs = useLoaderData();
  // console.log(chefs);

  return (
    <Container>
      {/* Banner */}
      <Banner></Banner>

      {/* Chef Section */}
      <div className='text-center mt-5'>
        <h2 className='fw-bold'>Chef Section</h2>
        <Row xs={1} lg={3} className='g-4 '>
          {chefs.recipes.map((chef) => {
            // console.log(chef);
            return (
              <Col>
                <Card>
                  <Card.Img
                    className='mx-auto'
                    style={{
                      borderRadius: "50%",
                      height: "200px",
                      width: "200px",
                    }}
                    variant='top'
                    src={chef.chef_picture}
                  />
                  <Card.Body>
                    <Card.Title>{chef.chef_name}</Card.Title>
                    <Card.Text>
                      Years Of Experience: {chef.years_of_experience}
                    </Card.Text>
                    <Card.Text>
                      Number Of Recipes: {chef.num_of_recipes}
                    </Card.Text>
                    <Card.Text>Likes: {chef.likes}</Card.Text>

                    <Link to={`/recipes/${chef.id}`}>
                      <Button>View Recipes</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>

      {/* Our special recipes */}
      <SpecialRecipes></SpecialRecipes>

      {/* Our Services */}
      <OurServices></OurServices>
    </Container>
  );
};

export default Home;
