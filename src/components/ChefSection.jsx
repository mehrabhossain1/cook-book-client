import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import { Container } from "react-bootstrap";
import "../styles/ChefSection.css";

const ChefSection = () => {
  const [recipesData, setRecipesData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allData")
      .then((res) => res.json())
      .then((data) => setRecipesData(data.allRecipes));
  }, []);

  return (
    <div className="d-flex">
      {recipesData.map((recipe) => {
        console.log(recipe.id);
        return (
          <Container className="">
            <MDBCard className="">
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image hover-overlay"
              >
                <MDBCardImage
                  src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
                  fluid
                  alt="..."
                />
                <a>
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <MDBCardTitle>{recipe.chef_name}</MDBCardTitle>
                <p>Years of experience: {recipe.years_of_experience}</p>
                <p>Numbers of recipes: {recipe.num_of_recipes}</p>
                <p>Likes: {recipe.likes}</p>
                <MDBCardText>Description: {recipe.bio}</MDBCardText>
                <MDBBtn href="#">Button</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </Container>
        );
      })}
    </div>
  );
};

export default ChefSection;
