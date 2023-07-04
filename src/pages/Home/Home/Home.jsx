import React from "react";
import { Button, Container } from "react-bootstrap";
import Banner from "../Banner/Banner";

import { useLoaderData } from "react-router-dom";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
const Home = () => {
  const data = useLoaderData();
  console.log(data);

  // const {chefPicture,chefName,likes,numberOfRecipes,yearsOfExperience}=data

  return (
    <Container>
      {/* Banner */}
      <Banner></Banner>

      {/* Chef Section */}
      <div className='mt-5'>
        <h2 className='text-center'>Chef Section</h2>
        <MDBRow className='row-cols-1 row-cols-md-3 g-4 text-center'>
          <MDBCol>
            <MDBCard className='h-100'>
              <MDBCardImage
                className='img-fluid rounded-circle w-50 h-50 mx-auto'
                src={data[0].chefPicture}
                alt='...'
                position='top'
              />
              <MDBCardBody>
                <MDBCardTitle>{data[0].chefName}</MDBCardTitle>
                <MDBCardText>
                  Years Of Experience: {data[0].yearsOfExperience}
                </MDBCardText>
                <MDBCardText>
                  numberOfRecipes: {data[0].numberOfRecipes}
                </MDBCardText>
                <MDBCardText>likes: {data[0].likes}</MDBCardText>

                <Button>View Recipes</Button>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          {/* card 2 */}
          <MDBCol>
            <MDBCard className='h-100'>
              <MDBCardImage
                className='img-fluid rounded-circle w-50 mx-auto'
                src='https://mdbootstrap.com/img/new/standard/city/042.webp'
                alt='...'
                position='top'
              />
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>This is a short card.</MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className='h-100'>
              <MDBCardImage
                className='img-fluid rounded-circle w-50 mx-auto'
                src='https://mdbootstrap.com/img/new/standard/city/043.webp'
                alt='...'
                position='top'
              />
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className='h-100'>
              <MDBCardImage
                className='img-fluid rounded-circle w-50 mx-auto'
                src='https://mdbootstrap.com/img/new/standard/city/044.webp'
                alt='...'
                position='top'
              />
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>
    </Container>
  );
};

export default Home;
