import React from "react";
// import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import { Link } from 'react-router-dom';
import Badge from "@mui/material/Badge";
import { NavLink } from "react-router-dom";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
import Dropdown from 'react-bootstrap/Dropdown';
import { useSelector } from "react-redux";


const Header = () => {
  const getData = useSelector((state) => state.cartReducer)
  console.log(getData);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink to="" className="text-decoration-none text-light mx-4">
            Add to Cart
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="" className="text-decoration-none text-light">
              Home
            </NavLink>
          </Nav>
          <Badge badgeContent={4} color="primary">
            {/* <i
              className="fa-solid fa-cart-shopping text-light"
              style={{ fontSize: 25, cursor: "pointer" }}
            ></i> */}
            <Dropdown>
      <Dropdown.Toggle variant="dark" >
      <i
              className="fa-solid fa-cart-shopping text-light"
              style={{ fontSize: 25, cursor: "pointer" }}
            ></i>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item> */}
        <Dropdown.Item href="#/action-3">your cart is empty</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
          </Badge>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;





// function BasicExample() {
//   return (
//     <Dropdown>
//       <Dropdown.Toggle variant="success" id="dropdown-basic">
//         Dropdown Button
//       </Dropdown.Toggle>

//       <Dropdown.Menu>
//         <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//         <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//         <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
//   );
// }

// export default BasicExample;