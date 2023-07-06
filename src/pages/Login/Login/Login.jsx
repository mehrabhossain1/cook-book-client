import React, { useContext } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  // console.log("login page location", location);
  const from = location.state?.from?.pathname || "/home";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        alert("User logged in successfully");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Container>
      <MDBContainer fluid>
        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol col='12'>
            <MDBCard
              className='bg-dark text-white my-5 mx-auto'
              style={{ borderRadius: "1rem", maxWidth: "400px" }}
            >
              <Form onSubmit={handleLogin}>
                <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
                  <h2 className='fw-bold mb-2 text-uppercase'>Login</h2>
                  <p className='text-white-50 mb-5'>
                    Please enter your Email and Password!
                  </p>

                  <MDBInput
                    name='email'
                    wrapperClass='mb-4 mx-5 w-100'
                    labelClass='text-white'
                    label='Email address'
                    id='formControlLg'
                    type='email'
                    size='lg'
                    required
                  />
                  <MDBInput
                    name='password'
                    wrapperClass='mb-4 mx-5 w-100'
                    labelClass='text-white'
                    label='Password'
                    id='formControlLg2'
                    type='password'
                    size='lg'
                    required
                  />

                  <p className='small mb-3 pb-lg-2'>
                    <a className='text-white-50' href='#!'>
                      Forgot password?
                    </a>
                  </p>
                  <MDBBtn outline className='mx-2 px-5'>
                    Login
                  </MDBBtn>

                  <div className='d-flex flex-row mt-3 mb-5'>
                    <MDBBtn
                      tag='a'
                      color='none'
                      className='m-3'
                      style={{ color: "white" }}
                    >
                      <MDBIcon fab icon='facebook-f' size='lg' />
                    </MDBBtn>

                    <MDBBtn
                      tag='a'
                      color='none'
                      className='m-3'
                      style={{ color: "white" }}
                    >
                      <MDBIcon fab icon='twitter' size='lg' />
                    </MDBBtn>

                    <MDBBtn
                      tag='a'
                      color='none'
                      className='m-3'
                      style={{ color: "white" }}
                    >
                      <MDBIcon fab icon='google' size='lg' />
                    </MDBBtn>
                  </div>

                  <div>
                    <p className='mb-0'>
                      Don't have an account?{" "}
                      <Link to='/register' className='text-white-50 fw-bold'>
                        Sign Up
                      </Link>
                    </p>
                  </div>
                </MDBCardBody>
              </Form>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Container>
  );
};

export default Login;
