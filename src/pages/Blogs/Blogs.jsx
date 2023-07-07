import React from "react";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import { Container } from "react-bootstrap";

const Blogs = () => {
  return (
    <Container>
      <Header></Header>
      <div className='mt-4'>
        <h4>
          1. Tell us the differences between uncontrolled and controlled
          components.
        </h4>
        <p>
          Ans: Uncontrolled components are not controlled by react state and
          Controlled are used by react components.
        </p>
        <h4>2. How to validate React props using PropTypes?</h4>{" "}
        <p>
          Ans: Step 1: Install PropTypes, Step 2: Import PropTypes, Step 3:
          Define PropTypes, Step 4: Use the Component with Validated Props
        </p>
        <h4>3. Tell us the difference between nodejs and express js.</h4>{" "}
        <p>
          Ans: Node JS is a js runtime and Express JS is the framework of
          NodeJS.
        </p>
        <h4>
          4. What is a custom hook, and why will you create a custom hook?
        </h4>
        <p>
          Ans: A JavaScript function whose name starts with "use" is called a
          custom hook. Creating custom Hooks in React allows developers to
          encapsulate and reuse logic within functional components.{" "}
        </p>
      </div>
      <Footer></Footer>
    </Container>
  );
};

export default Blogs;
