import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Cardsdata from "./CardsData";
import "./Style.css"
import { useDispatch } from "react-redux/es/exports";
import { Add } from "../redux/actions/add";

const Cards = () => {
  const [data, setData] = useState(Cardsdata);
  const dispatch = useDispatch()
  const send = (e)=>{
    console.log(e)
    dispatch(Add(e))
  }

  return (
    <div className="container mt-3">
      <h2 className="text-center">Add to Carts Project</h2>
      <div className="row d-flex justify-content-center align-item-center">
        {data.map((element, id) => {
          return (
            <>
              <Card  style={{ width: "22rem" , border:"none" }} className="mt-4 mx-2 card_style" >
                <Card.Img  style={{ height: "18rem"}} variant="top" src={element.imgdata} className="mt-3"/>
                <Card.Body>
                  <Card.Title>{element.rname}</Card.Title>
                  <Card.Text>Price: ₹ {element.price}<br/>Rating: {element.rating}  </Card.Text>
                  {/* <Card.Text>Quantity:  {element.qnty}   </Card.Text> */}
                  <div className="button_div d-flex justify-content-center ">
                    <Button onClick={()=>send(element)} className="col-lg-12" variant="primary">Add to Cart</Button>
                    </div>
                  
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;

// function BasicExample() {
//   return (
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//   );
// }
