import React, { useEffect, useState } from 'react';
import Header from '../Header';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardHeader,
    MDBCardFooter,
    MDBBtn
  } from 'mdb-react-ui-kit';

const ChefRecipes = () => {
    const [recipesData, setRecipesData] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/allData")
        .then((res) => res.json())
        .then((data) => setRecipesData(data.allRecipes));
    }, []);


    return (
        <div>
            <Header></Header>
            <>
            <MDBCard alignment='center'>
      <MDBCardHeader>Featured</MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>Special title treatment</MDBCardTitle>
        <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
      <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter>
    </MDBCard>

            </>
        </div>
    );
};

export default ChefRecipes;