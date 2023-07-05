import React from "react";
import Card from "react-bootstrap/Card";
import { FaMobileAlt, FaHardHat, FaCar, FaUserTie } from "react-icons/fa";

const OurServices = () => {
  return (
    <div className='text-center mt-5'>
      <h2 className='fw-bold'>Our Services</h2>
      <div className='d-flex'>
        <Card style={{ width: "18rem" }} className='mx-2'>
          <Card.Body className='bg-secondary rounded'>
            <FaMobileAlt />
            <Card.Title>Online Booking</Card.Title>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className='mx-2'>
          <Card.Body className='bg-secondary rounded'>
            <FaHardHat />
            <Card.Title>Catering Service</Card.Title>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className='mx-2'>
          <Card.Body className='bg-secondary rounded'>
            <FaCar />
            <Card.Title>Delivery Service</Card.Title>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className='mx-2'>
          <Card.Body className='bg-secondary rounded'>
            <FaUserTie />
            <Card.Title>Membership</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default OurServices;
