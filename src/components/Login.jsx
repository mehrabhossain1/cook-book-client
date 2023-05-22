import React, { useContext, useState } from "react";
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import { AuthContext } from "../providers/AuthProvider";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { Link, useNavigate } from "react-router-dom";
// import { useLocation, useHistory, useNavigate } from "react-router-dom";

const Login = () => {
  const { loginUser } = useContext(AuthContext);

  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const githubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navigate = useNavigate();
  // const location = useLocation();
  // const history = useHistory();
  // let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
        <MDBInput
          onChange={(e) => setEmail(e.target.value)}
          wrapperClass="mb-4"
          label="Email address"
          id="form1"
          type="email"
        />
        <MDBInput
          onChange={(e) => setPassword(e.target.value)}
          wrapperClass="mb-4"
          label="Password"
          id="form2"
          type="password"
        />

        <div className="d-flex justify-content-between mx-3 mb-4">
          <MDBCheckbox
            name="flexCheck"
            value=""
            id="flexCheckDefault"
            label="Remember me"
          />
          <a href="!#">Forgot password?</a>
        </div>

        <MDBBtn onClick={handleLogin} className="mb-4">
          Sign in
        </MDBBtn>

        <div className="text-center">
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
          <p>or sign up with:</p>

          <div
            className="d-flex justify-content-center gap-3 mx-auto"
            style={{ width: "40%" }}
          >
            <MDBBtn
              onClick={googleSignIn}
              tag="a"
              color="none"
              className=""
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="google" size="lg" />
            </MDBBtn>

            <MDBBtn
              onClick={githubSignIn}
              tag="a"
              color="none"
              className=""
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="github" size="lg" />
            </MDBBtn>
          </div>
        </div>
      </MDBContainer>
    </div>
  );
};

export default Login;
