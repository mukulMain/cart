import React from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "@mui/material/Badge";
import { NavLink } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { useSelector } from "react-redux";


const Header = () => {
  const getData = useSelector((state) => state.cartReducer);
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
          <Badge badgeContent={getData.carts.length} color="primary">

            <Dropdown>
              <Dropdown.Toggle variant="dark">
                <i
                  className="fa-solid fa-cart-shopping text-light"
                  style={{ fontSize: 25, cursor: "pointer" }}
                ></i>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                  <Table>
                    <thead>
                      <tr>
                        <th>
                          Image
                        </th>
                        <th>
                          Restaurant
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* <tr>
                        <td>
                          <img alt="" fluid="true" src={e.imgdata}/>
                        </td>
                      </tr> */}
                      {/* {getData .map((e)=>{
                        return(
                            <>
                              <tr>
                                <td>
                                  hjjgjgj
                                </td>
                              </tr>
                            </>
                        )
                      })} */}
                    </tbody>
                  </Table>
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

// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// function AutoLayoutExample () {
//   return (
//     <Container>
//       <Row>
//         <Col>1 of 2</Col>
//         <Col>2 of 2</Col>
//       </Row>
//       <Row>
//         <Col>1 of 3</Col>
//         <Col>2 of 3</Col>
//         <Col>3 of 3</Col>
//       </Row>
//     </Container>
//   );
// }

// export default AutoLayoutExample;
