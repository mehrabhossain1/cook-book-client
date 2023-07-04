import React, { useContext, useState } from "react";
import { Container, Form } from "react-bootstrap";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    console.log(name, email, password, photo);

    // create user
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        alert("User created successfully");
      })
      .catch((err) => {
        console.error(err);
      });

    // password validation
    setError("");
    if (password.length < 6) {
      setError("The password is less than 6 characters ");
      return;
    }
  };

  return (
    <Container>
      <MDBContainer fluid>
        <MDBCard className='text-black m-5' style={{ borderRadius: "25px" }}>
          <MDBCardBody>
            <MDBRow>
              <MDBCol
                md='10'
                lg='6'
                className='order-2 order-lg-1 d-flex flex-column align-items-center'
              >
                <Form onSubmit={handleRegister}>
                  <p className='text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4'>
                    Sign up
                  </p>

                  <p className='text-danger'>{error}</p>

                  <div className='d-flex flex-row align-items-center mb-4 '>
                    <MDBIcon fas icon='user me-3' size='lg' />
                    <MDBInput
                      name='name'
                      label='Your Name'
                      id='form1'
                      type='text'
                      className='w-100'
                      required
                    />
                  </div>

                  <div className='d-flex flex-row align-items-center mb-4'>
                    <MDBIcon fas icon='envelope me-3' size='lg' />
                    <MDBInput
                      name='email'
                      label='Your Email'
                      id='form2'
                      type='email'
                      required
                    />
                  </div>

                  <div className='d-flex flex-row align-items-center mb-4'>
                    <MDBIcon fas icon='lock me-3' size='lg' />
                    <MDBInput
                      name='password'
                      label='Password'
                      id='form3'
                      type='password'
                      required
                    />
                  </div>

                  <div className='d-flex flex-row align-items-center mb-4'>
                    <MDBIcon fas icon='image me-3' size='lg' />
                    <MDBInput
                      name='photo'
                      label='Photo URL'
                      id='form4'
                      type='text'
                    />
                  </div>

                  <div className='mb-4'>
                    <MDBCheckbox
                      name='flexCheck'
                      value=''
                      id='flexCheckDefault'
                      label='Accept Terms and Conditions'
                    />
                  </div>

                  <MDBBtn className='mb-4' size='lg'>
                    Register
                  </MDBBtn>
                </Form>

                <p>
                  Already have an account? <Link to='/login'>Login</Link>
                </p>
              </MDBCol>

              <MDBCol
                md='10'
                lg='6'
                className='order-1 order-lg-2 d-flex align-items-center'
              >
                <MDBCardImage
                  src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp'
                  fluid
                />
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </Container>
  );
};

export default Register;
