import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

const ChefSection = () => {
  return (
    <div className='mt-5'>
      <h2 className='text-center'>Chef Section</h2>
      <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
        <MDBCol>
          <MDBCard className='h-100'>
            <MDBCardImage
              className='img-fluid rounded-circle w-50 mx-auto'
              src='https://mdbootstrap.com/img/new/standard/city/041.webp'
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
  );
};

export default ChefSection;
