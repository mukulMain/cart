import React from 'react'
import Table from "react-bootstrap/Table";

const cardDetails = () => {
  return (<>
  <div className='container'>
    <h2 className='text-center'>
        Product Details Page
    </h2>
    <section className='container mt-3'>
        <div className='iteamsdetails container mt-3'>
            <div className='items_img col-lg-3'>
                <img alt='item ' src='https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp'/>
            </div>
            <div className='details'>
                <Table>
                    <tr>
                        <td>
                            <p><strong>Restaurant</strong>: Massala Theoryy</p>
                            <p><strong>Price</strong>: ₹ 350</p>
                            <p><strong>Dishes</strong>: North Indian, Biryani, Mughlai</p>
                            <p><strong>Total</strong>: 0</p>
                        </td>
                        <td>
                            <p><strong>Rating</strong>: <span style={{background:"green", color:"#fff", padding:"2px 5px", borderRadius:"5px"}}>3.8 ★</span></p>
                            <p><strong>Order Review</strong>:  1175 + order placed from here recently</p>
                            <p><strong>Remove</strong>: <i class="fa-solid fa-trash"></i></p>
                        </td>
                    </tr>
                </Table>
            </div>
        </div>
    </section>
  </div>
  </>
    
  )
}

export default cardDetails;